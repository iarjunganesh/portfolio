import { glob, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_DIR = fileURLToPath(new URL("../app/", import.meta.url));
const DEFINITIVE_FAILURES = new Set([404, 410]);
// Skip only the site itself (not yet deployed at check time). Subdomains like
// bastion.arjunganesh.dev are separately hosted demos and must be checked.
const SELF_SITE = /^https:\/\/(?:www\.)?arjunganesh\.dev(?:[\/?#]|$)/;
const urls = new Set();

for await (const relativePath of glob("**/*.{ts,tsx}", { cwd: SOURCE_DIR })) {
  const source = await readFile(join(SOURCE_DIR, relativePath), "utf8");
  for (const match of source.matchAll(/https:\/\/[^\s"'`<>)}]+/g)) {
    const url = match[0].replace(/[.,;:]$/, "");
    if (!SELF_SITE.test(url)) urls.add(url);
  }
}

async function check(url) {
  const request = (method) =>
    fetch(url, {
      method,
      redirect: "follow",
      signal: AbortSignal.timeout(15_000),
      headers: { "user-agent": "arjunganesh.dev-link-check/1.0" },
    });

  try {
    let response = await request("HEAD");
    if (response.status >= 400) response = await request("GET");

    if (DEFINITIVE_FAILURES.has(response.status)) {
      return { url, status: response.status, level: "error" };
    }
    if (response.status >= 400) {
      return { url, status: response.status, level: "warning" };
    }
    return { url, status: response.status, level: "ok" };
  } catch (error) {
    return { url, status: error instanceof Error ? error.message : String(error), level: "warning" };
  }
}

const results = await Promise.all([...urls].sort().map(check));
const failures = results.filter(({ level }) => level === "error");
const warnings = results.filter(({ level }) => level === "warning");

for (const { url, status } of failures) console.error(`FAIL ${status} ${url}`);
for (const { url, status } of warnings) console.warn(`WARN ${status} ${url}`);
console.log(`Checked ${results.length} external links: ${failures.length} failed, ${warnings.length} warned.`);

if (failures.length > 0) process.exitCode = 1;

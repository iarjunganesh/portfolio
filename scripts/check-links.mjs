import { readFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const SOURCE_PATTERN = new URL("../app/", import.meta.url);
const DEFINITIVE_FAILURES = new Set([404, 410]);
const urls = new Set();

for await (const relativePath of glob("**/*.{ts,tsx}", { cwd: SOURCE_PATTERN })) {
  const source = await readFile(new URL(relativePath, SOURCE_PATTERN), "utf8");
  for (const match of source.matchAll(/https:\/\/[^\s"'`<>)}]+/g)) {
    const url = match[0].replace(/[.,;:]$/, "");
    if (!url.includes("arjunganesh.dev")) urls.add(url);
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

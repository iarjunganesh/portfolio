import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const PUBLIC_DIR = resolve(import.meta.dirname, "../public");
const MAP_SOURCE =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson";

const ffmpegPath = (path) => path.replaceAll("\\", "/").replace(":", "\\:");

function findFont(environmentKey, candidates) {
  const paths = [process.env[environmentKey], ...candidates].filter(Boolean);
  const font = paths.find((path) => existsSync(path));
  if (!font) {
    throw new Error(`No compatible font found. Set ${environmentKey} to a local font file.`);
  }
  return font;
}

const regularFont = findFont("PORTFOLIO_ASSET_FONT", [
  join(process.env.WINDIR ?? "C:\\Windows", "Fonts", "consola.ttf"),
  "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
  "/usr/share/fonts/truetype/liberation2/LiberationMono-Regular.ttf",
  "/System/Library/Fonts/Menlo.ttc",
]);
const boldFont = findFont("PORTFOLIO_ASSET_FONT_BOLD", [
  join(process.env.WINDIR ?? "C:\\Windows", "Fonts", "consolab.ttf"),
  "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf",
  "/usr/share/fonts/truetype/liberation2/LiberationMono-Bold.ttf",
  regularFont,
]);
const FONT = ffmpegPath(regularFont);
const FONT_BOLD = ffmpegPath(boldFont);

const quote = [
  "Huge congratulations to Arjun Ganesh — this is a standout example",
  "of how agentic systems can solve real-world problems with measurable",
  "social impact. A brilliant contribution to the Microsoft Agents",
  "League community.",
].join("\n");

async function renderQuotePlate(tempDir, theme) {
  const isDark = theme === "dark";
  const colors = isDark
    ? { bg: "050506", ink: "f4f2ec", muted: "8d8d86", rule: "212127", signal: "ffb000" }
    : { bg: "f6f5f1", ink: "17170f", muted: "6a6558", rule: "dcd8ca", signal: "c2410c" };
  const quotePath = join(tempDir, `quote-${theme}.txt`);
  await writeFile(quotePath, quote, "utf8");

  const filter = [
    `drawgrid=w=72:h=72:t=1:c=0x${colors.rule}@0.42`,
    `drawbox=x=0:y=0:w=1584:h=10:c=0x${colors.signal}:t=fill`,
    `drawbox=x=88:y=76:w=188:h=34:c=0x${colors.signal}@0.12:t=fill`,
    `drawbox=x=88:y=76:w=188:h=34:c=0x${colors.signal}@0.55:t=1`,
    `drawtext=fontfile='${FONT_BOLD}':text='RECOGNITION / 01':fontcolor=0x${colors.signal}:fontsize=16:x=104:y=84`,
    `drawtext=fontfile='${FONT_BOLD}':text='“':fontcolor=0x${colors.signal}:fontsize=112:x=82:y=122`,
    `drawtext=fontfile='${FONT}':textfile='${ffmpegPath(quotePath)}':fontcolor=0x${colors.ink}:fontsize=34:line_spacing=16:x=168:y=158`,
    `drawbox=x=168:y=390:w=3:h=66:c=0x${colors.signal}:t=fill`,
    `drawtext=fontfile='${FONT_BOLD}':text='LEE STOTT · MICROSOFT':fontcolor=0x${colors.ink}:fontsize=20:x=190:y=394`,
    `drawtext=fontfile='${FONT}':text='Hack for Good result · Microsoft Foundry Discord · 30 Jul 2026':fontcolor=0x${colors.muted}:fontsize=16:x=190:y=427`,
    `drawtext=fontfile='${FONT_BOLD}':text='MICROSOFT AGENTS LEAGUE  /  HACK FOR GOOD':fontcolor=0x${colors.signal}:fontsize=16:x=w-tw-88:y=84`,
    `drawbox=x=88:y=478:w=1408:h=1:c=0x${colors.rule}:t=fill`,
  ].join(",");

  await execFileAsync("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "error",
    "-f",
    "lavfi",
    "-i",
    `color=c=0x${colors.bg}:s=1584x520`,
    "-vf",
    filter,
    "-frames:v",
    "1",
    "-update",
    "1",
    "-y",
    join(PUBLIC_DIR, `argus-recognition-quote-${theme}.png`),
  ]);
}

async function renderMobileQuotePlate(tempDir, theme) {
  const isDark = theme === "dark";
  const colors = isDark
    ? { bg: "050506", ink: "f4f2ec", muted: "8d8d86", rule: "212127", signal: "ffb000" }
    : { bg: "f6f5f1", ink: "17170f", muted: "6a6558", rule: "dcd8ca", signal: "c2410c" };
  const mobileQuote = [
    "Huge congratulations to",
    "Arjun Ganesh — this is a",
    "standout example of how",
    "agentic systems can solve",
    "real-world problems with",
    "measurable social impact.",
    "A brilliant contribution to",
    "the Microsoft Agents League",
    "community.",
  ].join("\n");
  const quotePath = join(tempDir, `quote-${theme}-mobile.txt`);
  await writeFile(quotePath, mobileQuote, "utf8");

  const filter = [
    `drawgrid=w=64:h=64:t=1:c=0x${colors.rule}@0.42`,
    `drawbox=x=0:y=0:w=800:h=10:c=0x${colors.signal}:t=fill`,
    `drawbox=x=56:y=56:w=188:h=34:c=0x${colors.signal}@0.12:t=fill`,
    `drawbox=x=56:y=56:w=188:h=34:c=0x${colors.signal}@0.55:t=1`,
    `drawtext=fontfile='${FONT_BOLD}':text='RECOGNITION / 01':fontcolor=0x${colors.signal}:fontsize=16:x=72:y=64`,
    `drawtext=fontfile='${FONT_BOLD}':text='“':fontcolor=0x${colors.signal}:fontsize=96:x=52:y=108`,
    `drawtext=fontfile='${FONT}':textfile='${ffmpegPath(quotePath)}':fontcolor=0x${colors.ink}:fontsize=30:line_spacing=18:x=116:y=154`,
    `drawbox=x=116:y=700:w=3:h=72:c=0x${colors.signal}:t=fill`,
    `drawtext=fontfile='${FONT_BOLD}':text='LEE STOTT · MICROSOFT':fontcolor=0x${colors.ink}:fontsize=20:x=140:y=705`,
    `drawtext=fontfile='${FONT}':text='Hack for Good result':fontcolor=0x${colors.muted}:fontsize=16:x=140:y=740`,
    `drawtext=fontfile='${FONT}':text='Microsoft Foundry Discord · 30 Jul 2026':fontcolor=0x${colors.muted}:fontsize=16:x=140:y=764`,
    `drawtext=fontfile='${FONT_BOLD}':text='AGENTS LEAGUE  /  HACK FOR GOOD':fontcolor=0x${colors.signal}:fontsize=15:x=56:y=836`,
    `drawbox=x=56:y=818:w=688:h=1:c=0x${colors.rule}:t=fill`,
  ].join(",");

  await execFileAsync("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "error",
    "-f",
    "lavfi",
    "-i",
    `color=c=0x${colors.bg}:s=800x900`,
    "-vf",
    filter,
    "-frames:v",
    "1",
    "-update",
    "1",
    "-y",
    join(PUBLIC_DIR, `argus-recognition-quote-${theme}-mobile.png`),
  ]);
}

function project([longitude, latitude]) {
  const x = ((longitude + 180) / 360) * 1400;
  const y = ((90 - latitude) / 180) * 700;
  return `${x.toFixed(1)} ${y.toFixed(1)}`;
}

function polygonPath(rings) {
  return rings
    .map((ring) => `M ${ring.map(project).join(" L ")} Z`)
    .join(" ");
}

async function renderWorldMap() {
  const response = await fetch(MAP_SOURCE);
  if (!response.ok) throw new Error(`Map download failed: ${response.status}`);
  const geojson = await response.json();
  const paths = geojson.features.flatMap(({ geometry }) => {
    if (geometry.type === "Polygon") return [polygonPath(geometry.coordinates)];
    if (geometry.type === "MultiPolygon") return geometry.coordinates.map(polygonPath);
    return [];
  });
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 700">',
    '<path fill="#000" fill-rule="evenodd" d="',
    paths.join(" "),
    '"/></svg>',
  ].join("");
  await writeFile(join(PUBLIC_DIR, "world-map.svg"), svg, "utf8");
}

const tempDir = await mkdtemp(join(tmpdir(), "portfolio-assets-"));
try {
  await Promise.all([
    renderQuotePlate(tempDir, "light"),
    renderQuotePlate(tempDir, "dark"),
    renderMobileQuotePlate(tempDir, "light"),
    renderMobileQuotePlate(tempDir, "dark"),
  ]);
  await renderWorldMap();
  console.log("Generated press quote plates and career world map.");
} finally {
  await rm(tempDir, { recursive: true, force: true });
}
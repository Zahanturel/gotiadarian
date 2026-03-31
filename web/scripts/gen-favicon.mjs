import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public");
const outFile = path.join(outDir, "favicon.ico");

// Brand primary ~ hsl(43, 59%, 52%) — simple rounded mark
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#d4a84a"/>
  <path fill="#1e3a5f" d="M16 7c-2.5 3.2-6 5.5-6 9.5a6 6 0 1 0 12 0c0-4-3.5-6.3-6-9.5z"/>
</svg>`;

const png32 = await sharp(Buffer.from(svg)).png().resize(32, 32).toBuffer();
const png16 = await sharp(Buffer.from(svg)).png().resize(16, 16).toBuffer();
const ico = await pngToIco([png32, png16]);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ico);
console.log("Wrote", outFile);

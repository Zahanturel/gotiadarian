import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const dir = "public/images/trustees";
for (const f of fs.readdirSync(dir)) {
  const ext = path.extname(f);
  if (ext === ".webp") continue;
  const out = path.join(dir, path.basename(f, ext) + ".webp");
  await sharp(path.join(dir, f))
    .rotate()
    .resize(640, 640, { fit: "cover", position: "attention" })
    .webp({ quality: 80 })
    .toFile(out);
  fs.unlinkSync(path.join(dir, f));
  console.log(out);
}

const hero = "public/assets/goti.png";
if (fs.existsSync(hero)) {
  await sharp(hero).resize(2000, null, { withoutEnlargement: true }).webp({ quality: 78 }).toFile("public/assets/goti.webp");
  await sharp(hero)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile("public/assets/og-goti.jpg");
  fs.unlinkSync(hero);
}

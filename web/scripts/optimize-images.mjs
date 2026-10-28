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

// Portraits where automatic cropping missed the face: re-cut from the originals with explicit crops.
const FROM_ORIGINALS = {
  "yasmin-dotiwala": {
    src: "../attached_assets/yasmin-dotiwala_1764065765185.jpg",
    crop: { left: 0, top: 0, width: 683, height: 683 },
  },
  "gul-palia": {
    src: "../attached_assets/gul-palia_1764065756128.png",
    crop: { left: 40, top: 130, width: 560, height: 560 },
  },
};
for (const [name, { src, crop }] of Object.entries(FROM_ORIGINALS)) {
  if (!fs.existsSync(src)) continue;
  const out = path.join(dir, `${name}.webp`);
  await sharp(src).rotate().extract(crop).resize(640, 640).webp({ quality: 80 }).toFile(out);
  console.log(out);
}

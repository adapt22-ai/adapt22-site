import fs from "node:fs/promises";
import crypto from "node:crypto";
import sharp from "sharp";
const files = [
  "landscape.jpg",
  "ridges.jpg",
  "alpine-valley.jpg",
  "summit.jpg",
  "lake.jpg",
  "bison-banner.png",
  "bison-mobile.png",
];
await fs.mkdir("public/images/optimized", { recursive: true });
const manifest = {};
for (const file of files) {
  const source = await fs.readFile("public/images/" + file);
  const meta = await sharp(source).metadata();
  const hash = crypto
    .createHash("sha256")
    .update(source)
    .digest("hex")
    .slice(0, 10);
  const stem = file.replace(/\.[^.]+$/, "");
  const widths = [480, 768, 1200, 1600, 2200].filter((w) => w < meta.width);
  widths.push(meta.width);
  const variants = [];
  for (const width of widths) {
    const name = `${stem}-${width}-${hash}.webp`;
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 68, effort: 5 })
      .toFile("public/images/optimized/" + name);
    variants.push({ width, src: "/images/optimized/" + name });
  }
  const small = await sharp(source)
    .resize({ width: 32 })
    .webp({ quality: 30 })
    .toBuffer();
  manifest["/images/" + file] = {
    width: meta.width,
    height: meta.height,
    src: variants.find((v) => v.width >= 1200)?.src || variants.at(-1).src,
    srcSet: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    placeholder: `data:image/webp;base64,${small.toString("base64")}`,
  };
}
await fs.writeFile(
  "src/lib/image-manifest.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
const routes = {
  "/": "landscape.jpg",
  "/services": "alpine-valley.jpg",
  "/approach": "bison-banner.png",
  "/about": "summit.jpg",
  "/contact": "lake.jpg",
};
const intents = Object.fromEntries(
  Object.entries(routes).map(([route, file]) => [
    route,
    {
      src: manifest["/images/" + file].src,
      srcSet: manifest["/images/" + file].srcSet,
      ...(route === "/approach"
        ? {
            mobile: {
              src: manifest["/images/bison-mobile.png"].src,
              srcSet: manifest["/images/bison-mobile.png"].srcSet,
            },
          }
        : {}),
    },
  ]),
);
await fs.writeFile(
  "src/lib/hero-intents.json",
  JSON.stringify(intents, null, 2) + "\n",
);
console.log("Prepared responsive WebP images and inline first-paint previews.");

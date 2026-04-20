const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "../src/assets/images");

function getAllPngs(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllPngs(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
      results.push(fullPath);
    }
  }
  return results;
}

async function main() {
  const pngs = getAllPngs(IMAGES_DIR);
  console.log(`Found ${pngs.length} PNG files to convert.`);

  for (const pngPath of pngs) {
    const webpPath = pngPath.replace(/\.png$/i, ".webp");
    try {
      await sharp(pngPath).webp({ quality: 85 }).toFile(webpPath);
      console.log(`  ✓ ${path.relative(IMAGES_DIR, webpPath)}`);
    } catch (err) {
      console.error(`  ✗ ${pngPath}: ${err.message}`);
    }
  }

  console.log("Done.");
}

main();

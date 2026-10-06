// Lists every placeholder still left in lib/content.ts and every placeholder
// photo still in public/images. Run with: npm run placeholders
import { readFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";

const file = "lib/content.ts";
const lines = readFileSync(file, "utf8").split("\n");
const found = [];

lines.forEach((line, i) => {
  const trimmed = line.trim();
  if (trimmed.startsWith("*") || trimmed.startsWith("/*")) return; // skip doc comments
  const brackets = line.match(/\[[^\]]*[A-Z]{2,}[^\]]*\]/g) ?? [];
  for (const token of brackets) found.push(`${file}:${i + 1}  ${token}`);
  if (/\/\/\s*TODO/.test(line)) found.push(`${file}:${i + 1}  ${trimmed}`);
});

// Placeholder photos are generated images; real photos will differ in hash.
const known = new Set(JSON.parse(readFileSync("scripts/placeholder-images.json", "utf8")));
for (const name of readdirSync("public/images")) {
  const path = `public/images/${name}`;
  if (!statSync(path).isFile()) continue;
  const hash = createHash("sha256").update(readFileSync(path)).digest("hex");
  if (known.has(hash)) found.push(`${path}  (placeholder photo)`);
}

if (found.length === 0) {
  console.log("No placeholders left. Ready to launch!");
} else {
  console.log(`${found.length} placeholder(s) left to fill in:\n`);
  for (const item of found) console.log(`  ${item}`);
}

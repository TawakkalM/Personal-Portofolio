import { cp, mkdir, rm, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "assets"), { recursive: true });

for (const file of ["index.html", "robots.txt", "sitemap.xml"]) {
  const source = path.join(root, file);
  if (existsSync(source)) await copyFile(source, path.join(dist, file));
}

for (const folder of ["images", "icons", "css", "js"]) {
  const source = path.join(root, "assets", folder);
  if (existsSync(source)) {
    await cp(source, path.join(dist, "assets", folder), { recursive: true });
  }
}

console.log("Static site built in ./dist");

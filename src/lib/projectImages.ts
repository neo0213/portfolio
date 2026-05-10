import fs from "node:fs";
import path from "node:path";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

export function getProjectImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/projects/${slug}/${f}`);
  } catch {
    return [];
  }
}

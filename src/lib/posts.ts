import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src", "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}

/**
 * Parse frontmatter manually (no gray-matter dependency needed)
 */
function parseFrontmatter(fileContent: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const data: Record<string, unknown> = {};
  let content = fileContent;

  if (content.startsWith("---")) {
    const endIdx = content.indexOf("---", 3);
    if (endIdx !== -1) {
      const frontmatter = content.slice(3, endIdx).trim();
      content = content.slice(endIdx + 3).trim();

      for (const line of frontmatter.split("\n")) {
        const colonIdx = line.indexOf(":");
        if (colonIdx !== -1) {
          const key = line.slice(0, colonIdx).trim();
          let value: unknown = line.slice(colonIdx + 1).trim();

          // Parse arrays [item1, item2]
          if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
            value = value
              .slice(1, -1)
              .split(",")
              .map((v) => v.trim().replace(/"/g, "").replace(/'/g, ""))
              .filter(Boolean);
          } else if (typeof value === "string" && !isNaN(Number(value))) {
            // Try number
          } else {
            value = String(value).replace(/^["']|["']$/g, "");
          }

          data[key] = value;
        }
      }
    }
  }

  return { data, content };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fn) => fn.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = parseFrontmatter(fileContents);

      return {
        slug,
        title: (data.title as string) || slug,
        date: (data.date as string) || "",
        excerpt: (data.excerpt as string) || "",
        tags: (data.tags as string[]) || [],
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = parseFrontmatter(fileContents);

    return {
      slug,
      title: (data.title as string) || slug,
      date: (data.date as string) || "",
      excerpt: (data.excerpt as string) || "",
      tags: (data.tags as string[]) || [],
      content,
    };
  } catch {
    return null;
  }
}

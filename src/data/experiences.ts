import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export type Experience = {
  slug: string;
  period: string;
  role: string;
  organization: string;
  content: string;
  order: number;
  tools?: string[];
  supplementalLinks?: { label: string; url: string }[];
};

function loadExperiences(category: "work" | "volunteer"): Experience[] {
  const directory = join(process.cwd(), "content", category);
  return readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = readFileSync(join(directory, file), "utf8");
      const { data, content } = matter(source);
      const { period, role, organization, order, tools, supplementalLinks } = data;

      if (typeof period !== "string" || typeof role !== "string" || typeof organization !== "string") {
        throw new Error(`Experience file ${category}/${file} needs period, role, and organization frontmatter.`);
      }

      const parsedLinks = Array.isArray(supplementalLinks)
        ? supplementalLinks.flatMap((link) => {
            if (typeof link?.label !== "string" || typeof link?.url !== "string") return [];
            try {
              const url = new URL(link.url);
              return url.protocol === "https:" || url.protocol === "http:"
                ? [{ label: link.label, url: url.toString() }]
                : [];
            } catch {
              return [];
            }
          })
        : [];

      return {
        slug,
        period,
        role,
        organization,
        content,
        order: typeof order === "number" ? order : Number.MAX_SAFE_INTEGER,
        ...(Array.isArray(tools) ? { tools: tools.filter((tool): tool is string => typeof tool === "string") } : {}),
        ...(parsedLinks.length > 0 ? { supplementalLinks: parsedLinks } : {}),
      };
    })
    .sort((a, b) => a.order - b.order);
}

export const workExperiences = loadExperiences("work");
export const volunteerExperiences = loadExperiences("volunteer");

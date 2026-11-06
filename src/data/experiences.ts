import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export type Experience = {
  slug: string;
  period: string;
  role: string;
  organization: string;
  content: string;
  tools?: string[];
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
      const { period, role, organization, tools } = data;

      if (typeof period !== "string" || typeof role !== "string" || typeof organization !== "string") {
        throw new Error(`Experience file ${category}/${file} needs period, role, and organization frontmatter.`);
      }

      return {
        slug,
        period,
        role,
        organization,
        content,
        ...(Array.isArray(tools) ? { tools: tools.filter((tool): tool is string => typeof tool === "string") } : {}),
      };
    });
}

export const workExperiences = loadExperiences("work");
export const volunteerExperiences = loadExperiences("volunteer");

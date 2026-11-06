import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperienceDetail from "@/components/ExperienceDetail";
import { workExperiences } from "@/data/experiences";

type Props = { params: Promise<{ "experience-shortname": string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return workExperiences.map(({ slug }) => ({ "experience-shortname": slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params)["experience-shortname"];
  const experience = workExperiences.find((item) => item.slug === slug);
  return { title: experience ? `${experience.role} at ${experience.organization} — Ying Tong` : "Work Experience — Ying Tong" };
}

export default async function WorkExperiencePage({ params }: Props) {
  const slug = (await params)["experience-shortname"];
  const experience = workExperiences.find((item) => item.slug === slug);
  if (!experience) notFound();

  return <ExperienceDetail experience={experience} category="Work" />;
}

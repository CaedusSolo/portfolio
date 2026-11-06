import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperienceDetail from "@/components/ExperienceDetail";
import { volunteerExperiences } from "@/data/experiences";

type Props = { params: Promise<{ "experience-shortname": string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return volunteerExperiences.map(({ slug }) => ({ "experience-shortname": slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params)["experience-shortname"];
  const experience = volunteerExperiences.find((item) => item.slug === slug);
  return { title: experience ? `${experience.role}, ${experience.organization} — Ying Tong` : "Volunteer Experience — Ying Tong" };
}

export default async function VolunteerExperiencePage({ params }: Props) {
  const slug = (await params)["experience-shortname"];
  const experience = volunteerExperiences.find((item) => item.slug === slug);
  if (!experience) notFound();

  return <ExperienceDetail experience={experience} category="Volunteer" />;
}

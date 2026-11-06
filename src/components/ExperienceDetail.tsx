import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Experience } from "@/data/experiences";

type Props = { experience: Experience; category: "Work" | "Volunteer" };

export default function ExperienceDetail({ experience, category }: Props) {
  const sectionHref = category === "Work" ? "/#work" : "/#volunteer";

  return (
    <div className="site-shell detail-shell">
      <header className="detail-header">
        <Link href={sectionHref} className="back-link">← Back to {category.toLowerCase()} experience</Link>
        <Link href="/" className="detail-home-link">Home</Link>
      </header>
      <main className="detail-main">
        <p className="eyebrow">{category} experience</p>
        <h1 className="detail-title">{experience.role}</h1>
        <p className="detail-organization">{experience.organization}</p>
        <div className="detail-meta"><span>{experience.period}</span><span>{category}</span></div>
        <article className="markdown-content"><ReactMarkdown>{experience.content}</ReactMarkdown></article>
        {experience.tools && (
          <section className="detail-section" aria-labelledby="detail-tools">
            <h2 id="detail-tools">Areas &amp; tools</h2>
            <ul className="detail-tags">{experience.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </section>
        )}
        {experience.supplementalLinks && (
          <section className="detail-section" aria-labelledby="detail-related-links">
            <h2 id="detail-related-links">Related links</h2>
            <ul className="supplemental-links">
              {experience.supplementalLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <footer className="site-footer detail-footer">
        <Link href={sectionHref}>← All {category.toLowerCase()} experience</Link>
        <Link href="/#connect">Get in touch ↗</Link>
      </footer>
    </div>
  );
}

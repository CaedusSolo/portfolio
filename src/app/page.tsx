import Image from "next/image";
import Link from "next/link";
import { volunteerExperiences, workExperiences } from "@/data/experiences";

const projects = [
  { name: "ProPro", type: "Web application", description: "[Add a short sentence about the problem, your role, and the outcome.]", href: "https://propro.click" },
  { name: "Hacktrack MMU", type: "Web application", description: "[Add a short sentence about what you built and who uses it.]", href: "https://hacktrackmmuv2.vercel.app/" },
  { name: "CodeNection 2025", type: "Event website", description: "[Add a short sentence about the project and your contribution.]", href: "https://itsocietymmu.com/codenection-2025-archive/" },
];

const links = [
  { label: "Email", href: "mailto:yingtong0106@gmail.com" },
  { label: "GitHub", href: "https://github.com/CaedusSolo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ying-tong-chow-6164a0239/" },
  { label: "Résumé", href: "/Resume.pdf" },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#volunteer">Volunteer</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main>
        <section className="intro" id="about" aria-labelledby="intro-title">
          <div className="intro-heading">
            <div>
              <p className="eyebrow">Hello, I&apos;m</p>
              <h1 id="intro-title">Ying Tong<span className="accent">.</span></h1>
              <p className="intro-role">Computer Science student &amp; software engineer</p>
            </div>
            <Image src="/images/Chow.jpg" alt="Portrait of Chow Ying Tong" width={104} height={104} className="portrait" priority />
          </div>
          <div className="intro-copy">
            <p>I study Computer Science at MMU Cyberjaya, where I focus on software engineering and building useful things for the web.</p>
            <p>I am passionate about solving real-world problems with technology.</p>
            <p>Outside the classroom, I&apos;m involved with IT Society MMU and enjoy working with people who care about technology and community.</p>
          </div>
        </section>

        <section className="content-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">Work Experience</h2></div>
          <div className="simple-list">
            {workExperiences.map((experience) => (
              <Link className="list-row experience-row" href={`/work/${experience.slug}`} key={experience.slug}>
                <span className="row-meta">{experience.period}</span>
                <h3>{experience.role} at {experience.organization}<span className="row-arrow" aria-hidden="true">↗</span></h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><h2 id="projects-title">Selected projects</h2><span className="section-index">02 / 05</span></div>
          <div className="simple-list">
            {projects.map((project) => (
              <article className="list-row project-row" key={project.name}>
                <span className="row-meta">{project.type}</span>
                <div><h3><a href={project.href} target="_blank" rel="noreferrer">{project.name} <span aria-hidden="true">↗</span></a></h3><p>{project.description}</p></div>
              </article>
            ))}
          </div>
          <a className="text-link section-link" href="https://github.com/CaedusSolo" target="_blank" rel="noreferrer">More on GitHub <span aria-hidden="true">↗</span></a>
        </section>

        <section className="content-section" id="volunteer" aria-labelledby="volunteer-title">
          <div className="section-heading"><h2 id="volunteer-title">Volunteer Experience</h2></div>
          <div className="simple-list">
            {volunteerExperiences.map((experience) => (
              <Link className="list-row experience-row" href={`/volunteer/${experience.slug}`} key={experience.slug}>
                <span className="row-meta">{experience.period}</span>
                <h3>{experience.role}, {experience.organization}<span className="row-arrow" aria-hidden="true">↗</span></h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section" id="writing" aria-labelledby="writing-title">
          <div className="section-heading"><h2 id="writing-title">Writing &amp; notes</h2><span className="section-index">04 / 05</span></div>
          <p className="section-intro">A place for things I&apos;m learning, making, and thinking about.</p>
          <div className="simple-list"><div className="list-row"><span className="row-meta">[Date]</span><div><h3>[Your first article or note]</h3><p>[Add a short description and link when it is ready.]</p></div></div></div>
        </section>

        <section className="content-section connect-section" id="connect" aria-labelledby="connect-title">
          <div className="section-heading"><h2 id="connect-title">Connect</h2><span className="section-index">05 / 05</span></div>
          <p className="section-intro">Have a project, opportunity, or just want to say hello? I&apos;d love to hear from you.</p>
          <div className="social-links">
            {links.map((link) => (
              <a href={link.href} key={link.label} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}>
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Chow Ying Tong</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

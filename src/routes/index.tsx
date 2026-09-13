import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";

import profileImage from "../assets/purva-profile.jpg";
import ecommerceImage from "../assets/ecommerce-project.jpg";
import wellbeingImage from "../assets/wellbeing-project.jpg";
import resumeAsset from "../assets/purva-resume.docx.asset.json";

const email = "purvasharma1706@gmail.com";
const linkedIn = "https://www.linkedin.com/in/purva-sharma-404062258";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Purva Sharma | Angular Software Engineer" },
      { name: "description", content: "Explore Purva Sharma's Angular and full-stack engineering experience, projects, skills, and credentials." },
      { property: "og:title", content: "Purva Sharma | Angular Software Engineer" },
      { property: "og:description", content: "Early-career software engineer specializing in Angular, TypeScript, RxJS, Node.js, MySQL, and Azure." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const skillGroups = [
  { title: "Frontend", text: "Angular · TypeScript · RxJS · Angular Material · HTML5 · CSS3 · JavaScript" },
  { title: "Backend & Data", text: "Node.js · Express.js · REST APIs · MySQL · Python" },
  { title: "Cloud & Practice", text: "Microsoft Azure · Git · Postman · API Testing · Agile · Debugging" },
];

const experiences = [
  {
    role: "Angular Developer",
    company: "PathSecure",
    date: "6 months",
    bullets: [
      "Built and maintained web interfaces using Angular and TypeScript.",
      "Applied component-based development, API integration, and responsive UI practices in a company environment.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Cognifyz Technologies",
    date: "Jun 2025 – Aug 2025",
    bullets: [
      "Built an interactive dashboard within a four-member team, improving data-processing throughput by 30%.",
      "Created Postman API test suites with 95% verification accuracy and helped reduce application errors by 15%.",
    ],
  },
  {
    role: "Cloud Infrastructure & Security Intern",
    company: "Celebal Technologies",
    date: "Jun 2025 – Aug 2025",
    bullets: [
      "Configured Azure virtual machines, networks, security groups, IAM policies, and firewall rules.",
      "Documented infrastructure and security configurations for consistent team knowledge sharing.",
    ],
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-highlight">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      </div>
      <span className="hidden h-px flex-1 bg-border sm:block" />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="Purva Sharma, back to top">
            <span className="grid size-9 place-items-center rounded-md bg-brand font-display text-lg font-semibold text-highlight">P</span>
            <span className="font-semibold">Purva Sharma</span>
            <span className="hidden rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground sm:inline">Software Engineer</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-brand" href="#skills">Skills</a>
            <a className="transition-colors hover:text-brand" href="#experience">Experience</a>
            <a className="transition-colors hover:text-brand" href="#projects">Projects</a>
            <a className="transition-colors hover:text-brand" href="#contact">Contact</a>
          </nav>
          <a href={`mailto:${email}`} className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-deep">Hire me</a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-12 sm:px-6 md:grid-cols-12 md:pb-14 md:pt-16">
          <div className="portfolio-rise md:col-span-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-highlight">B.Tech CSE · Class of 2026</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.06] text-ink sm:text-5xl lg:text-[3.65rem]">
              Building reliable web applications with <span className="italic text-brand">Angular</span> and a full-stack mindset.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Software engineer with six months of Angular experience at PathSecure and hands-on work across TypeScript, RxJS, REST APIs, Node.js, MySQL, and Azure. Based in Jaipur, India.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={resumeAsset.url} download="Purva-Sharma-Resume.docx" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-deep">
                <ArrowDownToLine size={17} aria-hidden="true" /> Download résumé
              </a>
              <a href="#projects" className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">View projects</a>
              <a href={`mailto:${email}`} className="px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-brand">{email}</a>
            </div>
          </div>
          <div className="portfolio-rise md:col-span-5 [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img src={profileImage} alt="Professional software engineering workspace" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-md bg-brand/95 px-4 py-3 text-primary-foreground backdrop-blur">
                <p className="text-xs uppercase tracking-[0.14em] text-highlight">Open to opportunities</p>
                <p className="mt-1 text-sm font-medium">Software Engineer · Angular Developer</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6" aria-label="Career highlights">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[["9.83", "GPA / 10"], ["6 mo", "Angular experience"], ["30%", "Higher throughput"], ["15%", "Lower error rate"]].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-border bg-card p-5">
                <p className="font-display text-3xl font-semibold text-brand">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-border bg-card/55">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
            <SectionHeading eyebrow="Capabilities" title="Technical foundation" />
            <div className="grid gap-4 md:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-lg border border-border bg-card p-6">
                  <Code2 className="mb-5 text-highlight" size={24} aria-hidden="true" />
                  <h3 className="font-semibold text-ink">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{group.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <SectionHeading eyebrow="Experience" title="Where I’ve contributed" />
          <div className="space-y-4">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.role}`} className="rounded-lg border border-border bg-card p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                    <p className="mt-1 font-medium text-brand">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">{item.date}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {item.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-highlight" />{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-border bg-card/55">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
            <SectionHeading eyebrow="Selected work" title="Projects with practical impact" />
            <div className="grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-xl border border-border bg-card">
                <img src={ecommerceImage} alt="E-commerce application displayed on a laptop" width={1024} height={640} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">E-Commerce Web Application</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Full-stack platform with catalogue, search, cart, checkout, JWT authentication, and payment integration. Performance improved by 20% through lazy loading, code splitting, and query optimization.</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand">React · Node.js · MySQL · REST APIs</p>
                </div>
              </article>
              <article className="overflow-hidden rounded-xl border border-border bg-card">
                <img src={wellbeingImage} alt="Wellbeing analytics dashboard displayed on a laptop" width={1024} height={640} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Mental Health & Well-Being Platform</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Role-based dashboards, secure data forms, real-time alerts for at-risk patterns, and a normalized MySQL schema with audit logging.</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand">JavaScript · Python / Node.js · MySQL</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-highlight">Education</p>
              <h2 className="mt-4 font-display text-xl font-semibold">B.Tech, Computer Science</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Arya College of Engineering & I.T.<br />2022 – 2026 · GPA 9.83 / 10</p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-highlight">Certifications</p>
              <h2 className="mt-4 font-display text-xl font-semibold">Industry credentials</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">RHCSA · Oracle Foundations · NPTEL C++ · IIT Bombay C++ · Coursera Python with Honours</p>
            </article>
            <article id="contact" className="rounded-xl bg-brand p-6 text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-highlight">Let’s talk</p>
              <h2 className="mt-4 font-display text-2xl font-semibold">Open to software engineer roles.</h2>
              <p className="mt-3 flex items-center gap-2 text-sm text-primary-foreground/75"><MapPin size={15} /> Jaipur, Rajasthan, India</p>
              <div className="mt-6 flex gap-3">
                <a href={`mailto:${email}`} aria-label="Email Purva" title="Email Purva" className="grid size-10 place-items-center rounded-md bg-highlight text-accent-foreground transition-transform hover:-translate-y-0.5"><Mail size={18} /></a>
                <a href={linkedIn} target="_blank" rel="noreferrer" aria-label="View Purva's LinkedIn" title="LinkedIn" className="grid size-10 place-items-center rounded-md border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10"><ArrowUpRight size={18} /></a>
              </div>
            </article>
          </div>
          <div className="mt-5 rounded-xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-highlight">Additional achievements</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Deloitte Australia Technology Job Simulation · Accenture Nordics Virtual Internship · AceHack 2025 · Startup Expo Presentation</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-sm text-muted-foreground sm:px-6">
          <span>© 2026 Purva Sharma · Software Engineer</span>
          <span>Angular · TypeScript · Node.js · Azure</span>
        </div>
      </footer>
    </div>
  );
}
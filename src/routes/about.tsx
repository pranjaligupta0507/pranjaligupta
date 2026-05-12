import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProfilePhoto } from "@/components/ProfilePhoto";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pranjali Gupta · Product Designer" },
      { name: "description", content: "Product Designer with 9.5+ years across Intuit, Deloitte and KPMG — pairing product thinking with user-centered design across enterprise, fintech and B2B platforms." },
      { property: "og:title", content: "About — Pranjali Gupta" },
      { property: "og:description", content: "Pairing product thinking with user-centered design across enterprise SaaS, fintech and B2B." },
    ],
  }),
  component: About,
});

const timeline = [
  {
    year: "May 2025 — Now",
    role: "Product Designer (UX)",
    company: "Intuit · QuickBooks Payroll",
    body: "Designing payroll setup and processing experiences for U.S. small businesses across the QuickBooks Payroll suite.",
  },
  {
    year: "Jul 2024 — Apr 2025",
    role: "Senior Product Designer (UX)",
    company: "Deloitte · Intela",
    body: "Simplified onboarding and reporting workflows on the Intela platform; supported adoption growth to 2,500+ users across 150+ clients.",
  },
  {
    year: "Oct 2021 — Jul 2024",
    role: "Assistant Manager · Product Design",
    company: "KPMG · Productivity Tool (AT)",
    body: "Led design of an internal productivity tool end-to-end and contributed to UX across AMP, Launch Pad and Intake. Workforce productivity lifted 75%.",
  },
  {
    year: "May 2016 — Oct 2021",
    role: "Senior Product Designer (UX)",
    company: "Deloitte · iPACS, K-1G, DTi",
    body: "Five years on enterprise platforms for internal and client-facing teams — research, workflow design and usability testing.",
  },
];

const skills = [
  "Product thinking",
  "User research & discovery",
  "Information architecture",
  "User journey mapping",
  "Workflow & system design",
  "Wireframing & prototyping (Figma)",
  "Usability testing",
  "Design systems collaboration",
  "Storytelling",
  "Critical thinking",
];

function About() {
  return (
    <>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">About</p>
            <h1 className="display-xl">
              A designer with a <span className="text-gradient">product brain</span>.
            </h1>
            <p className="lede mt-8 max-w-xl">
              I think in products and design for people — pairing user-centered design with the
              business sense to know which trade-offs matter.
            </p>
          </div>
          <div className="md:col-span-5">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      <section className="container-narrow space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          I'm a Product Designer with <span className="text-foreground">9.5+ years</span> across
          enterprise SaaS, fintech and B2B workflows. I've worked inside three global organisations —
          <span className="text-foreground"> Intuit, Deloitte</span> and
          <span className="text-foreground"> KPMG</span> — designing the kind of software that
          thousands of professionals rely on every day.
        </p>
        <p>
          My approach is simple: start with the workflow, ground every decision in user research and
          behavior data, and tie the design back to a measurable outcome. The screen is the
          surface — the real work is upstream of it.
        </p>
        <p>
          Based in Bangalore. Most curious about the next decade of B2B and fintech, where good
          design decides which parts of work humans get to keep.
        </p>
      </section>

      {/* CAREER LADDER */}
      <section className="container-editorial mt-28">
        <p className="eyebrow mb-3">Career</p>
        <h2 className="display-lg mb-12">Nine and a half years, four chapters.</h2>
        <ol className="space-y-0">
          {timeline.map((t, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="grid md:grid-cols-12 gap-6 py-8 border-t border-border"
            >
              <div className="md:col-span-3 font-mono text-xs text-amber tracking-wider">{t.year}</div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl">{t.role}</h3>
                <p className="text-muted-foreground text-sm font-mono mt-1">{t.company}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{t.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* SKILLS + RECOGNITION */}
      <section className="container-editorial mt-28 grid md:grid-cols-2 gap-12">
        <div className="glass rounded-2xl p-8">
          <p className="eyebrow mb-4">Toolkit</p>
          <h3 className="font-display text-3xl mb-6">Craft</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="text-sm px-3 py-1.5 rounded-full border border-border hover:border-amber hover:text-amber transition">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-8">
          <p className="eyebrow mb-4">Recognition</p>
          <h3 className="font-display text-3xl mb-6">Awards</h3>
          <ul className="space-y-5 text-muted-foreground">
            <li><p className="font-mono text-xs text-amber">2024 — 25</p><p className="mt-1">Outstanding Professional, Deloitte.</p></li>
            <li><p className="font-mono text-xs text-amber">2021 — 24</p><p className="mt-1">Kudos award, KPMG — productivity tool launch.</p></li>
            <li><p className="font-mono text-xs text-amber">2016 — 21</p><p className="mt-1">Multiple Spot & Applause awards, Deloitte.</p></li>
          </ul>
        </div>
      </section>

      <section className="container-editorial mt-28 mb-8">
        <div className="border-t border-border pt-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl leading-tight">
            Want the rest of the story over a 30-min call?
          </h2>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-amber text-ink text-sm font-medium hover:scale-105 transition">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}

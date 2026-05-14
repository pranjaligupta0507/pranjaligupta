import { createFileRoute, Link } from "@tanstack/react-router";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { Editable } from "@/components/Editable";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pranjali Gupta · Experienced UX Designer" },
      { name: "description", content: "Experienced UX Designer with 9.5+ years across enterprise SaaS, fintech and B2B — pairing user-centered design with AI-augmented workflows." },
    ],
  }),
  component: About,
});

const LINKEDIN = "https://www.linkedin.com/in/pranjali-gupta-5a1234110/";

const skills = [
  "Product thinking",
  "User research & discovery",
  "Information architecture",
  "User journey mapping",
  "Workflow & system design",
  "Wireframing & prototyping (Figma)",
  "Usability testing",
  "Design systems",
  "Storytelling",
  "Critical thinking",
];

function About() {
  return (
    <>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <Editable id="about.hero.eyebrow" as="p" className="eyebrow mb-6" multiline={false}>
              About
            </Editable>
            <Editable id="about.hero.title" as="h1" className="display-xl">
              A designer with a <span className="text-gradient">product brain</span>.
            </Editable>
            <Editable id="about.hero.lede" as="p" className="lede mt-8 max-w-xl">
              I think in products and design for people.
            </Editable>
          </div>
          <div className="md:col-span-5">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      <section className="container-narrow space-y-6 text-lg leading-relaxed text-muted-foreground">
        <Editable id="about.body.1" as="p">
          I'm an Experienced UX Designer with <span className="text-foreground">9.5+ years</span> across
          enterprise SaaS, fintech and B2B workflows — designing products professionals rely on every day.
        </Editable>
        <Editable id="about.body.2" as="p">
          My approach is simple: start with the workflow, ground every decision in research, and tie
          the design back to a measurable outcome.
        </Editable>
        <Editable id="about.body.3" as="p">
          Based in Bangalore. I use AI to move faster — the judgement and trade-offs stay human.
        </Editable>
      </section>

      {/* Where I've spent my time — short, no resume ladder */}
      <section className="container-editorial mt-24">
        <Editable id="about.places.eyebrow" as="p" className="eyebrow mb-3" multiline={false}>
          Where I've spent my time
        </Editable>
        <Editable id="about.places.title" as="h2" className="display-lg max-w-3xl mb-8">
          A short view of my experience — complex software, made easier to use.
        </Editable>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { c: "Intuit", n: "QuickBooks Payroll — fintech for US mid-market businesses." },
            { c: "Deloitte", n: "Intela & enterprise platforms — onboarding and reporting at scale." },
            { c: "KPMG", n: "Productivity tooling — workforce alignment for global audit teams." },
          ].map((x, i) => (
            <div key={x.c} className="glass rounded-2xl p-6">
              <Editable id={`about.places.${i}.c`} as="h3" className="font-display text-2xl text-amber mb-2">
                {x.c}
              </Editable>
              <Editable id={`about.places.${i}.n`} as="p" className="text-sm text-muted-foreground leading-relaxed">
                {x.n}
              </Editable>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS + RECOGNITION */}
      <section className="container-editorial mt-24 grid md:grid-cols-2 gap-12">
        <div className="glass rounded-2xl p-8">
          <p className="eyebrow mb-4">Toolkit</p>
          <h3 className="font-display text-3xl mb-6">Craft</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <Editable
                key={s}
                id={`about.skill.${i}`}
                as="span"
                multiline={false}
                className="text-sm px-3 py-1.5 rounded-full border border-border hover:border-amber hover:text-amber transition"
              >
                {s}
              </Editable>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-8">
          <p className="eyebrow mb-4">Recognition</p>
          <h3 className="font-display text-3xl mb-6">Awards</h3>
          <ul className="space-y-5 text-muted-foreground">
            <li>
              <p className="font-mono text-xs text-amber">2024 — 25</p>
              <Editable id="about.award.1" as="p" className="mt-1">Outstanding Professional, Deloitte.</Editable>
            </li>
            <li>
              <p className="font-mono text-xs text-amber">2021 — 24</p>
              <Editable id="about.award.2" as="p" className="mt-1">Kudos award, KPMG — productivity tool launch.</Editable>
            </li>
            <li>
              <p className="font-mono text-xs text-amber">2016 — 21</p>
              <Editable id="about.award.3" as="p" className="mt-1">Multiple Spot & Applause awards, Deloitte.</Editable>
            </li>
          </ul>
        </div>
      </section>

      <section className="container-editorial mt-24 mb-8">
        <div className="border-t border-border pt-10 flex flex-wrap items-end justify-between gap-6">
          <Editable id="about.cta.title" as="h2" className="font-display text-3xl md:text-5xl max-w-2xl leading-tight">
            More on LinkedIn, or drop a note.
          </Editable>
          <div className="flex gap-3">
            <a href={LINKEDIN} target="_blank" rel="noopener" className="px-5 py-3 rounded-full border border-border hover:border-amber hover:text-amber transition text-sm">
              LinkedIn ↗
            </a>
            <Link to="/contact" className="px-6 py-3 rounded-full bg-amber text-ink text-sm font-medium hover:scale-105 transition">
              Contact →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

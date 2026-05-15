import { createFileRoute, Link } from "@tanstack/react-router";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { Editable } from "@/components/Editable";
import { CompaniesSection } from "@/components/CompaniesSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pranjali Gupta · Senior UX Designer" },
      { name: "description", content: "Senior UX Designer with 9.5+ years across enterprise SaaS, fintech and B2B — pairing user-centered design with AI-augmented workflows." },
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
  "Problem solving",
  "Storytelling",
  "Critical thinking",
];

function About() {
  return (
    <>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-center">
          <div>
            <Editable id="about.hero.eyebrow" as="p" className="eyebrow mb-4" multiline={false}>
              Bangalore, India
            </Editable>
            <Editable id="about.hero.name" as="p" multiline={false} className="font-display font-bold text-5xl md:text-7xl text-foreground mb-3 leading-[1.05]">
              Pranjali Gupta
            </Editable>
            <Editable id="about.hero.role" as="p" multiline={false} className="font-mono font-bold text-base md:text-lg text-amber mb-8 tracking-wide uppercase">
              Senior UX Designer
            </Editable>
            <Editable id="about.hero.title" as="h1" className="display-lg">
              A designer with a <span className="text-gradient">product brain</span>.
            </Editable>
            <Editable id="about.hero.lede" as="p" className="lede mt-6 max-w-xl">
              I think in products and design for people.
            </Editable>
          </div>
          <div>
            <ProfilePhoto />
          </div>
        </div>
      </section>

      <section className="container-narrow space-y-6 text-lg leading-relaxed text-muted-foreground">
        <Editable id="about.body.1" as="p">
          I'm a Senior UX Designer with <span className="text-foreground">9.5+ years</span> across
          enterprise SaaS, fintech and B2B workflows — designing products professionals rely on every day.
        </Editable>
        <Editable id="about.body.2" as="p">
          My approach is simple: start with the workflow, ground every decision in research, and tie
          the design back to a measurable outcome.
        </Editable>
        <Editable id="about.body.3" as="p">
          Based in Bangalore. I use AI to move faster — the empathy and judgement stay human.
        </Editable>
      </section>

      <CompaniesSection idPrefix="about" />

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
          <h3 className="font-display text-3xl mb-6">Recognition</h3>
          <ul className="space-y-5 text-muted-foreground">
            <li>
              <p className="font-mono text-xs text-amber">2024 — 25</p>
              <Editable id="about.award.1" as="p" className="mt-1">Outstanding Professional Award and multiple appreciations from product, design, leadership and partner teams.</Editable>
            </li>
            <li>
              <p className="font-mono text-xs text-amber">2021 — 24</p>
              <Editable id="about.award.2" as="p" className="mt-1">Recognized at KPMG for the productivity tool and other related work across global teams.</Editable>
            </li>
            <li>
              <p className="font-mono text-xs text-amber">2016 — 21</p>
              <Editable id="about.award.3" as="p" className="mt-1">Multiple Spot & Applause recognitions, Deloitte.</Editable>
            </li>
          </ul>
        </div>
      </section>

      <section className="container-editorial mt-24 mb-16">
        <div className="border-t border-border pt-12">
          <Editable id="about.closing.eyebrow" as="p" className="eyebrow mb-4" multiline={false}>
            Beyond the screen
          </Editable>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Editable id="about.closing.quote" as="blockquote" className="font-display text-3xl md:text-4xl leading-tight text-foreground">
              "Good design is quiet — it removes friction so people can do the work that matters."
            </Editable>
            <Editable id="about.closing.body" as="p" className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Outside of work, I'm usually reading on product, behavior and systems thinking, sketching workflow ideas, or exploring what AI can (and shouldn't) do inside everyday tools. I believe in building carefully, slowly — and shipping work that holds up after launch day.
            </Editable>
          </div>
        </div>
      </section>
    </>
  );
}

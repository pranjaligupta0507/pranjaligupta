import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import casePayroll from "@/assets/case-payroll.jpg";
import caseSupply from "@/assets/case-supply.jpg";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { FlipCard } from "@/components/FlipCard";
import { Editable } from "@/components/Editable";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranjali Gupta — Experienced UX Designer | SaaS · Fintech" },
      { name: "description", content: "Experienced UX Designer with 9.5+ years across enterprise SaaS, fintech and B2B — pairing human-centered design with AI-augmented workflows." },
    ],
  }),
  component: Home,
});

const cases = [
  {
    editKey: "payroll",
    no: "01",
    slug: "/work/payroll-compliance",
    image: casePayroll,
    title: "Making job title a mandatory field for IRS payroll compliance",
    company: "QuickBooks Payroll",
    year: "2025",
    tags: ["Fintech", "Compliance UX", "0 → 1"],
    background:
      "QuickBooks Payroll serves US mid-market businesses that rely on payday to be accurate, timely and compliant. New IRS rules required employers to capture standardized job titles for every employee — a single field with real penalty risk if handled poorly.",
    role:
      "Owned the UX for research, IA, prototyping and stakeholder alignment across product, engineering, compliance and legal — shaping a flow that helped customers complete the requirement without making payroll feel harder.",
    metrics: [
      { stat: "25K+", label: "users impacted" },
      { stat: "100%", label: "IRS compliance" },
      { stat: "↑ Rev", label: "new revenue line" },
    ],
  },
  {
    editKey: "supply",
    no: "02",
    slug: "/work/supply-demand",
    image: caseSupply,
    title: "Turning idle hours into productive output through supply–demand alignment",
    company: "Productivity Tool (AT)",
    year: "2024",
    tags: ["Enterprise SaaS", "B2B Workflows", "Workforce"],
    background:
      "Across KPMG audit teams, preparers, reviewers and resource managers worked in disconnected tools. Idle hours were invisible, requests were lost in email, and billable revenue leaked every week.",
    role:
      "Led design end-to-end from problem framing to launch. Ran user research, mapped the supply-demand workflow, and shipped a unified workspace that aligned availability with live work requests.",
    metrics: [
      { stat: "+75%", label: "workforce productivity" },
      { stat: "1 tool", label: "replaced 3 systems" },
      { stat: "↑ Margin", label: "billable hours" },
    ],
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-16 md:pt-24 pb-16">
        <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Editable id="home.hero.eyebrow" as="p" className="eyebrow !mb-0" multiline={false}>
                Bangalore, India
              </Editable>
              <Editable id="home.hero.openBadge" as="span" multiline={false} className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                ● Open to work
              </Editable>
            </div>
            <Editable id="home.hero.name" as="p" multiline={false} className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Pranjali Gupta
            </Editable>
            <Editable id="home.hero.role" as="p" multiline={false} className="font-mono text-sm md:text-base text-amber mb-6 tracking-wide uppercase">
              Experienced UX Designer
            </Editable>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Editable id="home.hero.title" as="h1" className="display-xl">
                I think in <span className="text-gradient">products</span>,
                <br className="hidden md:block" /> I design for <em className="not-italic text-amber">people</em>.
              </Editable>
            </motion.div>
            <Editable id="home.hero.lede" as="p" className="lede mt-8 max-w-2xl">
              9.5+ years designing products professionals rely on every day — across enterprise SaaS,
              fintech and B2B. I combine human-centered research with AI-augmented workflows, using AI
              to synthesize patterns, explore alternatives and sharpen decisions while keeping empathy
              and judgement at the center.
            </Editable>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="px-5 py-3 rounded-full bg-amber text-ink text-sm font-medium hover:scale-105 transition shadow-lg">
                See selected work →
              </a>
              <Link to="/about" className="px-5 py-3 rounded-full border border-border text-sm hover:border-amber hover:text-amber transition">
                About me
              </Link>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="animate-float">
            <ProfilePhoto />
          </motion.div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container-editorial pt-8 pb-16">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Editable id="home.work.eyebrow" as="p" className="eyebrow mb-3" multiline={false}>
              Selected work
            </Editable>
            <Editable id="home.work.title" as="h2" className="display-lg max-w-2xl">
              Selected case studies, told through the problem, process and outcome.
            </Editable>
          </div>
          <Editable id="home.work.note" as="p" className="text-sm text-muted-foreground max-w-xs font-mono">
            Tap a tile for the short version. Open it for the full story.
          </Editable>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <FlipCard key={c.slug} {...c} />
          ))}
        </div>
      </section>

      {/* IMPACT STRIP — fully editable */}
      <section className="border-y border-border glass">
        <div className="container-editorial py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["75%", "lift in workforce productivity"],
            ["25K+", "users on systems I designed"],
            ["2,500+", "users adopted across 150+ clients"],
              ["9.5 yrs", "across enterprise SaaS, fintech & B2B"],
          ].map(([n, l], i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <Editable id={`home.impact.${i}.n`} as="div" multiline={false} className="font-display text-4xl md:text-5xl text-gradient">
                {n}
              </Editable>
              <Editable id={`home.impact.${i}.l`} as="p" className="text-sm text-muted-foreground mt-2 leading-snug">
                {l}
              </Editable>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="container-editorial mt-28">
        <Editable id="home.approach.eyebrow" as="p" className="eyebrow mb-3" multiline={false}>
          How I work
        </Editable>
        <Editable id="home.approach.title" as="h2" className="display-lg max-w-3xl">
          Human judgement, sharpened by AI — grounded in research and measured by outcomes.
        </Editable>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Product thinking, first",
              d: "I start with the workflow and the business model — what is the user trying to accomplish, and what does success look like for the company?",
            },
            {
              t: "Human + AI, in the loop",
              d: "I use AI for research synthesis, rapid exploration, content drafts and edge-case generation — then bring my own judgement to the trade-offs that actually ship.",
            },
            {
              t: "Compliance as clarity",
              d: "In fintech, payroll and audit, the rules can't bend. The job is to make them feel like guidance, not a maze.",
            },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="glass rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="font-display text-3xl text-amber mb-3">0{i + 1}</div>
              <Editable id={`home.approach.${i}.t`} as="h3" className="font-display text-xl leading-snug mb-3">
                {p.t}
              </Editable>
              <Editable id={`home.approach.${i}.d`} as="p" className="text-sm text-muted-foreground leading-relaxed">
                {p.d}
              </Editable>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial mt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-8 items-end" style={{ background: "var(--gradient-amber)" }}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink/70 mb-4">Get in touch</p>
            <Editable id="home.cta.title" as="h2" className="font-display text-4xl md:text-5xl leading-[1.05] max-w-2xl text-ink">
              If something here resonates, say hi.
            </Editable>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-mist text-sm hover:scale-105 transition self-start">
            Start a conversation <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

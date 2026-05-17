import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import casePayroll from "@/assets/case-payroll.jpg";
import caseSupply from "@/assets/case-supply.jpg";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { FlipCard } from "@/components/FlipCard";
import { Editable } from "@/components/Editable";
import { CompaniesSection } from "@/components/CompaniesSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranjali Gupta — Senior UX Designer | SaaS · Fintech" },
      { name: "description", content: "Senior UX Designer with 9.5+ years across enterprise SaaS, fintech and B2B — pairing human-centered design with AI-augmented workflows." },
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
    company: "QuickBooks Payroll · Intuit",
    year: "2025",
    tags: ["Fintech", "Compliance UX", "0 → 1"],
    background:
      "QuickBooks Payroll serves US small and mid-market businesses. A new IRS reporting requirement turned a single field — job title — into a compliance-critical step that, if mishandled, exposed customers to penalties and Intuit to churn risk.",
    role:
      "Senior Product Designer (UX) — owned end-to-end design: research, IA, prototyping and stakeholder alignment across product, engineering, compliance and legal. Delivered a compliance-first experience that helps businesses meet IRS reporting requirements, avoid penalties and unlocks new revenue.",
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
    title: "Turning idle hours into productive output & revenue through supply–demand alignment",
    company: "Productivity Tool (AT) · KPMG",
    year: "2024",
    tags: ["Enterprise SaaS", "B2B Workflows", "Workforce"],
    background:
      "Across KPMG audit teams, preparers, reviewers and resource/project managers worked in disconnected tools. Idle hours were invisible, requests were lost in email, and billable revenue leaked every week.",
    role:
      "Senior Product Designer (UX) — led design end-to-end from problem definition to launch. Delivered a unified platform for preparers, reviewers and resource managers to align work requests with availability and improve revenue generation.",
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
            <Editable id="home.hero.eyebrow" as="p" className="eyebrow mb-4" multiline={false}>
              Bangalore, India
            </Editable>
            <Editable id="home.hero.name" as="p" multiline={false} className="font-display font-bold text-5xl md:text-7xl text-foreground mb-3 leading-[1.05]">
              Pranjali Gupta
            </Editable>
            <Editable id="home.hero.role" as="p" multiline={false} className="font-mono font-bold text-base md:text-lg text-amber mb-6 tracking-wide uppercase">
              Senior UX Designer
            </Editable>
            <div className="mb-8">
              <Editable id="home.hero.openBadge" as="span" multiline={false} className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                ● Open to work
              </Editable>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Editable id="home.hero.title" as="h1" className="display-xl">
I think in <span className="text-gradient">products</span> and design for <em className="not-italic text-amber">people</em>.
              </Editable>
            </motion.div>
            <Editable id="home.hero.lede" as="p" className="lede mt-8 max-w-2xl">
              Senior UX Designer with 9.5+ years across enterprise SaaS, fintech and B2B — designing
              products professionals rely on every day. I pair human-centered research with AI-augmented
              workflows, using AI to sharpen decisions while keeping empathy and judgement human.
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
              Selected case studies — the problem, the process, and what shipped.
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

      {/* COMPANIES */}
      <CompaniesSection idPrefix="home" />

      {/* APPROACH */}
      <section className="container-editorial mt-28">
        <Editable id="home.approach.eyebrow" as="p" className="eyebrow mb-3" multiline={false}>
          How I work
        </Editable>
        <Editable id="home.approach.title" as="h2" className="display-lg max-w-3xl">
          Human + AI — design grounded in research, tied to outcomes.
        </Editable>
        <Editable id="home.approach.sub" as="p" className="lede mt-6 max-w-3xl">
          My work sits at the intersection of <span className="text-foreground">user, product, business and revenue</span> — every decision earns its place against all four. AI sharpens the speed and surface area; the judgement, empathy and trade-offs stay human.
        </Editable>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Product — think in workflows",
              d: "I design for the whole job, not the screen. Information architecture, system behavior and edge cases matter as much as the happy path.",
            },
            {
              t: "User centric — start with the people",
              d: "Research, interviews and shadowing come before pixels. The fastest way to ship the wrong thing is to skip the people it's for.",
            },
            {
              t: "Revenue — design that compounds",
              d: "In fintech, payroll and audit, clarity is revenue. I make the rules feel like guidance, unlock new lines of business, and use AI to get there faster without losing the human in the loop.",
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

    </>
  );
}

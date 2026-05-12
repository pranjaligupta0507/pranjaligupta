import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import casePayroll from "@/assets/case-payroll.jpg";
import caseSupply from "@/assets/case-supply.jpg";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { FlipCard } from "@/components/FlipCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranjali Gupta — Product Designer | Enterprise SaaS · Fintech · B2B" },
      { name: "description", content: "Product Designer with 9.5+ years across Intuit, Deloitte and KPMG — turning complex enterprise, fintech and B2B workflows into clear, usable products." },
    ],
  }),
  component: Home,
});

const cases = [
  {
    no: "01",
    slug: "/work/payroll-compliance",
    image: casePayroll,
    title: "Making Job Title a Mandatory Field for IRS Payroll Compliance",
    company: "Intuit · QuickBooks Payroll",
    year: "2025",
    tags: ["Fintech", "Compliance UX", "0 → 1"],
    background:
      "QuickBooks Payroll serves millions of US small businesses. New IRS rules required employers to capture standardized job titles for every employee — without it, businesses risked penalties and Intuit risked compliance gaps across SKUs.",
    role:
      "Lead designer for the end-to-end employee setup flow. I owned research, IA, prototyping and stakeholder sign-off across product, engineering, compliance and legal — shipping a flow that nudges existing customers without breaking trust.",
    metrics: [
      { stat: "25K+", label: "users impacted" },
      { stat: "100%", label: "IRS compliance" },
      { stat: "↑ Rev", label: "new revenue line" },
    ],
  },
  {
    no: "02",
    slug: "/work/supply-demand",
    image: caseSupply,
    title: "Turning Idle Hours into Productive Output through Supply–Demand Alignment",
    company: "KPMG · Productivity Tool (AT)",
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
      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-6"
            >
              Pranjali Gupta · Product Designer · Bangalore
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="display-xl"
            >
              I think in <span className="text-gradient">products</span>,
              <br className="hidden md:block" /> I design for <em className="not-italic text-amber">people</em>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lede mt-8 max-w-2xl"
            >
              9.5+ years designing enterprise SaaS, fintech and B2B platforms at
              <span className="text-foreground"> Intuit, Deloitte</span> and
              <span className="text-foreground"> KPMG</span>. I pair product thinking with
              user-centered design — so every screen is anchored in a real workflow, a real user,
              and a measurable business outcome.
            </motion.p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="px-5 py-3 rounded-full bg-amber text-ink text-sm font-medium hover:scale-105 transition shadow-lg">
                See selected work →
              </a>
              <Link to="/about" className="px-5 py-3 rounded-full border border-border text-sm hover:border-amber hover:text-amber transition">
                About me
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="animate-float"
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="border-y border-border glass">
        <div className="container-editorial py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["75%", "lift in workforce productivity"],
            ["25K+", "users on systems I designed"],
            ["2,500+", "users adopted across 150+ clients"],
            ["9.5 yrs", "across 3 global enterprises"],
          ].map(([n, l], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="font-display text-4xl md:text-5xl text-gradient">{n}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-snug">{l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container-editorial pt-24 pb-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">Selected Work</p>
            <h2 className="display-lg max-w-2xl">Two stories about <br/>taming complexity.</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs font-mono">
            Tap a tile to flip it. Open the full story for the deep dive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <FlipCard key={c.slug} {...c} />
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="container-editorial mt-32">
        <p className="eyebrow mb-3">How I think</p>
        <h2 className="display-lg max-w-3xl">
          Great UX inside enterprise software isn't about <em className="text-amber not-italic">delight</em> —
          it's about removing the dread that builds up over 200 clicks a day.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Product thinking, first",
              d: "I start with the workflow and the business model — what is the user trying to accomplish, and what does success look like for the company?",
            },
            {
              t: "User-centered design, always",
              d: "Every decision is grounded in research, behavior data and qualitative insight — not aesthetics for their own sake.",
            },
            {
              t: "Compliance as clarity",
              d: "In fintech, payroll and audit, the rules can't bend. My job is to make those rules feel like guidance, not a maze.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-7 hover:-translate-y-1 transition-transform"
            >
              <div className="font-display text-3xl text-amber mb-3">0{i + 1}</div>
              <h3 className="font-display text-xl leading-snug mb-3">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-8 items-end"
          style={{ background: "var(--gradient-amber)" }}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink/70 mb-4">Let's build something</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] max-w-2xl text-ink">
              If you're working on something complicated and human — I'd love to hear about it.
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-mist text-sm hover:scale-105 transition self-start">
            Start a conversation <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

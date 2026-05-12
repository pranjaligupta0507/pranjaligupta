import { createFileRoute, Link } from "@tanstack/react-router";
import casePayroll from "@/assets/case-payroll.jpg";
import caseSupply from "@/assets/case-supply.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranjali Gupta — Senior Product Designer" },
      { name: "description", content: "Selected work from a Senior Product Designer with 9.5+ years simplifying enterprise SaaS, fintech & B2B workflows at Intuit, Deloitte and KPMG." },
    ],
  }),
  component: Home,
});

const cases = [
  {
    slug: "/work/payroll-compliance",
    no: "01",
    company: "Intuit · QuickBooks Payroll",
    year: "2025",
    title: "Making job title a mandatory field for IRS payroll compliance",
    summary: "A compliance-first payroll experience that helps SMBs meet IRS reporting requirements, avoid penalties, and unlock new revenue lines — without breaking trust with existing customers.",
    image: casePayroll,
    tags: ["Fintech", "Compliance UX", "0→1"],
  },
  {
    slug: "/work/supply-demand",
    no: "02",
    company: "KPMG · Productivity Tool (AT)",
    year: "2024",
    title: "Turning idle hours into productive output through supply–demand alignment",
    summary: "A unified workspace that lets preparers, reviewers and resource managers align work requests with availability — improving workforce productivity by 75% and protecting billable revenue.",
    image: caseSupply,
    tags: ["Enterprise SaaS", "Workflow design", "B2B"],
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-20 md:pt-32 pb-24">
        <p className="eyebrow mb-8">Senior Product Designer · Bangalore · Open to Senior UX roles</p>
        <h1 className="display-xl">
          I design <em className="text-accent not-italic">calm</em> inside the
          <br className="hidden md:block" /> most complicated software
          <br className="hidden md:block" /> people use at work.
        </h1>
        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <p className="lede max-w-2xl">
            9.5+ years inside enterprise SaaS, fintech and internal platforms at
            <span className="text-foreground"> Intuit, Deloitte</span> and
            <span className="text-foreground"> KPMG</span>. I came to design through product
            management — so I obsess over the workflow, the business case, and the
            human stuck in the middle of both.
          </p>
          <div className="flex gap-3">
            <a href="#work" className="px-5 py-3 rounded-full bg-foreground text-background text-sm hover:bg-accent transition">See selected work</a>
            <Link to="/about" className="px-5 py-3 rounded-full border border-border text-sm hover:border-foreground transition">My story</Link>
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-editorial py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["75%", "lift in workforce productivity"],
            ["25K+", "users on systems I designed"],
            ["2,500+", "users adopted across 150+ clients"],
            ["9.5 yrs", "PM + design across 3 enterprises"],
          ].map(([n, l]) => (
            <div key={n}>
              <div className="font-display text-4xl md:text-5xl">{n}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-snug">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container-editorial pt-24 pb-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-3">Selected Work — 2024 → 2025</p>
            <h2 className="display-lg">Two stories about <br/> taming complexity.</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
            More NDA-protected work available on request — including RBAC migration for 25K+ users at QuickBooks.
          </p>
        </div>

        <div className="space-y-24">
          {cases.map((c, i) => (
            <Link
              to={c.slug}
              key={c.slug}
              className="group grid md:grid-cols-12 gap-8 items-start"
            >
              <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden rounded-md bg-secondary">
                  <img
                    src={c.image}
                    width={1600}
                    height={1024}
                    loading={i === 0 ? "eager" : "lazy"}
                    alt={c.title}
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-4 mb-4 font-mono text-xs text-muted-foreground">
                  <span>{c.no}</span>
                  <span className="h-px w-8 bg-border" />
                  <span>{c.company}</span>
                  <span>· {c.year}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-tight group-hover:text-accent transition">
                  {c.title}
                </h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">{c.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-border">{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 mt-8 text-sm link-underline">
                  Read the case study <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="container-editorial mt-32">
        <p className="eyebrow mb-3">How I think</p>
        <h2 className="display-lg max-w-3xl">
          Good UX inside an enterprise isn't about <em className="text-accent not-italic">delight</em> —
          it's about removing the dread that builds up over 200 clicks a day.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {[
            {
              t: "Start from the workflow, not the screen",
              d: "I map the real chain of decisions a user is making across systems before I touch a wireframe. The screen is just the surface.",
            },
            {
              t: "Translate compliance into clarity",
              d: "Payroll, tax and audit work has rules that can't bend. My job is to make the rules feel like guidance, not a maze.",
            },
            {
              t: "Tie every flow to a business outcome",
              d: "Coming from PM means I'll defend a design with adoption, retention or revenue numbers — not just craft.",
            },
          ].map((p) => (
            <div key={p.t} className="border-t border-border pt-6">
              <h3 className="font-display text-xl leading-snug mb-3">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial mt-32">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <p className="eyebrow text-background/60 mb-4">Open to Senior / Lead UX roles</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] max-w-2xl">
              If you're hiring a designer who can hold both the user and the P&L in their head — let's talk.
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground text-sm hover:bg-accent hover:text-background transition self-start">
            Start a conversation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

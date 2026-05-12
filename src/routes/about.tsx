import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pranjali Gupta" },
      { name: "description", content: "From product manager to senior product designer: 9.5 years inside enterprise SaaS, fintech and internal platforms at Intuit, Deloitte and KPMG." },
      { property: "og:title", content: "About — Pranjali Gupta" },
      { property: "og:description", content: "The story of a designer who came in through product management — and stayed for the workflow." },
    ],
  }),
  component: About,
});

const timeline = [
  {
    year: "May 2025 → Now",
    role: "Senior Product Designer (UX)",
    company: "Intuit — QuickBooks Payroll",
    body: "Redesigning payroll setup and processing for U.S. small businesses. Translating IRS compliance rules and support insights into workflows that don't punish first-time users. Led RBAC redesign for 25K+ users across QuickBooks Online migration.",
  },
  {
    year: "Jul 2024 → Apr 2025",
    role: "Senior Product Designer (UX)",
    company: "Deloitte — Intela Platform",
    body: "Reduced friction in onboarding and reporting flows. The work helped grow the platform to 2,500+ users across 150+ clients.",
  },
  {
    year: "Oct 2021 → Jul 2024",
    role: "Assistant Manager, Product Design",
    company: "KPMG — AT, AMP, Launch Pad, Intake Tool",
    body: "Owned end-to-end design of the productivity tool (AT) from problem framing to launch. Workforce productivity rose 75%. Awarded Kudos for the workflow & UX impact.",
  },
  {
    year: "May 2016 → Oct 2021",
    role: "Senior Product Designer (UX)",
    company: "Deloitte — iPACS, K-1G, DTi",
    body: "Five years inside enterprise platforms for internal and client-facing teams. Multiple Spot & Applause awards for high-impact product work.",
  },
];

function About() {
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-16">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">About</p>
            <h1 className="display-xl">
              I'm a designer who <em className="text-accent not-italic">used to</em> be a product manager.
            </h1>
            <p className="lede mt-8 max-w-xl">
              Which means I can't help thinking about the user, the engineer
              and the spreadsheet at the same time.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-lg overflow-hidden bg-secondary aspect-[4/5]">
              <img src={portrait} alt="Illustrated portrait of Pranjali Gupta" width={1024} height={1280} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow space-y-8 text-lg leading-relaxed">
        <p>
          I started my career in 2016 inside Deloitte's enterprise tooling team —
          building things almost no end customer ever sees, but thousands of
          professionals depend on every single day. Internal platforms taught me
          something most consumer designers never have to learn: <span className="text-foreground">when a workflow is broken, you can't tell the user to "just install another app."</span> They're stuck with you. Your job is to make their day better.
        </p>
        <p>
          Somewhere between iPACS, K-1G and DTi, I realised I wasn't just designing
          screens. I was reasoning about <em>incentives</em>: which team will resist
          this change, which compliance rule we can't bend, which metric a Partner
          will defend in a quarterly review. That's product thinking — and it's
          why I leaned into design with a PM's spine.
        </p>
        <p>
          At <span className="text-foreground">KPMG</span> I led the productivity
          tool (AT) end-to-end and watched a 75% productivity lift land on the
          dashboards I'd argued for in user interviews. At
          <span className="text-foreground"> Deloitte's Intela platform</span> I
          rebuilt onboarding and reporting until adoption crossed 2,500 users
          across 150 clients. Today, at
          <span className="text-foreground"> Intuit's QuickBooks Payroll</span>,
          I get to do the hardest version of the same work — making U.S. tax
          compliance feel like guidance instead of a trap, for small business
          owners who just want to pay their team on Friday.
        </p>
        <p>
          I'm based in Bangalore, fluent in English, Hindi and Punjabi, and most
          curious about <span className="text-foreground">the next ten years of B2B and fintech</span> —
          the era where AI quietly replaces the parts of work nobody enjoyed,
          and good design decides which parts of work humans get to keep.
        </p>
      </section>

      {/* CAREER LADDER */}
      <section className="container-editorial mt-32">
        <p className="eyebrow mb-3">Career Ladder</p>
        <h2 className="display-lg mb-16">Nine and a half years, four chapters.</h2>
        <ol className="space-y-0">
          {timeline.map((t, i) => (
            <li key={i} className="grid md:grid-cols-12 gap-6 py-10 border-t border-border">
              <div className="md:col-span-3 font-mono text-xs text-muted-foreground tracking-wider">{t.year}</div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl">{t.role}</h3>
                <p className="text-accent text-sm font-mono mt-1">{t.company}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* SKILLS + RECOGNITION */}
      <section className="container-editorial mt-32 grid md:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow mb-4">Toolkit</p>
          <h3 className="font-display text-3xl mb-6">Craft</h3>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "User research & discovery",
              "User journey & service mapping",
              "Workflow & system design",
              "Information architecture",
              "Wireframing & prototyping (Figma)",
              "Usability testing",
              "Design systems collaboration",
              "Enterprise & platform UX",
            ].map((s) => <li key={s} className="border-b border-border py-2">{s}</li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Recognition</p>
          <h3 className="font-display text-3xl mb-6">Awards</h3>
          <ul className="space-y-6">
            <li><p className="font-mono text-xs text-muted-foreground">2024 — 25</p><p className="mt-1">Outstanding Professional, Deloitte — for product & UX improvements on Intela.</p></li>
            <li><p className="font-mono text-xs text-muted-foreground">2021 — 24</p><p className="mt-1">Kudos award, KPMG — for the productivity tool (AT) launch.</p></li>
            <li><p className="font-mono text-xs text-muted-foreground">2016 — 21</p><p className="mt-1">Multiple Spot & Applause awards, Deloitte — for high-impact enterprise product work.</p></li>
          </ul>
        </div>
      </section>

      <section className="container-editorial mt-32">
        <div className="border-t border-border pt-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl leading-tight">
            Want the rest of the story over a 30-min call?
          </h2>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-foreground text-background text-sm hover:bg-accent transition">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}

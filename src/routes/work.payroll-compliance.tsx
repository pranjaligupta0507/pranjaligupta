import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import hero from "@/assets/case-payroll.jpg";

export const Route = createFileRoute("/work/payroll-compliance")({
  head: () => ({
    meta: [
      { title: "QuickBooks Payroll · IRS Compliance — Pranjali Gupta" },
      { name: "description", content: "How we made job title a mandatory field in QuickBooks Payroll without breaking trust — a compliance-first redesign for IRS reporting." },
      { property: "og:title", content: "QuickBooks Payroll · IRS Compliance" },
      { property: "og:description", content: "A compliance-first payroll experience that helps SMBs meet IRS requirements and unlock new revenue lines." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      meta={{
        company: "Intuit · QuickBooks Payroll",
        role: "Senior Product Designer (UX)",
        year: "2025",
        duration: "12 weeks · 0 → 1",
        platform: "Web · QuickBooks Payroll (US SMB)",
      }}
      title="Making job title a mandatory field for IRS payroll compliance."
      hook="A compliance-first payroll experience that helps small businesses meet IRS reporting requirements, avoid potential penalties, and quietly opens a new revenue line for QuickBooks — without breaking trust with existing customers."
      hero={hero}
      heroAlt="Editorial collage representing IRS payroll forms and compliance"
      context={
        <>
          <p>
            QuickBooks Payroll serves hundreds of thousands of US small businesses. In 2024 the IRS expanded the data points required on quarterly and annual filings — including a clean, classified <span className="text-foreground">job title</span> for every employee. The change sounds tiny. The downstream impact wasn't.
          </p>
          <p>
            Our customers had been entering employees with free-text titles for years. "Boss." "Helper." "Mike's role." Engineering wanted a hard validation. Compliance wanted retroactive coverage. Customer-success wanted nobody to call in. My job was to find a path that made all three happy — and made the SMB owner feel respected, not policed.
          </p>
        </>
      }
      problem={[
        { stat: "~38%", label: "of existing employees had missing or non-compliant titles in production data." },
        { stat: "$5K+", label: "potential IRS penalty per misclassified employee per filing period." },
        { stat: "1 in 4", label: "support calls during payroll runs were already about employee setup confusion." },
      ]}
      research={
        <>
          <p>
            I shadowed eight payroll runs end-to-end with Customer Success, then ran six 1:1 interviews with SMB owners across retail, services and construction. Three insights changed the brief:
          </p>
          <ul className="list-decimal pl-6 space-y-3 marker:font-mono marker:text-muted-foreground">
            <li>Owners weren't being lazy — they didn't know which IRS category their staff actually belonged to. They needed a <span className="text-foreground">guided picker</span>, not a free text field.</li>
            <li>Forcing the field at payroll-run time would block payday. That was a non-starter; payday is sacred.</li>
            <li>Existing employees with bad titles needed to be fixed, but the owner shouldn't have to find them. The system should.</li>
          </ul>
          <p>
            Support insights, telemetry from the existing add-employee flow, and the IRS Publication 15-T classification table sat side-by-side on the wall while we synthesised.
          </p>
        </>
      }
      decisions={[
        {
          title: "Guided IRS-category picker, not a dropdown of 600 SOC codes.",
          body: "We collapsed the IRS classification taxonomy into 7 plain-language buckets (\"Sales & customer-facing\", \"Skilled trades\", \"Operations & admin\"…) with examples beneath each. The full SOC code is captured in the background for filings — the owner never has to see it. Time-to-complete dropped from a measured 47 seconds to 12.",
        },
        {
          title: "Pre-payroll nudge with a one-click resolution path.",
          body: "Instead of blocking the payroll run, the system surfaced a calm, single-screen banner two days before payday listing only the employees with missing titles, sorted by who's getting paid that cycle. Each row had an inline picker — no navigation, no modal stack. Resolution averaged 90 seconds for an entire roster.",
        },
        {
          title: "A compliance partner, not a compliance cop.",
          body: "Every required-field message was rewritten with the same voice principle: state what the IRS needs, why it protects the business, and offer a smart default. We A/B tested the copy against the legal-default version. Empathetic copy converted 31% better and reduced \"this feels like a trap\" sentiment in support tickets to near-zero.",
        },
      ]}
      outcomes={[
        { stat: "94%", label: "of existing non-compliant employees fixed within the first 30 days post-launch — without a single support escalation tied to the new flow." },
        { stat: "+$X M", label: "in newly-protected payroll-add-on revenue across the SMB segment that depends on clean IRS filings (exact figure under NDA)." },
        { stat: "0", label: "increase in payday-related support tickets — the most important metric we promised CS we'd hold." },
      ]}
      reflection={
        <>
          <p>
            The temptation in compliance work is to design <em>for</em> the rule. The harder, better job is to design <em>around</em> the rule so the human on the other side never feels the friction of it. The metric I'm proudest of isn't the 94% — it's the zero.
          </p>
          <p>
            What I'd carry forward: the cheapest research I did on this project was sitting in a CS war-room for two days. I'd do that on day one of every fintech project I touch from now on.
          </p>
        </>
      }
      next={{ slug: "/work/supply-demand", title: "Turning idle hours into productive output through supply–demand alignment." }}
    />
  ),
});

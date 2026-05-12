import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import hero from "@/assets/case-payroll.jpg";

export const Route = createFileRoute("/work/payroll-compliance")({
  head: () => ({
    meta: [
      { title: "QuickBooks Payroll · IRS Compliance — Pranjali Gupta" },
      { name: "description", content: "How a small required field — job title — became a compliance-first redesign for IRS payroll reporting inside QuickBooks." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      editKey="payroll"
      meta={{
        company: "Intuit · QuickBooks Payroll",
        role: "Product Designer (UX) — Lead",
        year: "2025",
        duration: "12 weeks · 0 → 1",
        platform: "Web · QuickBooks Payroll (US SMB)",
        team: "1 PM · 1 Design · 4 Eng · Compliance · Legal",
      }}
      figmaUrl={undefined}
      title="A small required field with very large consequences."
      hook="QuickBooks Payroll powers payday for hundreds of thousands of US small businesses. When the IRS expanded the data required on quarterly filings, one extra field — Job Title — became the difference between clean compliance and five-figure penalties. This is the story of designing that field so an SMB owner felt guided, not policed."
      hero={hero}
      heroAlt="Editorial collage representing IRS payroll forms and compliance"
      context={
        <>
          <p>
            QuickBooks Payroll sits at the intersection of fintech and HR for the long tail of US
            small businesses — restaurants, contractors, dental practices, two-person agencies. The
            owner is rarely a payroll specialist; payroll is the one task they want to think about
            the least and trust the most.
          </p>
          <p>
            In 2024 the IRS expanded the data points required on quarterly and annual filings —
            including a clean, classified <span className="text-foreground">job title</span> for
            every employee. The change sounded tiny on paper. The downstream impact wasn't:
            engineering wanted a hard validation, compliance wanted retroactive coverage, customer
            success wanted nobody to call in, and the SMB owner just wanted to run payroll on
            Friday.
          </p>
        </>
      }
      problem={[
        { stat: "~38%", label: "of existing employees in production data had missing or non-compliant titles." },
        { stat: "$5K+", label: "potential IRS penalty per misclassified employee per filing period." },
        { stat: "1 in 4", label: "support calls during payroll runs were already about employee setup." },
      ]}
      research={
        <>
          <p>
            I shadowed eight payroll runs end-to-end with Customer Success, then ran six 1:1
            interviews with SMB owners across retail, services and construction. Three insights
            reshaped the brief:
          </p>
          <ul className="list-decimal pl-6 space-y-3 marker:font-mono marker:text-muted-foreground">
            <li>Owners weren't being lazy — they didn't know which IRS category their staff
              belonged to. They needed a <span className="text-foreground">guided picker</span> with
              plain-language examples, not a free-text field or a 600-row dropdown.</li>
            <li>Forcing the field at payroll-run time would block payday. Non-starter — payday is
              sacred and fragile.</li>
            <li>Existing employees with bad titles needed to be fixed, but the system should find
              them, not the owner.</li>
          </ul>
          <p className="border-l-2 border-amber pl-5 italic text-foreground">
            "I just want to pay my people. If you ask me one more question on Friday I will switch
            tools." — Owner, 12-person construction firm
          </p>
        </>
      }
      decisions={[
        {
          title: "A guided IRS-category picker, not a 600-row SOC dropdown.",
          body: "We collapsed the IRS classification taxonomy into 7 plain-language buckets — \"Sales & customer-facing\", \"Skilled trades\", \"Operations & admin\" — each with examples beneath. The full SOC code is captured silently for filings; the owner never sees it. Time-to-complete dropped from a measured 47 seconds to 12.",
        },
        {
          title: "A pre-payroll nudge, not a hard block.",
          body: "Two days before payday a calm single-screen banner surfaced only the employees with missing titles, sorted by who's getting paid that cycle. Each row had an inline picker — no navigation, no modal stack. Resolution averaged 90 seconds for an entire roster.",
        },
        {
          title: "A compliance partner, not a compliance cop.",
          body: "Every required-field message was rewritten with the same voice principle: state what the IRS needs, why it protects the business, and offer a smart default. Empathetic copy A/B-tested 31% better than the legal-default version, and reduced \"this feels like a trap\" sentiment in support tickets to near-zero.",
        },
      ]}
      tradeoffs={[
        {
          title: "We didn't auto-classify titles.",
          body: "We had a model that could guess the SOC code from a free-text title at 78% accuracy. Shipping it would have removed an owner step entirely — but a wrong auto-classification creates a silent compliance failure the owner can't see. We chose explicit confirmation over silent magic. Senior trade-off: the right UX is sometimes the slower one.",
        },
        {
          title: "We deferred bulk-edit for v1.",
          body: "Resource managers asked for a CSV import to fix entire rosters at once. It was the right v2 feature, wrong v1: it broke the calm one-row-at-a-time mental model we'd worked hard to earn. We documented the cut, told CS, and shipped it 6 weeks later when the data showed exactly which segments needed it.",
        },
      ]}
      outcomes={[
        { stat: "94%", label: "of non-compliant employees fixed within 30 days post-launch — without a single support escalation tied to the new flow." },
        { stat: "+$XM", label: "in newly protected payroll-add-on revenue across the SMB segment that depends on clean IRS filings (figure under NDA)." },
        { stat: "0", label: "increase in payday-related support tickets — the metric I promised CS we'd hold." },
      ]}
      reflection={
        <>
          <p>
            The temptation in compliance work is to design <em>for</em> the rule. The harder, better
            job is to design <em>around</em> the rule so the human on the other side never feels the
            friction of it. The metric I'm proudest of isn't the 94%. It's the zero.
          </p>
          <p>
            What I'd carry forward: the cheapest research I did on this project was sitting in the
            CS war-room for two days. I'd do that on day one of every fintech project from now on.
          </p>
        </>
      }
      next={{ slug: "/work/supply-demand", title: "Turning idle hours into productive output through supply–demand alignment." }}
    />
  ),
});

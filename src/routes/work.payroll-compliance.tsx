import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import hero from "@/assets/case-payroll-cover.png";
import sketch1 from "@/assets/payroll-sketch-1.svg";
import sketch2 from "@/assets/payroll-sketch-2.svg";
import sketch3 from "@/assets/payroll-sketch-3.svg";

export const Route = createFileRoute("/work/payroll-compliance")({
  head: () => ({
    meta: [
      { title: "QuickBooks Payroll · IRS Compliance — Pranjali Gupta" },
      { name: "description", content: "Turning a single new IRS-required field into a compliance-first payroll experience inside QuickBooks — without slowing down payday." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      editKey="payroll"
      meta={{
        company: "Intuit · QuickBooks Payroll",
        role: "Senior Product Designer (UX) — End-to-end owner",
        year: "2025",
        duration: "12 weeks · 0 → 1",
        platform: "Web · QuickBooks Payroll (US SMB & mid-market)",
        team: "1 PM · 1 Design · 4 Eng · Compliance · Legal",
      }}
      figmaUrl={undefined}
      sketches={[
        { src: sketch1, alt: "Payroll employee setup sketch", caption: "Mapping where the new IRS requirement enters the employee setup journey." },
        { src: sketch2, alt: "Guided job title picker wireframe", caption: "Guided picker — plain-language categories that quietly map to the IRS taxonomy." },
        { src: sketch3, alt: "Payroll nudge annotation", caption: "Pre-payroll nudge — resolving missing titles before payday pressure hits." },
      ]}
      interviews={[
        { quote: "I just want to pay my people. If you ask me one more question on Friday, I'll switch tools.", who: "Owner, 12-person construction firm" },
        { quote: "I'd happily fill the field — I just don't know which option I am. Give me examples and I'll pick.", who: "Owner, 5-person dental practice" },
      ]}
      title="Intuit — Making Job Title a Mandatory Field for IRS Payroll Compliance (Compliance + Revenue centric)"
      hook="When the IRS expanded the data required on quarterly payroll filings, a single new field — Job Title — sat between thousands of QuickBooks Payroll customers and clean compliance. This is how we made that field feel like guidance, not a gate."
      hero={hero}
      heroAlt="Editorial collage representing IRS payroll forms and compliance"
      context={
        <>
          <p>
            QuickBooks Payroll runs payday for hundreds of thousands of US small and
            mid-market businesses — restaurants, contractors, dental practices, growing
            agencies. For most owners, payroll is the task they want to think about the
            least and trust the most. They're not payroll specialists; they're operators
            trying to pay people correctly and move on.
          </p>
          <p>
            In 2024 the IRS expanded the data points required on quarterly and annual
            filings, including a classified <span className="text-foreground">job title</span>
            {" "}for every employee. On paper it was one field. In practice it touched
            employee setup, payroll runs, year-end reporting and the entire customer
            base of existing employees with incomplete records.
          </p>
          <p>
            I owned the experience end-to-end across SMB and mid-market SKUs, working
            with Product, Engineering, Compliance and Legal — and against a hard
            regulatory deadline.
          </p>
        </>
      }
      problem={[
        { stat: "New field", label: "IRS-mandated job title classification added to quarterly and annual payroll filings." },
        { stat: "Legacy gap", label: "A large share of existing employee records carried missing or non-compliant titles that had to be backfilled without disrupting payroll." },
        { stat: "Payday risk", label: "Employee setup was already a top driver of support contacts during live payroll runs — any new friction would land on payday." },
      ]}
      research={
        <>
          <p>
            I partnered with Customer Success to shadow live payroll runs end-to-end,
            then ran 1:1 interviews with SMB owners across retail, services and
            construction. Three patterns reshaped the brief:
          </p>
          <ul className="list-decimal pl-6 space-y-3 marker:font-mono marker:text-muted-foreground">
            <li>
              Owners weren't avoiding the field — they didn't know which IRS category
              their staff belonged to. They needed a{" "}
              <span className="text-foreground">guided picker</span> with plain-language
              examples, not a free-text input or a dense taxonomy dropdown.
            </li>
            <li>
              Asking for the field <em>during</em> a payroll run would block payday.
              Non-negotiable: payday had to stay protected.
            </li>
            <li>
              Existing employees with incomplete titles needed to be remediated, but the
              system should surface them — the owner shouldn't have to hunt.
            </li>
          </ul>
          <p className="border-l-2 border-amber pl-5 italic text-foreground">
            "I just want to pay my people. If you ask me one more question on Friday,
            I'll switch tools." — Owner, 12-person construction firm
          </p>
          <p>
            That quote became the design constraint. The IRS rule was fixed. The
            moment, the language and the effort we asked of owners were ours to design.
          </p>
        </>
      }
      decisions={[
        {
          title: "A guided IRS-category picker, not a long classification dropdown.",
          body: "We collapsed the underlying IRS taxonomy into a small set of plain-language buckets — \"Sales & customer-facing\", \"Skilled trades\", \"Operations & admin\" — each with real-world examples. The system silently captures the full classification code needed for filings; the owner only ever sees language they recognise. The picker meets compliance, but speaks like a person.",
        },
        {
          title: "A pre-payroll nudge, not a hard block on payday.",
          body: "Instead of interrupting the payroll run, a calm banner surfaces in the days before payday with only the employees whose titles are missing — sorted by who is being paid that cycle. Each row resolves inline, no modal stacks, no navigation. Compliance work moves out of the critical path of paying people.",
        },
        {
          title: "A compliance partner, not a compliance cop.",
          body: "Every required-field message was rewritten to the same voice principle: name what the IRS needs, explain how it protects the business, and offer a sensible default. Empathetic copy tested meaningfully better than the legal-default version and shifted sentiment in support tickets away from \"this feels like a trap\" toward \"got it, done\".",
        },
        {
          title: "AI in the loop — never on autopilot.",
          body: "A model suggests the most likely IRS category from the employee's existing free-text title, but the owner always confirms. Silent auto-classification would create silent compliance failures the owner can't see. The owner stays accountable; the AI just removes the cold-start problem.",
        },
      ]}
      tradeoffs={[
        {
          title: "We didn't auto-classify without confirmation.",
          body: "We could have shipped a model that guessed the IRS code from a free-text title and skipped the owner step entirely. But a wrong silent classification creates a downstream filing failure the owner won't notice until the penalty letter arrives. Explicit confirmation was slower for one screen, and safer for the year. Senior trade-off: choose the slower UX when the consequence of being wrong is invisible to the user.",
        },
        {
          title: "We deferred bulk CSV remediation for v1.",
          body: "Resource-heavy customers asked for a CSV import to fix entire rosters at once. It was the right v2, wrong v1 — it broke the calm, one-row-at-a-time mental model we'd worked hard to earn. We documented the cut, briefed CS, and shipped bulk-edit later, once data showed exactly which segments actually needed it.",
        },
      ]}
      outcomes={[
        { stat: "Compliance-ready", label: "Quarterly and annual IRS filings carry the new required classification without changing the payday flow customers already trust." },
        { stat: "Backfill at scale", label: "Existing employees with incomplete titles are surfaced and remediated outside the payroll run, protecting on-time payday." },
        { stat: "Revenue unlocked", label: "Cleaner employee data opens the door to additional payroll-add-on workflows and stronger upsell motions for the SMB segment." },
      ]}
      reflection={
        <>
          <p>
            The temptation in compliance work is to design <em>for</em> the rule. The
            harder, more senior job is to design <em>around</em> it — so the human on
            the other side never feels the friction of it. The win wasn't a clever
            picker. It was deciding the payroll run was sacred and moving the
            compliance work somewhere else.
          </p>
          <p>
            What I'd carry forward: the cheapest, highest-leverage research I did on
            this project was sitting in the CS war-room for two days. I'd do that on day
            one of every fintech project from now on. And I'd keep treating AI as a way
            to remove the cold start — not as a substitute for the human signature on a
            regulated decision.
          </p>
        </>
      }
      next={{ slug: "/work/supply-demand", title: "Turning idle hours into productive output through supply–demand alignment." }}
    />
  ),
});

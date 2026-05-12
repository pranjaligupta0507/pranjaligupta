import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import hero from "@/assets/case-supply.jpg";

export const Route = createFileRoute("/work/supply-demand")({
  head: () => ({
    meta: [
      { title: "Supply–Demand Alignment · KPMG AT — Pranjali Gupta" },
      { name: "description", content: "How we converted idle hours into productive output and revenue across KPMG's productivity tool — a 75% workforce productivity lift." },
      { property: "og:title", content: "Supply–Demand Alignment · KPMG AT" },
      { property: "og:description", content: "A unified workspace aligning preparers, reviewers and resource managers — protecting billable hours at scale." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      meta={{
        company: "KPMG · Productivity Tool (AT)",
        role: "Lead Product Designer",
        year: "2022 — 2024",
        duration: "18 months · End-to-end ownership",
        platform: "Internal web platform · Global",
      }}
      title="Turning idle hours into productive output through supply–demand alignment."
      hook="A unified workspace that lets preparers, reviewers and resource managers see the same picture of work and availability — converting idle hours into billable output, and lifting workforce productivity by 75%."
      hero={hero}
      heroAlt="Editorial composition representing supply and demand alignment"
      context={
        <>
          <p>
            Inside a global professional-services firm, every hour an associate doesn't spend on client work is a measurable loss. The teams I worked with had three roles — <span className="text-foreground">preparers</span> doing the work, <span className="text-foreground">reviewers</span> approving it, and <span className="text-foreground">resource managers</span> deciding who does what. Each role used a different tool, on a different cadence, with a different idea of "capacity".
          </p>
          <p>
            The result was the most expensive kind of waste: skilled people sitting idle while urgent work piled up two desks away. Leadership asked for "a better dashboard." The real ask was a redesign of how three roles shared one truth.
          </p>
        </>
      }
      problem={[
        { stat: "~30%", label: "of preparer hours measured as idle in a typical fortnight." },
        { stat: "3", label: "disconnected systems — request intake, capacity sheet, and review queue — none of them synced." },
        { stat: "5+ days", label: "average time from a client request landing to a preparer being staffed against it." },
      ]}
      research={
        <>
          <p>
            I ran 14 contextual interviews across the three roles in two geographies, plus a week of observational shadowing with a single team. Three patterns came back:
          </p>
          <ul className="list-decimal pl-6 space-y-3 marker:font-mono marker:text-muted-foreground">
            <li>Resource managers were optimising for <em>fairness</em>; preparers wanted <em>variety</em>; reviewers wanted <em>predictability</em>. Nobody was wrong, and nobody had a tool that admitted the trade-off existed.</li>
            <li>Spreadsheets were beating the official tool because they were the only place the three roles actually met.</li>
            <li>The most useful signal — "who has bandwidth in the next 48 hours" — was the data nobody had centralised. Everything else was reporting.</li>
          </ul>
          <p>
            We re-scoped the project from "a better dashboard" to "a shared operating picture" — and got executive air-cover by reframing the metric as protected billable hours.
          </p>
        </>
      }
      decisions={[
        {
          title: "One canvas, three lenses.",
          body: "Instead of building three role-specific tools, we designed a single canvas with role-aware lenses. A resource manager sees capacity by team; a preparer sees their next four work items; a reviewer sees the queue ageing toward their SLA. Same data, three honest views — no role had to translate someone else's tool.",
        },
        {
          title: "Make availability a first-class object.",
          body: "We promoted preparer availability from a hidden HR field to a live, editable signal owned by the preparer themselves. A small daily nudge asked, \"How are the next 48 hours looking?\" — and that one input quietly powered every staffing decision downstream. Adoption of the nudge crossed 80% in week three.",
        },
        {
          title: "Design the request as a conversation, not a form.",
          body: "Intake was redesigned around a conversational pattern that captured scope, deadline and skill in three steps — and visibly committed to a 4-hour staffing SLA. The form-fatigue resistance disappeared once requesters could see the system actually responding.",
        },
      ]}
      outcomes={[
        { stat: "75%", label: "lift in workforce productivity, measured against the pre-launch baseline of billable utilisation." },
        { stat: "<24 hr", label: "average request-to-staffing time, down from 5+ days." },
        { stat: "Kudos", label: "internal award for product & UX impact, with adoption sustained 18+ months post-launch." },
      ]}
      reflection={
        <>
          <p>
            The lesson I carry from this one: when stakeholders ask for "a dashboard", they almost always mean "an alignment". Dashboards report what already happened; alignment tools change what happens next. Designing for the second is how UX moves a P&L number.
          </p>
          <p>
            I'd also defend, all over again, the decision not to build three tools. Role-specific UI is comforting to engineering and toxic to coordination.
          </p>
        </>
      }
      next={{ slug: "/work/payroll-compliance", title: "Making job title a mandatory field for IRS payroll compliance." }}
    />
  ),
});

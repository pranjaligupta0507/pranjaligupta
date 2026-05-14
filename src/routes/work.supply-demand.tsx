import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import hero from "@/assets/case-supply.jpg";
import sketch1 from "@/assets/supply-sketch-1.svg";
import sketch2 from "@/assets/supply-sketch-2.svg";
import sketch3 from "@/assets/supply-sketch-3.svg";

export const Route = createFileRoute("/work/supply-demand")({
  head: () => ({
    meta: [
      { title: "Supply–Demand Alignment · KPMG — Pranjali Gupta" },
      { name: "description", content: "Aligning preparers, reviewers and resource managers around one shared picture of work — and lifting workforce productivity by 75%." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      editKey="supply"
      meta={{
        company: "KPMG · Productivity Tool (AT)",
        role: "Senior Product Designer (UX) — End-to-end owner",
        year: "2022 — 2024",
        duration: "18 months · End-to-end ownership",
        platform: "Internal web platform · Global",
        team: "2 PMs · 2 Design · 8 Eng · Ops leadership",
      }}
      figmaUrl={undefined}
      sketches={[
        { src: sketch1, alt: "Supply-demand workflow map", caption: "Workflow map — preparers, reviewers and managers moving from separate tools to one picture." },
        { src: sketch2, alt: "Role-aware dashboard wireframe", caption: "Role-aware lens — same data, different decisions for each user group." },
        { src: sketch3, alt: "Request flow annotation", caption: "Request flow — making availability and staffing SLA visible before work goes idle." },
      ]}
      interviews={[
        { quote: "I keep my real plan in a spreadsheet. The tool is just where I report it after.", who: "Resource Manager, 8 years tenure" },
        { quote: "By the time I see a request in the queue, two preparers have already gone idle. I'm always one Monday behind.", who: "Reviewer, audit team lead" },
      ]}
      title="Three roles, one shared picture of the work."
      hook="Inside a global professional-services firm, every idle hour is a measurable loss. Preparers, reviewers and resource managers were each working from a different system with a different idea of 'capacity'. We replaced three tools with one shared workspace — and lifted workforce productivity by 75%."
      hero={hero}
      heroAlt="Editorial composition representing supply and demand alignment"
      context={
        <>
          <p>
            Inside a global professional-services firm, every hour an associate doesn't spend on
            client work is a measurable loss. The teams I worked with had three roles —{" "}
            <span className="text-foreground">preparers</span> doing the work,{" "}
            <span className="text-foreground">reviewers</span> approving it, and{" "}
            <span className="text-foreground">resource managers</span> deciding who does what. Each
            role used a different tool, on a different cadence, with a different definition of
            "available".
          </p>
          <p>
            The result was the most expensive kind of waste: skilled people sitting idle while
            urgent work piled up two desks away. Leadership asked for "a better dashboard." The real
            ask was a redesign of how three roles shared one truth.
          </p>
        </>
      }
      problem={[
        { stat: "~30%", label: "of preparer hours measured as idle in a typical fortnight." },
        { stat: "3", label: "disconnected systems — request intake, capacity sheet, review queue — none in sync." },
        { stat: "5+ days", label: "average time from a client request landing to a preparer being staffed." },
      ]}
      research={
        <>
          <p>
            I ran 14 contextual interviews across the three roles in two geographies, plus a week of
            observational shadowing with a single team. Three patterns came back loud:
          </p>
          <ul className="list-decimal pl-6 space-y-3 marker:font-mono marker:text-muted-foreground">
            <li>Resource managers were optimising for <em>fairness</em>; preparers wanted{" "}
              <em>variety</em>; reviewers wanted <em>predictability</em>. Nobody was wrong, and
              nobody had a tool that admitted the trade-off existed.</li>
            <li>Spreadsheets were beating the official tool because they were the only place the
              three roles actually met.</li>
            <li>The most useful signal — "who has bandwidth in the next 48 hours" — was the
              data nobody had centralised. Everything else was reporting after the fact.</li>
          </ul>
          <p>
            We re-scoped the project from "a better dashboard" to "a shared operating picture" — and
            got executive air-cover by reframing the success metric as <span className="text-foreground">protected billable hours</span>.
          </p>
          <p className="border-l-2 border-amber pl-5 italic text-foreground">
            "I keep my real plan in a spreadsheet. The tool is just where I report it after." —
            Resource Manager, 8 years tenure
          </p>
        </>
      }
      decisions={[
        {
          title: "One canvas, three role-aware lenses.",
          body: "Instead of building three role-specific tools, we designed a single canvas. A resource manager sees capacity by team; a preparer sees their next four work items; a reviewer sees the queue ageing toward their SLA. Same data, three honest views — no role had to translate someone else's tool to do their job.",
        },
        {
          title: "Make availability a first-class object.",
          body: "We promoted preparer availability from a hidden HR field to a live, editable signal owned by the preparer themselves. A small daily nudge asked, \"How are the next 48 hours looking?\" — and that one input quietly powered every staffing decision downstream. Adoption of the nudge crossed 80% in week three.",
        },
        {
          title: "Design the request as a conversation, not a form.",
          body: "Intake was redesigned around a three-step conversational pattern that captured scope, deadline and skill — and visibly committed to a 4-hour staffing SLA. The form-fatigue resistance disappeared once requesters could see the system actually responding to them.",
        },
      ]}
      tradeoffs={[
        {
          title: "We didn't automate the staffing decision.",
          body: "We had the data to suggest a preparer for every request. We chose to surface a ranked shortlist instead and let the resource manager pick. Staffing involves human judgement — fairness, growth opportunities, recent overload — that the model couldn't see. Recommend, don't decide. That trust earned us adoption.",
        },
        {
          title: "We sunset the legacy capacity sheet — gradually.",
          body: "Killing the spreadsheet on day one would have killed adoption. We mirrored its core view inside the new tool for a quarter, then quietly removed it once the new flow had a higher daily-active rate. The spreadsheet was the most-loved tool we replaced; we replaced it by being more useful, not by being mandated.",
        },
      ]}
      outcomes={[
        { stat: "+75%", label: "lift in workforce productivity, measured against pre-launch baseline of billable utilisation." },
        { stat: "<24 hr", label: "average request-to-staffing time, down from 5+ days." },
        { stat: "Kudos", label: "internal award for product & UX impact, with adoption sustained 18+ months post-launch." },
      ]}
      reflection={
        <>
          <p>
            The lesson I carry from this one: when stakeholders ask for "a dashboard", they almost
            always mean "an alignment". Dashboards report what already happened; alignment tools
            change what happens next. Designing for the second is how UX moves a P&amp;L number.
          </p>
          <p>
            I'd defend, all over again, the decision <em>not</em> to build three tools. Role-specific
            UI is comforting to engineering and quietly toxic to coordination.
          </p>
        </>
      }
      next={{ slug: "/work/payroll-compliance", title: "Making job title a mandatory field for IRS payroll compliance." }}
    />
  ),
});

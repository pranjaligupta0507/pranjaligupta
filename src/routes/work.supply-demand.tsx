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
      { name: "description", content: "Aligning preparers, reviewers and resource managers around one shared picture of work — lifting workforce productivity by 75% at a global professional-services firm." },
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
        { src: sketch1, alt: "Supply-demand workflow map", caption: "Three roles, three tools, three definitions of 'available' — mapped before anything was redrawn." },
        { src: sketch2, alt: "Role-aware dashboard wireframe", caption: "One canvas, role-aware lenses — same underlying data, different decisions for each user group." },
        { src: sketch3, alt: "Request flow annotation", caption: "Intake redesigned as a conversation, with a visible 4-hour staffing SLA." },
      ]}
      interviews={[
        { quote: "I keep my real plan in a spreadsheet. The tool is just where I report it after.", who: "Resource Manager, 8 years tenure" },
        { quote: "By the time I see a request in the queue, two preparers have already gone idle. I'm always one Monday behind.", who: "Reviewer, audit team lead" },
      ]}
      title="Converting idle hours into productive output through supply–demand alignment."
      hook="Inside a global professional-services firm, every idle hour is a measurable loss. Preparers, reviewers and resource managers each worked from a different system with a different idea of 'capacity'. We replaced three disconnected tools with one shared operating picture — and lifted workforce productivity by 75%."
      hero={hero}
      heroAlt="Editorial composition representing supply and demand alignment"
      context={
        <>
          <p>
            Inside a global professional-services firm, every hour an associate doesn't
            spend on client work is a measurable loss. The teams I worked with had
            three roles — <span className="text-foreground">preparers</span> doing the
            work, <span className="text-foreground">reviewers</span> approving it, and{" "}
            <span className="text-foreground">resource managers</span> deciding who does
            what. Each role used a different tool, on a different cadence, with a
            different definition of "available".
          </p>
          <p>
            The result was the most expensive kind of waste: skilled people sitting
            idle while urgent work piled up two desks away. Leadership asked for "a
            better dashboard." The real ask was a redesign of how three roles shared one
            truth.
          </p>
          <p>
            I owned the experience end-to-end for 18 months — from problem framing
            through global rollout — partnering with two PMs, an engineering team of
            eight, and Ops leadership.
          </p>
        </>
      }
      problem={[
        { stat: "Idle capacity", label: "A meaningful share of preparer hours sat idle each fortnight while urgent client work waited for staffing." },
        { stat: "3 systems", label: "Request intake, capacity planning and review queues lived in disconnected tools — none in sync, none agreeing on 'available'." },
        { stat: "Days to staff", label: "Time from a client request landing to a preparer being staffed was measured in days, not hours." },
      ]}
      research={
        <>
          <p>
            I ran contextual interviews across the three roles in two geographies, plus
            a week of observational shadowing with a single team. Three patterns came
            back loud and consistent:
          </p>
          <ul className="list-decimal pl-6 space-y-3 marker:font-mono marker:text-muted-foreground">
            <li>
              Resource managers optimised for <em>fairness</em>, preparers wanted{" "}
              <em>variety</em>, reviewers wanted <em>predictability</em>. Nobody was
              wrong — and no existing tool admitted the trade-off even existed.
            </li>
            <li>
              Spreadsheets were quietly beating the official tool because they were the
              only surface where the three roles actually met. The shadow system was
              the real system.
            </li>
            <li>
              The most useful signal — "who has bandwidth in the next 48 hours" — was
              the one piece of data nobody owned. Everything else was reporting after
              the fact.
            </li>
          </ul>
          <p>
            We re-scoped the project from "a better dashboard" to "a shared operating
            picture" and earned executive air-cover by reframing the success metric
            as <span className="text-foreground">protected billable hours</span> — a
            number leadership already cared about.
          </p>
          <p className="border-l-2 border-amber pl-5 italic text-foreground">
            "I keep my real plan in a spreadsheet. The tool is just where I report it
            after." — Resource Manager, 8 years tenure
          </p>
        </>
      }
      decisions={[
        {
          title: "One canvas, three role-aware lenses.",
          body: "Instead of building three role-specific tools, we designed a single canvas with three honest views. A resource manager sees capacity by team; a preparer sees their next four work items; a reviewer sees the queue ageing toward their SLA. Same underlying data, no translation tax — no role had to reinterpret someone else's tool to do their own job.",
        },
        {
          title: "Make availability a first-class object.",
          body: "We promoted preparer availability from a hidden HR field to a live, editable signal owned by the preparer themselves. A small daily nudge asked, \"How are the next 48 hours looking?\" That one input quietly powered every staffing decision downstream, and adoption of the nudge crossed 80% within the first weeks.",
        },
        {
          title: "Design intake as a conversation, with a visible SLA.",
          body: "Request intake was redesigned around a three-step conversational pattern that captured scope, deadline and skill — and visibly committed to a 4-hour staffing SLA. Form-fatigue resistance disappeared once requesters could see the system responding to them, not just collecting from them.",
        },
        {
          title: "AI recommends, humans decide.",
          body: "We surfaced a ranked shortlist of preparers for every request rather than auto-assigning. Staffing involves judgement the model couldn't see — fairness, growth opportunities, recent overload, client fit. The recommendation removed the cold start; the manager kept the call. That boundary is what earned us trust at the leadership table.",
        },
      ]}
      tradeoffs={[
        {
          title: "We didn't automate the staffing decision.",
          body: "We had the data to suggest an assignee for every request and could have shipped auto-staffing. We chose ranked shortlists with a one-click confirm instead. In a high-trust, high-stakes context, automating the wrong decision once costs more than every minute the automation saves. The trust we earned by recommending — not deciding — is what unlocked adoption.",
        },
        {
          title: "We sunset the legacy capacity sheet gradually.",
          body: "Killing the spreadsheet on day one would have killed adoption. We mirrored its core view inside the new tool for a quarter, then quietly retired it once the new flow had a higher daily-active rate. The spreadsheet was the most-loved tool we replaced; we replaced it by being more useful, not by being mandated.",
        },
      ]}
      outcomes={[
        { stat: "+75%", label: "Lift in workforce productivity, measured against the pre-launch baseline of billable utilisation." },
        { stat: "Hours, not days", label: "Average request-to-staffing time collapsed from multiple days to within hours of the request landing." },
        { stat: "Sustained adoption", label: "Internal recognition for product & UX impact, with adoption holding 18+ months after rollout — the spreadsheet never came back." },
      ]}
      reflection={
        <>
          <p>
            The lesson I carry from this one: when stakeholders ask for "a dashboard",
            they almost always mean "an alignment". Dashboards report what already
            happened; alignment tools change what happens next. Designing for the
            second is how UX moves a P&amp;L number, not just a usability score.
          </p>
          <p>
            I'd defend, all over again, the decision <em>not</em> to build three
            role-specific tools. Role-specific UI is comforting to engineering and
            quietly toxic to coordination. And I'd keep the same posture on AI: use it
            to remove cold starts and surface signal, never to silently make decisions
            people are accountable for.
          </p>
        </>
      }
      next={{ slug: "/work/payroll-compliance", title: "Making job title a mandatory field for IRS payroll compliance." }}
    />
  ),
});

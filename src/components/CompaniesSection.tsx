import { Editable } from "@/components/Editable";

const companies = [
  { c: "Intuit", n: "QuickBooks Online & QuickBooks Desktop — payroll fintech for US small and mid-market businesses." },
  { c: "Deloitte", n: "Intela, K-1G, iPACS and other enterprise platforms — onboarding, reporting and workflow design at scale." },
  { c: "KPMG", n: "Productivity tool and other platforms for global teams — workforce alignment and day-to-day execution." },
];

export function CompaniesSection({ idPrefix }: { idPrefix: string }) {
  return (
    <section className="container-editorial mt-24">
      <Editable id={`${idPrefix}.companies.eyebrow`} as="p" className="eyebrow mb-3" multiline={false}>
        Where I've spent my time
      </Editable>
      <Editable id={`${idPrefix}.companies.title`} as="h2" className="display-lg max-w-3xl mb-8">
        A short view of my experience — complex software, made simpler to use.
      </Editable>
      <div className="grid md:grid-cols-3 gap-6">
        {companies.map((x, i) => (
          <div key={x.c} className="glass rounded-2xl p-6">
            <Editable id={`${idPrefix}.companies.${i}.c`} as="h3" className="font-display text-2xl text-amber mb-2">
              {x.c}
            </Editable>
            <Editable id={`${idPrefix}.companies.${i}.n`} as="p" className="text-sm text-muted-foreground leading-relaxed">
              {x.n}
            </Editable>
          </div>
        ))}
      </div>
    </section>
  );
}

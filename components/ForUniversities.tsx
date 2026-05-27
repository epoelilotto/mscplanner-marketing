const points = [
  {
    title: "Multi-tenant from day one",
    body: "Each university gets its own catalogue, rules, branding, and subdomain. Already running TU Delft Aerospace; POLIMI and TUM next.",
  },
  {
    title: "Zero onboarding cost for students",
    body: "No account required to plan. Students land, build, validate, share — all without IT involvement on your side.",
  },
  {
    title: "Programme analytics for coordinators",
    body: "See aggregate elective demand, common invalid configurations, and where students get stuck — anonymised, opt-in.",
  },
  {
    title: "We handle the rules",
    body: "Send us your programme guide; we encode the validation logic and keep it up to date each academic year.",
  },
];

const CONTACT_MAILTO =
  "mailto:alessandromiccolo2003@gmail.com?subject=Bringing%20StudyPlanner%20to%20our%20university";

export function ForUniversities() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              For universities
            </h2>
            <p className="mt-4 text-slate-600">
              StudyPlanner is built to be deployed across programmes and
              institutions, not just one. If you coordinate an MSc and want
              fewer plan-validation emails next term, let&apos;s talk.
            </p>
            <a
              href={CONTACT_MAILTO}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Email us
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

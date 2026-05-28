const points = [
  {
    title: "Multi-tenant from day one",
    body: "Each university gets its own catalogue, rules, branding, and subdomain. Ready to deploy for your programme.",
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

const DEMO_MAILTO =
  "mailto:alessandromiccolo2003@gmail.com?subject=StudyPlanner%20Demo%20Request&body=University%20name%3A%0AProgramme%3A%0AYour%20role%3A";

export function ForUniversities() {
  return (
    <section className="border-b border-slate-200 bg-indigo-950">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              For universities
            </h2>
            <p className="mt-4 text-slate-200">
              StudyPlanner is built to be deployed across programmes and
              institutions, not just one. If you coordinate an MSc and want
              fewer plan-validation emails next term, let&apos;s talk.
            </p>
            <a
              href={DEMO_MAILTO}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/50 transition hover:bg-indigo-400"
            >
              Book a 20-min demo
            </a>
            <div className="mt-8 rounded-lg border border-indigo-800 bg-indigo-900/40 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                Data &amp; Privacy
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Student plans are stored locally in the browser by default. No
                data leaves the student&apos;s machine unless they choose to
                share. If shared, data is stored on EU infrastructure and never
                used for training or shared with third parties.{" "}
                <span className="font-medium text-indigo-200">
                  GDPR-compliant by design.
                </span>
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-indigo-800 bg-indigo-900/60 p-6 backdrop-blur"
              >
                <h3 className="font-semibold text-indigo-100">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const DEMO_MAILTO =
  "mailto:alessandromiccolo2003@gmail.com?subject=StudyPlanner%20Demo%20Request&body=University%20name%3A%0AProgramme%3A%0AYour%20role%3A";

export function CaseStudy() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50 px-8 py-10 sm:px-12 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Case study · TU Delft
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            From email chaos to self-service validation
          </h2>
          <p className="mt-5 max-w-2xl text-slate-600">
            MSc Aerospace Engineering students at TU Delft now validate their
            own study plans before advising appointments. StudyPlanner encoded
            180+ courses across 4 specialisation tracks — including
            prerequisite chains, EC requirements, and PPD credits — in under
            two weeks.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                metric: "180+",
                label: "courses encoded",
              },
              {
                metric: "4",
                label: "specialisation tracks",
              },
              {
                metric: "< 2 wks",
                label: "setup to live",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-indigo-200 bg-white px-6 py-5 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-indigo-600">
                  {item.metric}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://ae-planner-proxy.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              See the live planner →
            </a>
            <a
              href={DEMO_MAILTO}
              className="inline-flex items-center justify-center rounded-md border border-indigo-300 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:border-indigo-400 hover:bg-indigo-50"
            >
              Book a demo for your programme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANNER_URL = "https://ae-planner-proxy.vercel.app";
const CONTACT_MAILTO =
  "mailto:alessandromiccolo2003@gmail.com?subject=Bringing%20StudyPlanner%20to%20our%20university";

export function Hero() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          For universities and programme coordinators
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          Valid study plans, every time.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
          StudyPlanner is an AI-powered MSc study planner that validates
          student plans against your programme rules in real time — so
          coordinators stop spending hours fixing invalid plans over email.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={PLANNER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Open the StudyPlanner →
          </a>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Talk to us
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Live today at TU Delft Aerospace Engineering · Multi-tenant ·
          Branded per institution
        </p>
      </div>
    </section>
  );
}

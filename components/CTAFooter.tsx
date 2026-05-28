const PLANNER_URL = "https://ae-planner-proxy.vercel.app";
const DEMO_MAILTO =
  "mailto:alessandromiccolo2003@gmail.com?subject=StudyPlanner%20Demo%20Request&body=University%20name%3A%0AProgramme%3A%0AYour%20role%3A";

export function CTAFooter() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        {/* accent bar */}
        <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-indigo-500" />
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Bring StudyPlanner to your university.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Twenty-minute call. We&apos;ll show you the live planner, walk
          through TU Delft&apos;s setup, and scope what it would take for
          your programme.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DEMO_MAILTO}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950 transition hover:bg-indigo-500"
          >
            Book a 20-min demo
          </a>
          <a
            href={PLANNER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-indigo-500 hover:text-indigo-300"
          >
            Open the StudyPlanner →
          </a>
        </div>
      </div>
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} StudyPlanner</span>
          <span>
            Built by Alessandro Miccolo · MSc Aerospace Engineering, TU
            Delft
          </span>
        </div>
      </footer>
    </section>
  );
}

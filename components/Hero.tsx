const PLANNER_URL = "https://ae-planner-proxy.vercel.app";
const CONTACT_MAILTO =
  "mailto:alessandromiccolo2003@gmail.com?subject=Bringing%20StudyPlanner%20to%20our%20university";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-indigo-100 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950">
      {/* subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="mb-6 inline-flex items-center rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
          For universities and programme coordinators
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Valid study plans,{" "}
          <span className="text-indigo-400">every time.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          StudyPlanner is an AI-powered MSc study planner that validates
          student plans against your programme rules in real time — so
          coordinators stop spending hours fixing invalid plans over email.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={PLANNER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:bg-indigo-500"
          >
            Open the StudyPlanner →
          </a>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Talk to us
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Live demo available · Multi-tenant ·
          Branded per institution
        </p>
      </div>
    </section>
  );
}

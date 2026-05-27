const steps = [
  {
    n: "1",
    title: "Pick track + profile",
    body: "Mandatory courses pre-load automatically based on the student's specialisation.",
  },
  {
    n: "2",
    title: "AI suggests electives",
    body: "Students describe their interests; the planner recommends electives with explanations grounded in the catalogue.",
  },
  {
    n: "3",
    title: "Real-time validation",
    body: "EC totals, PPD credits, quarter workload, and prerequisite conflicts are checked as the plan is built.",
  },
  {
    n: "4",
    title: "Share with advisor",
    body: "One-click share link. Advisors review and comment without creating an account.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          How it works
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          A guided flow that takes a student from blank canvas to a valid,
          coordinator-ready plan in under fifteen minutes.
        </p>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-indigo-100 transition hover:ring-indigo-300"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow shadow-indigo-200">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

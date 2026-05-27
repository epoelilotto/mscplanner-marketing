const features = [
  {
    title: "Guided setup",
    body: "Track and profile selection pre-loads mandatory courses and exclusions.",
  },
  {
    title: "AI elective suggestions",
    body: "Grounded in the official catalogue, with reasoning the student can defend.",
  },
  {
    title: "Real-time validation",
    body: "EC totals, PPD credits, prerequisites, and quarter workload — checked as you type.",
  },
  {
    title: "Plan A / B comparison",
    body: "Side-by-side view of two variants so students decide with full context.",
  },
  {
    title: "Advisor share links",
    body: "One click. Advisors comment in-line. No accounts, no Outlook threads.",
  },
  {
    title: "Full plan review",
    body: "AI checks the finished plan against all programme rules in one pass.",
  },
  {
    title: "No account required",
    body: "Plans save locally by default. Optional sign-in for sync and sharing.",
  },
  {
    title: "Multi-university",
    body: "Same codebase, your branding, your catalogue, your rules.",
  },
];

export function Features() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          What students get
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
            >
              <div className="mb-3 h-1 w-8 rounded-full bg-indigo-500 transition group-hover:w-12" />
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLANNER_URL = "https://ae-planner-proxy.vercel.app";
const CONTACT_MAILTO =
  "mailto:alessandromiccolo2003@gmail.com?subject=Bringing%20StudyPlanner%20to%20our%20university";

export const metadata = {
  title: "Contact — StudyPlanner",
  description:
    "Get in touch to bring StudyPlanner to your university. Twenty-minute call, no commitment.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-indigo-950">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        {/* accent */}
        <div className="mb-8 h-1 w-16 rounded-full bg-indigo-500" />

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Bring StudyPlanner to your university.
        </h1>
        <p className="mt-6 text-lg text-indigo-200">
          Twenty-minute call. We&apos;ll walk through the live demo,
          show how the multi-tenant setup works, and scope what it would
          take for your programme.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "What we cover",
              items: [
                "Live demo walkthrough",
                "How we encode your programme rules",
                "Branding and subdomain setup",
                "Timeline and effort estimate",
              ],
            },
            {
              title: "What you need",
              items: [
                "Your MSc programme guide (PDF)",
                "30 minutes of your time",
                "No IT department involvement",
                "No budget commitment upfront",
              ],
            },
          ].map((block) => (
            <div
              key={block.title}
              className="rounded-xl border border-indigo-800 bg-indigo-900/60 p-6"
            >
              <h2 className="font-semibold text-indigo-100 mb-4">
                {block.title}
              </h2>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-indigo-300">
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-indigo-500/30 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950 transition hover:bg-indigo-500"
          >
            Email us to schedule a call
          </a>
          <a
            href={PLANNER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-8 py-3 text-sm font-semibold text-white transition hover:border-indigo-500 hover:text-indigo-300"
          >
            Try the planner first →
          </a>
        </div>

        <p className="mt-8 text-sm text-indigo-400">
          Or email directly:{" "}
          <a
            href={CONTACT_MAILTO}
            className="underline underline-offset-2 hover:text-indigo-200"
          >
            alessandromiccolo2003@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

import { Screenshots } from "@/components/Screenshots";

export const metadata = {
  title: "Demo — StudyPlanner",
  description:
    "See StudyPlanner in action. Real screenshots from the live planner at TU Delft Aerospace Engineering.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          See it in action
        </h1>
        <p className="mt-3 text-slate-600">
          Live today at TU Delft Aerospace Engineering — used by MSc students
          every term.
        </p>
      </div>
      <Screenshots />
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <a
          href="https://ae-planner-proxy.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500"
        >
          Try the live planner →
        </a>
      </div>
    </div>
  );
}

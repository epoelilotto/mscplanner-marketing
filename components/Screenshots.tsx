import Image from "next/image";

const screens = [
  {
    src: "/screenshots/screenshot-1.png",
    alt: "StudyPlanner onboarding — MSc Aerospace Engineering landing page",
    caption: "Branded per institution. Live demo available to try today.",
  },
  {
    src: "/screenshots/screenshot-2.png",
    alt: "Track selection — choose your specialisation",
    caption:
      "Step 1: pick track and profile. Mandatory courses load automatically.",
  },
  {
    src: "/screenshots/screenshot-3.png",
    alt: "Full study plan grid with validation and AI recommendations",
    caption:
      "The plan view: quarters, EC validation bar, prerequisite warnings, and AI recommendations — live as the student builds.",
  },
];

export function Screenshots() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          See it in action
        </h2>
        <p className="mt-4 max-w-xl text-slate-600">
          Live demo available — try it today.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {screens.map((s) => (
            <figure key={s.src}>
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={800}
                  height={560}
                  className="w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 text-sm text-slate-500">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

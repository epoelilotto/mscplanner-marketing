import Image from "next/image";

const screens = [
  {
    src: "/screenshots/screenshot-1.png",
    alt: "StudyPlanner onboarding — MSc Aerospace Engineering landing page",
    number: "01",
    title: "Branded per institution",
    caption:
      "Students land on a programme-specific page. The planner loads the right catalogue, tracks, and rules automatically — no configuration needed on the student side.",
    width: 1440,
    height: 900,
  },
  {
    src: "/screenshots/screenshot-2.png",
    alt: "Track selection — choose your specialisation",
    number: "02",
    title: "Pick track and profile",
    caption:
      "Step 1: the student picks their specialisation. Mandatory courses pre-load instantly. The profile panel on the right shows sub-tracks to narrow elective recommendations.",
    width: 1440,
    height: 900,
  },
  {
    src: "/screenshots/screenshot-3.png",
    alt: "Full study plan grid with validation and AI recommendations",
    number: "03",
    title: "Full plan — live validation + AI",
    caption:
      "The plan view: four quarters per year, real-time EC totals, prerequisite conflict flags, workload indicators, and an AI recommendation panel that analyses the student's profile against the full catalogue.",
    width: 1440,
    height: 1153,
  },
];

export function Screenshots() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <p className="mt-4 max-w-xl text-slate-600">
          A fully working demo — open it, build a plan, and see validation in
          action yourself.
        </p>
        <div className="mt-12 flex flex-col gap-20">
          {screens.map((s) => (
            <figure
              key={s.src}
              className="grid gap-8 lg:grid-cols-[1fr_3fr] lg:items-start"
            >
              {/* caption */}
              <figcaption className="lg:pt-4">
                <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
                  {s.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {s.caption}
                </p>
              </figcaption>

              {/* image */}
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  className="w-full"
                  quality={95}
                  priority
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

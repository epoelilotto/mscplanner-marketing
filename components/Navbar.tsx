import Link from "next/link";
import { NavbarClient } from "./NavbarClient";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-indigo-950/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-0 h-16">
        {/* Logo — server-rendered, no JS needed */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 text-xs font-bold text-white">
            SP
          </span>
          StudyPlanner
        </Link>

        {/* Nav links, CTA, hamburger — client for active state + mobile toggle */}
        <NavbarClient />
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PLANNER_URL = "https://ae-planner-proxy.vercel.app";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/universities", label: "For universities" },
  { href: "/demo", label: "Demo" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-indigo-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-0 h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 text-xs font-bold text-white">
            SP
          </span>
          StudyPlanner
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-indigo-800 text-white"
                    : "text-indigo-200 hover:bg-indigo-900 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PLANNER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow shadow-indigo-900/50 transition hover:bg-indigo-500"
          >
            Open the StudyPlanner →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden rounded-md p-2 text-indigo-200 hover:bg-indigo-900 hover:text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-indigo-950 px-4 pb-4 pt-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-4 py-3 text-sm font-medium text-indigo-200 hover:bg-indigo-900 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={PLANNER_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Open the StudyPlanner →
          </a>
        </div>
      )}
    </header>
  );
}

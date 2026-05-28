import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StudyPlanner — AI study planning for universities",
  description:
    "An AI-powered MSc study planner that validates student plans in real time and saves coordinators hours of email back-and-forth. Multi-tenant, branded per institution.",
  openGraph: {
    title: "StudyPlanner — AI study planning for universities",
    description:
      "Real-time validated MSc study plans. Fewer coordinator emails, valid plans every time.",
    type: "website",
    url: "https://studyplanner-marketing.vercel.app",
    images: [
      {
        url: "https://studyplanner-marketing.vercel.app/screenshots/screenshot-3.png",
        width: 1440,
        height: 1153,
        alt: "StudyPlanner — full plan view with live validation and AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyPlanner — AI study planning for universities",
    description:
      "Real-time validated MSc study plans. Fewer coordinator emails, valid plans every time.",
    images: ["https://studyplanner-marketing.vercel.app/screenshots/screenshot-3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

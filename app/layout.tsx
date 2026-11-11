import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumera Lakhan | Content Writer · Researcher · Visual Designer",
  description:
    "Portfolio of Sumera Lakhan — Final-year BS English student at Shah Abdul Latif University, Ghotki campus. Content writer, researcher, and visual designer specializing in invitations, menus, and marketing collateral.",
  keywords: [
    "Sumera Lakhan",
    "Content Writer",
    "Researcher",
    "Visual Designer",
    "Portfolio",
    "Ghotki",
    "Sindh",
    "English Literature",
    "Graphic Design"
  ],
  authors: [{ name: "Sumera Lakhan" }],
  openGraph: {
    title: "Sumera Lakhan | Content Writer · Researcher · Visual Designer",
    description:
      "Explore the writing samples, research work, visual designs, certificates, and recommendations of Sumera Lakhan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30 selection:text-rose-200 antialiased">
        {children}
      </body>
    </html>
  );
}

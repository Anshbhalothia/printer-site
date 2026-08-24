import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrintOver | Onsite Enterprise Solutions",
  description: "Certified onsite printer repair, installation, and fleet maintenance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}
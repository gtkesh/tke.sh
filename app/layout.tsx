import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "tksh.io",
  description: "Giorgi Tkeshelashvili — Software Engineer",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistMono.variable}>
      <body className="min-h-screen p-10 max-w-xl mx-auto">
        <Nav />
        <main className="mt-16">{children}</main>
        <footer className="mt-20 mb-10 text-[var(--color-fg-faint)]">
          <div className="pt-6">~~~</div>
          <div className="mt-2">
            tksh.io — {new Date().getFullYear()}
          </div>
        </footer>
      </body>
    </html>
  );
}

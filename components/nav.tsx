"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/posts", label: "POSTS" },
  { href: "/resume", label: "RESUME" },
  { href: "/books", label: "BOOKS" },
  { href: "/music", label: "MUSIC" },
  { href: "/projects", label: "PROJECTS" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header>
      <div className="flex items-center justify-between">
        <Link href="/" className="font-bold uppercase tracking-wider hover:text-[var(--color-accent)]">
          TKSH.IO
          <span
            className="inline-block w-[7px] h-[12px] bg-[var(--color-fg)] ml-0.5 align-middle"
            style={{ animation: "blink 1s infinite" }}
          />
        </Link>
        <span className="text-[var(--color-fg-faint)]">2025</span>
      </div>
      <nav className="flex flex-wrap gap-x-1 mt-4">
        {links.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors duration-150 ${
                isActive
                  ? "text-[var(--color-fg)]"
                  : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
              }`}
            >
              [{label}]
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

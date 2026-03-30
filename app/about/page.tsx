import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — tke.sh",
};

function Cmd({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 mt-8 first:mt-0">
      <span className="text-[var(--color-fg-muted)]">$</span>{" "}
      <span className="font-bold">{children}</span>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Cmd>cat about.txt</Cmd>
      <div className="space-y-3">
        <p>Hi, I&apos;m Gio.</p>
        <p>
          Currently working on something in stealth. Before that spent 4
          years at{" "}
          <a href="https://pipe.com" className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
            Pipe
          </a>{" "}
          and 4 years at{" "}
          <a href="https://plaid.com" className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
            Plaid
          </a>{" "}
          in San Francisco — the time I cherish dearly.
        </p>
        <p>
          Stuck in between 🇬🇪 and 🇺🇸.
        </p>
      </div>

      <Cmd>cat links.txt</Cmd>
      <div className="space-y-0.5">
        {[
          { label: "github", url: "https://github.com/gtkesh" },
          { label: "twitter", url: "https://twitter.com/gtkesh" },
          { label: "soundcloud", url: "https://soundcloud.com/gtkesh" },
        ].map(({ label, url }) => (
          <div key={label}>
            <span className="text-[var(--color-fg-muted)] inline-block w-20">
              {label}
            </span>
            <span className="text-[var(--color-fg-faint)]">→ </span>
            <a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              {url.replace("https://", "")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

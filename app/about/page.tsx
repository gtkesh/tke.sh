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
          Currently working on something 🥷. Previously at {""}
          <a
            href="https://pipe.com"
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pipe
          </a>{" "}
          &{" "}
          <a
            href="https://plaid.com"
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plaid.
          </a>{" "}
        </p>
        <p>Between 🇬🇪 & 🇺🇸</p>
      </div>

      <Cmd>cat links.txt</Cmd>
      <div className="space-y-0.5">
        {[
          { label: "github", url: "https://github.com/gtkesh" },
          { label: "twitter", url: "https://twitter.com/gtkesh" },
          { label: "soundcloud", url: "https://soundcloud.com/gtkesh" },
        ].map(({ label, url }) => (
          <div key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              <span className="text-[var(--color-fg-muted)] inline-block w-20">
                {label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

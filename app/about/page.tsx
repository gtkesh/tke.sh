import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — tksh.io",
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
        <p>
          Hi, I&apos;m Giorgi — a software engineer based between Georgia and the
          United States.
        </p>
        <p>
          I currently work at{" "}
          <a href="https://pipe.com" className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
            Pipe
          </a>
          , building financial infrastructure. Before that, I spent four years at{" "}
          <a href="https://plaid.com" className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
            Plaid
          </a>
          , working on core banking integrations.
        </p>
        <p>
          Outside of work, I&apos;m into music production, reading, traveling, and
          tinkering with side projects. I like building tools that feel good to
          use.
        </p>
        <p>
          This site is my corner of the internet — a place for writing,
          collecting things I find interesting, and keeping track of what I&apos;m
          up to.
        </p>
      </div>

      <Cmd>cat links.txt</Cmd>
      <div className="space-y-0.5">
        {[
          { label: "github", url: "https://github.com/giorgi" },
          { label: "twitter", url: "https://twitter.com/giorgi" },
          { label: "soundcloud", url: "https://soundcloud.com/giorgi" },
          { label: "email", url: "mailto:giorgi@tksh.io" },
        ].map(({ label, url }) => (
          <div key={label}>
            <span className="text-[var(--color-fg-muted)] inline-block w-20">
              {label}
            </span>
            <span className="text-[var(--color-fg-faint)]">→ </span>
            <a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              {url.replace("https://", "").replace("mailto:", "")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function Section({
  command,
  children,
}: {
  command: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <div className="mb-1">
        <span className="text-[var(--color-fg-muted)]">$</span>{" "}
        <span className="font-bold">{command}</span>
      </div>
      <div className="pl-0">{children}</div>
    </section>
  );
}

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div>
      <Section command="whoami">
        <div className="font-bold ">Giorgi Tkeshelashvili</div>
      </Section>

      <Section command="cat intro.txt">
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
      </Section>

      <Section command="ls recent-posts/">
        {posts.length > 0 ? (
          <div className="space-y-0.5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="block hover:text-[var(--color-accent)] transition-colors"
              >
                <span className="text-[var(--color-fg-faint)] mr-3">
                  {post.date}
                </span>
                {post.title}
              </Link>
            ))}
          </div>
        ) : (
          <span className="text-[var(--color-fg-muted)]">No posts yet.</span>
        )}
      </Section>

      <Section command="cat links.txt">
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
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                {url.replace("https://", "")}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

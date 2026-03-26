import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPost(slug);
  return {
    title: `${meta.title} — tksh.io`,
    description: meta.excerpt,
  };
}

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "code"; text: string };

function parseMarkdown(content: string): Block[] {
  return content
    .split("\n\n")
    .filter((b) => b.trim())
    .map((block): Block => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) return { type: "h2", text: trimmed.slice(3) };
      if (trimmed.startsWith("### ")) return { type: "h3", text: trimmed.slice(4) };
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").map((l) => l.replace(/^[*-]\s/, ""));
        return { type: "ul", items };
      }
      if (trimmed.startsWith("```")) {
        const lines = trimmed.split("\n");
        return { type: "code", text: lines.slice(1, -1).join("\n") };
      }
      if (trimmed.startsWith("> ")) {
        return { type: "blockquote", text: trimmed.replace(/^> /gm, "") };
      }
      return { type: "p", text: trimmed };
    });
}

function InlineText({ text }: { text: string }) {
  // Split text by inline patterns: **bold**, `code`, [link](url)
  const segments = text.split(/(\*\*.+?\*\*|`.+?`|\[.+?\]\(.+?\))/g);
  return (
    <>
      {segments.map((segment, i) => {
        if (segment.startsWith("**") && segment.endsWith("**")) {
          return <strong key={i}>{segment.slice(2, -2)}</strong>;
        }
        if (segment.startsWith("`") && segment.endsWith("`")) {
          return (
            <code key={i} className="bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs">
              {segment.slice(1, -1)}
            </code>
          );
        }
        const linkMatch = segment.match(/^\[(.+?)\]\((.+?)\)$/);
        if (linkMatch) {
          return (
            <a key={i} href={linkMatch[2]} className="underline underline-offset-2">
              {linkMatch[1]}
            </a>
          );
        }
        return <span key={i}>{segment}</span>;
      })}
    </>
  );
}

function MarkdownBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-bold uppercase tracking-wider mt-8 mb-2">
          <span className="text-[var(--color-fg-muted)]">## </span>
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-bold uppercase tracking-wider mt-6 mb-2">
          <span className="text-[var(--color-fg-muted)]">### </span>
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="mb-4">
          <InlineText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="mb-4 space-y-1">
          {block.items.map((item, i) => (
            <li key={i} className="pl-6 relative">
              <span className="absolute left-2 text-[var(--color-fg-muted)]">*</span>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-4 mb-4 overflow-x-auto text-xs leading-5">
          <code>{block.text}</code>
        </pre>
      );
    case "blockquote":
      return (
        <blockquote className="border-l-2 border-[var(--color-fg-muted)] pl-4 text-[var(--color-fg-muted)] mb-4">
          <InlineText text={block.text} />
        </blockquote>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { meta, content } = getPost(slug);
  const blocks = parseMarkdown(content);

  return (
    <article>
      <div className="mb-8">
        <div className="text-[var(--color-accent)] mb-4">
          <span className="text-[var(--color-fg-muted)]">$</span> cat posts/{slug}.md
        </div>
        <h1 className="text-lg font-bold">{meta.title}</h1>
        <div className="text-[var(--color-fg-muted)] text-xs mt-1">
          {meta.date}
        </div>
      </div>

      <div>
        {blocks.map((block, i) => (
          <MarkdownBlock key={i} block={block} />
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
        <Link
          href="/posts"
          className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-xs"
        >
          ← cd ../posts
        </Link>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts — tksh.io",
};

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div>
      <div className="mb-6">
        <span className="text-[var(--color-fg-muted)]">$</span>{" "}
        <span className="font-bold">ls -la posts/</span>
      </div>

      {posts.length > 0 ? (
        <div className="space-y-0.5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block hover:text-[var(--color-accent)] transition-colors"
            >
              <span className="text-[var(--color-fg-faint)] mr-2">drwxr-xr-x</span>
              <span className="text-[var(--color-fg-muted)] mr-3">{post.date}</span>
              {post.title}
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-[var(--color-fg-muted)]">Directory is empty.</div>
      )}
    </div>
  );
}

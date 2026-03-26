import type { Metadata } from "next";
import { books } from "@/content/data/books";

export const metadata: Metadata = {
  title: "Books — tksh.io",
};

const statusIcon = { reading: "●", read: "✓", want: "○" } as const;
const statusLabel = { reading: "CURRENTLY READING", read: "READ", want: "WANT TO READ" } as const;

export default function Books() {
  const grouped = {
    reading: books.filter((b) => b.status === "reading"),
    read: books.filter((b) => b.status === "read"),
    want: books.filter((b) => b.status === "want"),
  };

  return (
    <div>
      <div className="mb-6">
        <span className="text-[var(--color-fg-muted)]">$</span>{" "}
        <span className="font-bold">cat reading-list.txt</span>
      </div>

      {(["reading", "read", "want"] as const).map((status) => (
        <div key={status} className="mb-6">
          <div className="mb-1">
            <span className="text-[var(--color-fg-muted)]"># </span>
            <span className="font-bold uppercase">{statusLabel[status]}</span>
          </div>
          <div className="space-y-0.5">
            {grouped[status].map((book) => (
              <div key={book.title}>
                <span className={
                  status === "reading"
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-fg-faint)]"
                }>
                  {statusIcon[status]}
                </span>{" "}
                {book.title}
                <span className="text-[var(--color-fg-muted)]"> — {book.author}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

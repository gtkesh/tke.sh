import type { Metadata } from "next";
import { albums } from "@/content/data/music";

export const metadata: Metadata = {
  title: "Music — tksh.io",
};

export default function Music() {
  return (
    <div>
      <div className="mb-6">
        <span className="text-[var(--color-fg-muted)]">$</span>{" "}
        <span className="font-bold">ls music-library/</span>
      </div>

      <div className="space-y-0.5">
        {albums.map((album) => (
          <div key={`${album.artist}-${album.title}`} className="flex items-baseline justify-between gap-4">
            <div className="min-w-0 truncate">
              {album.url ? (
                <a href={album.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                  {album.artist} — {album.title}
                </a>
              ) : (
                <span>
                  {album.artist}
                  <span className="text-[var(--color-fg-muted)]"> — {album.title}</span>
                </span>
              )}
            </div>
            <span className="text-[var(--color-fg-faint)] shrink-0">
              ({album.year})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { projects } from "@/content/data/projects";

export const metadata: Metadata = {
  title: "Projects — tksh.io",
};

export default function Projects() {
  return (
    <div>
      <div className="mb-6">
        <span className="text-[var(--color-fg-muted)]">$</span>{" "}
        <span className="font-bold">ls -la projects/</span>
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <div key={project.name}>
            <div>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 hover:text-[var(--color-accent)] transition-colors">
                  {project.name}
                </a>
              ) : (
                <span className="font-bold">{project.name}</span>
              )}
              <span className="text-[var(--color-fg-faint)] ml-2">({project.year})</span>
            </div>
            <div className="text-[var(--color-fg-muted)]">
              <span className="text-[var(--color-fg-faint)]">&gt;</span> {project.description}
            </div>
            <div className="text-[var(--color-fg-muted)]">
              <span className="text-[var(--color-fg-faint)]">&gt;</span> tech: {project.tech.join(", ").toLowerCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

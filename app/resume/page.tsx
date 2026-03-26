import type { Metadata } from "next";
import { experience, education, skills } from "@/content/data/resume";

export const metadata: Metadata = {
  title: "Resume — tksh.io",
};

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mt-8 first:mt-0 mb-2">
      <span className="text-[var(--color-fg-muted)]"># </span>
      <span className="font-bold uppercase">{children}</span>
    </div>
  );
}

export default function Resume() {
  return (
    <div>
      <div className="mb-6">
        <span className="text-[var(--color-fg-muted)]">$</span>{" "}
        <span className="font-bold">cat resume.txt</span>
      </div>

      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-4">
        {experience.map((job) => (
          <div key={job.company}>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <span className="font-bold">{job.company}</span>
              <span className="text-[var(--color-fg-faint)]">{job.period}</span>
            </div>
            <div className="text-[var(--color-fg-muted)]">
              <span className="text-[var(--color-fg-faint)]">&gt;</span> {job.role}
            </div>
            {job.description.map((line, i) => (
              <div key={i} className="text-[var(--color-fg-muted)]">
                <span className="text-[var(--color-fg-faint)]">&gt;</span> {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      <SectionTitle>Education</SectionTitle>
      <div className="space-y-3">
        {education.map((edu) => (
          <div key={edu.institution}>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4">
              <span className="font-bold">{edu.institution}</span>
              <span className="text-[var(--color-fg-faint)]">{edu.period}</span>
            </div>
            <div className="text-[var(--color-fg-muted)]">
              <span className="text-[var(--color-fg-faint)]">&gt;</span> {edu.degree}
            </div>
          </div>
        ))}
      </div>

      <SectionTitle>Skills</SectionTitle>
      <div className="text-[var(--color-fg-muted)]">{skills.join(", ")}</div>
    </div>
  );
}

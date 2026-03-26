export type Project = {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  year: number;
};

export const projects: Project[] = [
  {
    name: "tksh.io",
    description: "This personal website. Terminal-themed, built with Next.js.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://tksh.io",
    year: 2025,
  },
  {
    name: "project-alpha",
    description: "A CLI tool for managing development workflows.",
    tech: ["Go", "SQLite"],
    url: "https://github.com/giorgi/project-alpha",
    year: 2024,
  },
  {
    name: "project-beta",
    description: "Real-time data visualization dashboard.",
    tech: ["React", "D3.js", "WebSocket"],
    url: "https://github.com/giorgi/project-beta",
    year: 2023,
  },
];

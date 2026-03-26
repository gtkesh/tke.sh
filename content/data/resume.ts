export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export const experience: Experience[] = [
  {
    company: "Pipe",
    role: "Software Engineer",
    period: "2022 — present",
    description: [
      "Building financial infrastructure and trading platforms",
    ],
  },
  {
    company: "Plaid",
    role: "Software Engineer",
    period: "2018 — 2022",
    description: [
      "Worked on core banking integrations and APIs",
      "4 years building fintech infrastructure",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "University",
    degree: "Computer Science",
    period: "2014 — 2018",
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Git",
];

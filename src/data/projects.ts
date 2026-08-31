import type { ProjectData } from "@/types/projects";

export const projects: ProjectData[] = [
  {
    id: "project-portfolio-documents",
    title: "Portfolio Document System",
    description:
      "Interactive document-style portfolio built with Next.js and TypeScript, including tab navigation and a lightweight command palette.",
    tags: ["Next.js", "TypeScript", "UI"],
    year: "2026",
    slug: "portfolio-document-system",
  },
  {
    id: "project-vectric-internship",
    title: "Vectric Internship",
    description:
      "TODO: expand with the detailed internship summary from the previous portfolio site, focusing on software engineering and tooling work.",
    tags: ["C++", "Software Engineering", "Internship"],
    year: "2025",
    slug: "vectric-internship",
  },
  {
    id: "project-academic-work",
    title: "Academic and Coursework Projects",
    description:
      "TODO: add the most relevant Warwick projects across HPC, databases, AI/ML, and systems work.",
    tags: ["HPC", "AI", "Databases"],
    year: "2023",
    slug: "academic-work",
  },
];

import type { ExperienceData } from "@/types/experiences";

export const experiences: ExperienceData[] = [
  {
    id: "experience-bloomberg",
    title: "Bloomberg",
    type: "experience",
    role: "Software Engineer Intern",
    description:
      "Building distributed systems and subscriber-facing services for open order positions.",
    tags: ["Python", "Kafka", "Pub-Sub", "Databases"],
    year: "Jun 2026 -- Sep 2026",
    slug: "bloomberg",
  },
  {
    id: "experience-vectric",
    title: "Vectric",
    type: "experience",
    role: "Software Engineer Intern",
    description:
      "Creating CNC tooling and toolpath visualisation for high-speed machining workflows.",
    highlights: [
      "Developed WebSocket-based communication with CNC machines using the Web Serial API (JavaScript), enabling real-time manual and script-based control through a web browser using G-code.",
      "Built an interactive toolpath visualiser with React and Three.js for 3D simulation and debugging of G-code scripts.",
      "Implemented a spiral pocketing toolpath algorithm in C++ for high-speed pocket machining, significantly reducing machining time.",
    ],
    tags: [
      "C/C++",
      "JavaScript",
      "TypeScript",
      "React",
      "Three.js",
      "Raylib",
      "Maths",
      "Linear Algebra",
      "Graphics",
      "CNC",
      "CAM",
    ],
    year: "Jun 2025 -- Sep 2025",
    slug: "vectric",
  },
  {
    id: "experience-greenpyrus",
    title: "GreenPyrus",
    type: "experience",
    role: "Software Developer (Part-time)",
    description:
      "Building internal tools and data workflows for inventory and operational tooling.",
    tags: ["Python", "AWS", "Databases", "TypeScript/React"],
    year: "Mar 2021 -- Sep 2023",
    slug: "greenpyrus",
  },
];

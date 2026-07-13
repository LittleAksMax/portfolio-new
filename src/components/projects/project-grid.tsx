import type { ProjectData } from "@/types/projects";

import { ProjectCard } from "@/components/projects/project-card";

interface ProjectGridProps {
  projects: ProjectData[];
  onOpen: (project: ProjectData) => void;
}

export function ProjectGrid({ projects, onOpen }: ProjectGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onOpen={onOpen} />
      ))}
    </div>
  );
}

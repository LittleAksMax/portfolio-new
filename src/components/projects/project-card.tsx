"use client";

import { cn } from "@/lib/utils";
import type { ProjectData } from "@/types/projects";

interface ProjectCardProps {
  project: ProjectData;
  onOpen: (project: ProjectData) => void;
  className?: string;
}

export function ProjectCard({ project, onOpen, className }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={cn(
        "flex h-full min-h-40 flex-col items-start gap-3 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        className,
      )}
    >
      <div className="space-y-1">
        <div className="text-sm font-medium">{project.title}</div>
        <div className="text-xs text-foreground/60">{project.year}</div>
      </div>

      <p className="text-sm leading-6 text-foreground/75">
        {project.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 text-xs text-foreground/60">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2 py-0.5"
          >
            {tag}
          </li>
        ))}
      </ul>
    </button>
  );
}

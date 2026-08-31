import type { DocumentRecord } from "@/types/documents";
import type { ProjectData } from "@/types/projects";

import { OverviewDocument } from "@/components/documents/overview-document";
import { ProjectDocument } from "@/components/documents/project-document";

interface MainContentProps {
  activeDocument: DocumentRecord;
  projects: ProjectData[];
  onOpenProject: (project: ProjectData) => void;
}

export function MainContent({
  activeDocument,
  projects,
  onOpenProject,
}: MainContentProps) {
  return (
    <main className="flex-1 overflow-y-auto px-4 py-6 font-mono sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        {activeDocument.type === "overview" ? (
          <OverviewDocument projects={projects} onOpenProject={onOpenProject} />
        ) : (
          <ProjectDocument document={activeDocument} />
        )}
      </div>
    </main>
  );
}

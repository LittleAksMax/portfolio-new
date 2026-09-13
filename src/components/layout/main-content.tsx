import type { DocumentRecord } from "@/types/documents";
import type { OpenDocumentInput } from "@/types/documents";
import type { ExperienceData } from "@/types/experiences";
import type { ProjectData } from "@/types/projects";

import { ExperienceDocument } from "@/components/documents/experience-document";
import { EducationDocument } from "@/components/documents/education-document";
import { CertificationsDocument } from "@/components/documents/certifications-document";
import { OverviewDocument } from "@/components/documents/overview-document";
import { ProjectDocument } from "@/components/documents/project-document";

interface MainContentProps {
  activeDocument: DocumentRecord;
  projects: ProjectData[];
  experiences: ExperienceData[];
  onOpenDocument: (
    document: ProjectData | ExperienceData | OpenDocumentInput,
  ) => void;
}

export function MainContent({
  activeDocument,
  projects,
  experiences,
  onOpenDocument,
}: MainContentProps) {
  return (
    <main className="flex-1 overflow-y-auto px-4 py-6 font-mono sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        {activeDocument.type === "overview" ? (
          <OverviewDocument
            projects={projects}
            experiences={experiences}
            onOpenDocument={onOpenDocument}
          />
        ) : activeDocument.type === "experience" ? (
          <ExperienceDocument document={activeDocument} />
        ) : activeDocument.type === "education" ? (
          <EducationDocument />
        ) : activeDocument.type === "certification" ? (
          <CertificationsDocument />
        ) : (
          <ProjectDocument document={activeDocument} />
        )}
      </div>
    </main>
  );
}

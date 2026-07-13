import type { DocumentRecord, OpenDocumentInput } from "@/types/documents";
import type { ProjectData } from "@/types/projects";

export function createOverviewDocument(): DocumentRecord {
  return {
    id: "overview",
    title: "Overview.md",
    type: "overview",
    isClosable: false,
  };
}

export function createProjectDocument(project: ProjectData): DocumentRecord {
  return {
    id: project.id,
    title: project.title,
    type: "project",
    isClosable: true,
    slug: project.slug,
    description: project.description,
    tags: project.tags,
    year: project.year,
  };
}

export function toDocumentRecord(document: OpenDocumentInput): DocumentRecord {
  return {
    ...document,
    isClosable: document.isClosable ?? document.type !== "overview",
  };
}

// TODO: add URL routing for documents.
// TODO: add persistent open documents.
// TODO: add document history.
// TODO: add theme switching.
// TODO: add search indexing.
// TODO: add additional command implementations.

import type { DocumentRecord, OpenDocumentInput } from "@/types/documents";
import type { ProjectData } from "@/types/projects";

function toMarkdownFilename(title: string) {
  return title.endsWith(".md") ? title : `${title}.md`;
}

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
    title: toMarkdownFilename(project.title),
    type: "project",
    isClosable: true,
    slug: project.slug,
    description: project.description,
    tags: project.tags,
    year: project.year,
  };
}

export function createExperienceDocument(
  experience: OpenDocumentInput,
): DocumentRecord {
  return {
    id: experience.id,
    title: toMarkdownFilename(experience.title),
    type: "experience",
    isClosable: true,
    role: experience.role,
    slug: experience.slug,
    description: experience.description,
    highlights: experience.highlights,
    tags: experience.tags,
    year: experience.year,
  };
}

export function toDocumentRecord(document: OpenDocumentInput): DocumentRecord {
  return {
    ...document,
    title: toMarkdownFilename(document.title),
    isClosable: document.isClosable ?? document.type !== "overview",
  };
}

// TODO: add URL routing for documents.
// TODO: add persistent open documents.
// TODO: add document history.
// TODO: add theme switching.
// TODO: add search indexing.
// TODO: add additional command implementations.

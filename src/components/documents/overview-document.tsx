"use client";

import type { ProjectData } from "@/types/projects";

import { MarkdownDivider } from "@/components/common/markdown-divider";
import { MarkdownHeading } from "@/components/common/markdown-heading";
import { MarkdownList } from "@/components/common/markdown-list";
import { MarkdownParagraph } from "@/components/common/markdown-paragraph";
import { MarkdownQuote } from "@/components/common/markdown-quote";
import { Section } from "@/components/common/section";
import { ProjectGrid } from "@/components/projects/project-grid";

interface OverviewDocumentProps {
  projects: ProjectData[];
  onOpenProject: (project: ProjectData) => void;
}

export function OverviewDocument({
  projects,
  onOpenProject,
}: OverviewDocumentProps) {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <MarkdownHeading level={1}>
          David R. | MEng CS @ Warwick | SWE Intern @ Bloomberg, Ex-Vectric
        </MarkdownHeading>
        <MarkdownParagraph>
          This Overview document is a placeholder scaffold for a document-style
          portfolio. The structure is laid out so future content can be dropped
          in without redesigning the document model.
        </MarkdownParagraph>
      </header>

      <Section id="overview">
        <MarkdownHeading level={2}>Overview</MarkdownHeading>
        <MarkdownParagraph>
          Placeholder biography content goes here. The aim is to keep the
          portfolio readable as a single document while preserving the
          interaction pattern of opening related work in separate tabs.
        </MarkdownParagraph>

        <MarkdownHeading level={3}>Education</MarkdownHeading>
        <MarkdownParagraph>
          Placeholder education notes live here as a subsection instead of a
          separate top-level section.
        </MarkdownParagraph>
      </Section>

      <MarkdownDivider />

      <Section id="table-of-contents">
        <MarkdownHeading level={2}>Table of Contents</MarkdownHeading>
        <MarkdownList>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#interests-and-skills">Interests and Skills</a>
          </li>
          <li>
            <a href="#work-experience">Work Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#courses-certifications">Courses / Certifications</a>
          </li>
        </MarkdownList>
      </Section>

      <Section id="interests-and-skills">
        <MarkdownHeading level={2}>Interests and Skills</MarkdownHeading>
        <MarkdownParagraph>
          Placeholder content for interests and skills. This section will
          eventually describe focus areas, tooling, and working style.
        </MarkdownParagraph>
        <MarkdownQuote>
          Keep this section concise and factual once real content is added.
        </MarkdownQuote>
      </Section>

      <Section id="work-experience">
        <MarkdownHeading level={2}>Work Experience</MarkdownHeading>
        <MarkdownParagraph>
          Placeholder content for work experience. The layout is prepared for
          future entries without requiring a new route or a different document
          format.
        </MarkdownParagraph>
      </Section>

      <Section id="projects">
        <MarkdownHeading level={2}>Projects</MarkdownHeading>
        <MarkdownParagraph>
          Clicking a project opens a new document tab. Duplicate tabs are
          prevented by the document context.
        </MarkdownParagraph>
        <ProjectGrid projects={projects} onOpen={onOpenProject} />
      </Section>

      <Section id="courses-certifications">
        <MarkdownHeading level={2}>Courses / Certifications</MarkdownHeading>
        <MarkdownParagraph>
          Placeholder content for courses and certifications. This area can grow
          into a richer document later.
        </MarkdownParagraph>
      </Section>
    </article>
  );
}

"use client";

import type { ProjectData } from "@/types/projects";
import type { ExperienceData } from "@/types/experiences";
import type { OpenDocumentInput } from "@/types/documents";

import { MarkdownDivider } from "@/components/common/markdown-divider";
import { MarkdownHeading } from "@/components/common/markdown-heading";
import { MarkdownLink } from "@/components/common/markdown-link";
import { MarkdownList } from "@/components/common/markdown-list";
import { MarkdownParagraph } from "@/components/common/markdown-paragraph";
import { Section } from "@/components/common/section";

interface OverviewDocumentProps {
  projects: ProjectData[];
  experiences: ExperienceData[];
  onOpenDocument: (
    document: ProjectData | ExperienceData | OpenDocumentInput,
  ) => void;
}

export function OverviewDocument({
  projects,
  experiences,
  onOpenDocument,
}: OverviewDocumentProps) {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <MarkdownHeading level={1}>
          David R. | MEng CS @ Warwick
        </MarkdownHeading>
      </header>

      <Section id="overview">
        <MarkdownHeading level={2}>Overview</MarkdownHeading>
        <MarkdownParagraph>
          <MarkdownLink
            href="/David_Rosental_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            My current CV is available here.
          </MarkdownLink>
        </MarkdownParagraph>

        <MarkdownParagraph>
          <strong>Interests:</strong> Distributed Systems, Platform Engineering,
          Developer Infrastructure, Cloud Computing, Scalability, Performance
          Engineering
        </MarkdownParagraph>

        <MarkdownParagraph>
          <strong>Education:</strong> Currently final-year MEng Computer Science
          at the University of Warwick,
          <em> 2023--2027</em>.{" "}
          <MarkdownLink
            href="#"
            onClick={(event) => {
              event.preventDefault();
              onOpenDocument({
                id: "education",
                title: "Education.md",
                type: "education",
              });
            }}
          >
            Full education history is available here.
          </MarkdownLink>
        </MarkdownParagraph>
      </Section>

      <MarkdownDivider />

      <Section id="work-experience">
        <MarkdownHeading level={2}>Work Experience</MarkdownHeading>
        {experiences.map((experience) => (
          <MarkdownParagraph key={experience.id}>
            <MarkdownLink
              href="#"
              onClick={(event) => {
                event.preventDefault();
                onOpenDocument(experience);
              }}
            >
              <strong>{experience.title}</strong>
            </MarkdownLink>{" "}
            — <strong>{experience.role}</strong> <em>{experience.year}</em>
            <br />
            {experience.description}
            <br />
            {experience.tags.map((tag) => `[${tag}]`).join(" ")}
          </MarkdownParagraph>
        ))}
      </Section>

      <Section id="projects">
        <MarkdownHeading level={2}>Projects</MarkdownHeading>
        <MarkdownList>
          {projects.map((project) => (
            <li key={project.id}>
              <MarkdownLink
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  onOpenDocument(project);
                }}
              >
                {project.title}
              </MarkdownLink>{" "}
              [<strong>{project.tags.join(", ")}</strong>]:{" "}
              {project.description}
            </li>
          ))}
        </MarkdownList>
      </Section>

      <Section id="courses-certifications">
        <MarkdownHeading level={2}>Courses / Certifications</MarkdownHeading>
        <MarkdownParagraph>
          <MarkdownLink
            href="#"
            onClick={(event) => {
              event.preventDefault();
              onOpenDocument({
                id: "certifications",
                title: "Certifications.md",
                type: "certification",
              });
            }}
          >
            View certifications and course notes.
          </MarkdownLink>
        </MarkdownParagraph>
      </Section>
    </article>
  );
}

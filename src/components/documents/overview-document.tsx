"use client";

import type { ProjectData } from "@/types/projects";

import { MarkdownDivider } from "@/components/common/markdown-divider";
import { MarkdownHeading } from "@/components/common/markdown-heading";
import { MarkdownLink } from "@/components/common/markdown-link";
import { MarkdownList } from "@/components/common/markdown-list";
import { MarkdownParagraph } from "@/components/common/markdown-paragraph";
import { Section } from "@/components/common/section";

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
          David R. | MEng CS @ Warwick | Incoming @ Bloomberg
        </MarkdownHeading>
      </header>

      <Section id="overview">
        <MarkdownHeading level={2}>Overview</MarkdownHeading>
        <MarkdownParagraph>
          I am a Computer Science student at the University of Warwick with
          software engineering experience in industry.{" "}
          <MarkdownLink href="/David_Rosental_CV.pdf">
            My CV is available here
          </MarkdownLink>
          .
        </MarkdownParagraph>

        <MarkdownHeading level={3}>Education</MarkdownHeading>
        <MarkdownParagraph>
          MEng Computer Science, University of Warwick (2023 -- 2027). Relevant
          modules include High Performance Computing, Databases, Artificial
          Intelligence and Machine Learning, Operating Systems, and Computer
          Networks.
        </MarkdownParagraph>
        <MarkdownList>
          <li>MEng Computer Science</li>
          <li>Institution: University of Warwick</li>
          <li>Expected graduation: 2027</li>
        </MarkdownList>
        <MarkdownParagraph>
          <MarkdownLink href="/education-history.md">
            My full education history is here
          </MarkdownLink>
          .
        </MarkdownParagraph>
      </Section>

      <MarkdownDivider />

      <Section id="table-of-contents">
        <MarkdownHeading level={2}>Table of Contents</MarkdownHeading>
        <MarkdownList>
          <li>
            <MarkdownLink href="#overview">Overview</MarkdownLink>
          </li>
          <li>
            <MarkdownLink href="#interests-and-skills">
              Interests and Skills
            </MarkdownLink>
          </li>
          <li>
            <MarkdownLink href="#work-experience">Work Experience</MarkdownLink>
          </li>
          <li>
            <MarkdownLink href="#projects">Projects</MarkdownLink>
          </li>
          <li>
            <MarkdownLink href="#courses-certifications">
              Courses / Certifications
            </MarkdownLink>
          </li>
        </MarkdownList>
      </Section>

      <Section id="interests-and-skills">
        <MarkdownHeading level={2}>Interests and Skills</MarkdownHeading>
        <MarkdownParagraph>
          I am particularly interested in software engineering, systems,
          high-performance computing, and applied AI/ML. My work typically sits
          at the intersection of performance, tooling, and product impact.
        </MarkdownParagraph>
        <MarkdownList>
          <li>Languages: C++, Python, TypeScript, JavaScript, Java, SQL</li>
          <li>Web: React, Next.js, HTML, CSS</li>
          <li>
            Tools: Git, Linux, Docker, HPC workflows, debugging, profiling
          </li>
          <li>
            Areas: distributed systems, databases, AI/ML, performance tuning
          </li>
        </MarkdownList>
      </Section>

      <Section id="work-experience">
        <MarkdownHeading level={2}>Work Experience</MarkdownHeading>
        <MarkdownParagraph>
          <strong>Bloomberg</strong> — SWE Intern. TODO: add fuller internship
          details from the updated CV and internship summary.
        </MarkdownParagraph>
        <MarkdownParagraph>
          <strong>Vectric</strong> — Software Engineering Intern. TODO: expand
          this section using the more detailed old portfolio write-up.
        </MarkdownParagraph>
      </Section>

      <Section id="projects">
        <MarkdownHeading level={2}>Projects</MarkdownHeading>
        <MarkdownList>
          {projects.map((project) => (
            <li key={project.id}>
              <MarkdownLink onClick={() => onOpenProject(project)} href="#">
                {project.title}
              </MarkdownLink>{" "}
              [{project.tags.join(", ")}]: {project.description}
            </li>
          ))}
        </MarkdownList>
      </Section>

      <Section id="courses-certifications">
        <MarkdownHeading level={2}>Courses / Certifications</MarkdownHeading>
        <MarkdownParagraph>
          Relevant coursework includes HPC, databases, AI/ML, operating systems,
          and networking. TODO: add certifications and external courses where
          relevant.
        </MarkdownParagraph>
      </Section>
    </article>
  );
}

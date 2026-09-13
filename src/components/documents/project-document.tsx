import { MarkdownCodeBlock } from "@/components/common/markdown-code-block";
import { MarkdownDivider } from "@/components/common/markdown-divider";
import { MarkdownHeading } from "@/components/common/markdown-heading";
import { MarkdownList } from "@/components/common/markdown-list";
import { MarkdownParagraph } from "@/components/common/markdown-paragraph";
import { Section } from "@/components/common/section";
import type { DocumentRecord } from "@/types/documents";

interface ProjectDocumentProps {
  document: DocumentRecord;
}

export function ProjectDocument({ document }: ProjectDocumentProps) {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <MarkdownHeading level={1}>
          {document.title.replace(/\.md$/, "")}
        </MarkdownHeading>
        <MarkdownParagraph>
          This is a placeholder project document. It exists to mirror the
          editor-style document flow without introducing real project content
          yet.
        </MarkdownParagraph>
      </header>

      <MarkdownDivider />

      <Section id="project-summary">
        <MarkdownHeading level={2}>Summary</MarkdownHeading>
        <MarkdownParagraph>
          Placeholder summary text for the selected project document. Future
          content can be slotted into this structure without changing the tab or
          document management model.
        </MarkdownParagraph>
      </Section>

      <Section id="project-metadata">
        <MarkdownHeading level={2}>Metadata</MarkdownHeading>
        <MarkdownList>
          <li>Slug: {document.slug ?? "placeholder-slug"}</li>
          <li>Year: {document.year ?? "2026"}</li>
          <li>Tags: {document.tags?.join(", ") ?? "Placeholder, Tags"}</li>
        </MarkdownList>
      </Section>

      <Section id="project-notes">
        <MarkdownHeading level={2}>Notes</MarkdownHeading>
        <MarkdownCodeBlock>{`// Placeholder notes
// Add project-specific details here later.
`}</MarkdownCodeBlock>
      </Section>
    </article>
  );
}

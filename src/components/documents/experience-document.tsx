import { MarkdownDivider } from "@/components/common/markdown-divider";
import { MarkdownHeading } from "@/components/common/markdown-heading";
import { MarkdownList } from "@/components/common/markdown-list";
import { MarkdownParagraph } from "@/components/common/markdown-paragraph";
import { Section } from "@/components/common/section";
import type { DocumentRecord } from "@/types/documents";

interface ExperienceDocumentProps {
  document: DocumentRecord;
}

export function ExperienceDocument({ document }: ExperienceDocumentProps) {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <MarkdownHeading level={1}>
          {document.title.replace(/\.md$/, "")}
        </MarkdownHeading>
        <MarkdownParagraph>
          <strong>{document.role ?? "Experience"}</strong>
        </MarkdownParagraph>
        <MarkdownParagraph>
          <strong>{document.year ?? "Date unavailable"}</strong>
        </MarkdownParagraph>
        {document.tags?.length ? (
          <MarkdownParagraph>
            {document.tags.map((tag) => `[${tag}]`).join(" ")}
          </MarkdownParagraph>
        ) : null}
      </header>

      <MarkdownDivider />

      <Section id="experience-summary">
        <MarkdownHeading level={2}>Summary</MarkdownHeading>
        <MarkdownParagraph>
          {document.description ?? "Experience summary available soon."}
        </MarkdownParagraph>
        {document.highlights?.length ? (
          <MarkdownList>
            {document.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </MarkdownList>
        ) : null}
      </Section>
    </article>
  );
}

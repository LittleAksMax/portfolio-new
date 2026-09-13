import { MarkdownDivider } from "@/components/common/markdown-divider";
import { MarkdownHeading } from "@/components/common/markdown-heading";
import { MarkdownList } from "@/components/common/markdown-list";
import { MarkdownParagraph } from "@/components/common/markdown-paragraph";
import { Section } from "@/components/common/section";

export function EducationDocument() {
  return (
    <article className="space-y-8">
      <MarkdownHeading level={1}>Education</MarkdownHeading>
      <MarkdownDivider />
      <Section id="meng-computer-science">
        <MarkdownHeading level={2}>
          MEng Computer Science @ University of Warwick (2023--2027)
        </MarkdownHeading>
        <MarkdownParagraph>
          Predicted <strong>First Class Honours</strong>.
        </MarkdownParagraph>
        <MarkdownParagraph>
          Relevant modules include High Performance Computing, Databases and
          Advanced Databases, Artificial Intelligence and Machine Learning,
          Operating Systems, and Computer Networks.
        </MarkdownParagraph>
      </Section>

      <Section id="a-levels">
        <MarkdownHeading level={2}>
          A-Levels @ Hills Road Sixth Form College (2021--2023)
        </MarkdownHeading>
        <MarkdownParagraph>
          <strong>4A* + A</strong> in Maths, Further Maths, Computer Science,
          Physics + EPQ.
        </MarkdownParagraph>
        <MarkdownList>
          <li>Top 50 internationally in AQA A-Level Computer Science.</li>
          <li>Tutored physics throughout first year.</li>
          <li>Tutored Further Maths throughout second year.</li>
        </MarkdownList>
      </Section>

      <Section id="gcses">
        <MarkdownHeading level={2}>
          GCSEs @ Chesterton Community College
        </MarkdownHeading>
        <MarkdownParagraph>
          8 &times; Grade 9&apos;s + 2 &times; Grade 8&apos;s + Grade A in FSMQ
          (highest available).
        </MarkdownParagraph>
      </Section>
    </article>
  );
}

import Image from "next/image";

import { MarkdownDivider } from "@/components/common/markdown-divider";
import { MarkdownHeading } from "@/components/common/markdown-heading";
import { MarkdownList } from "@/components/common/markdown-list";
import { MarkdownParagraph } from "@/components/common/markdown-paragraph";
import { Section } from "@/components/common/section";

const certifications = [
  {
    title: "From Zero to Hero: Docker for Developers",
    date: "2024-06-07",
    image: "/Docker-Cert.png",
    topics: [
      "Understanding image layers, build context, and build caching.",
      "Orchestrating multiple containers with Docker Compose.",
      "Managing data with volumes, bind mounts, and tmpfs.",
      "Configuring Docker networks, and non-root containers.",
    ],
  },
  {
    title: "From Zero to Hero: REST APIs in .NET",
    date: "2024-03-24",
    image: "/REST-Cert.png",
    topics: [
      "ASP.NET Core REST API development",
      "Authentication/Authorisation w/ sessions and JWT, user-specific actions, caching, health checks, HATEOAS, Swagger",
    ],
  },
  {
    title: "Cloud Fundamentals: AWS Services for C# Developers",
    date: "2023-12-30",
    image: "/AWS-Cert.png",
    topics: [
      "AWS fundamentals with C#",
      "S3, Lambda, DynamoDB, SQS, SNS, and Secrets Manager",
    ],
  },
];

export function CertificationsDocument() {
  return (
    <article className="space-y-8">
      <MarkdownHeading level={1}>Certifications</MarkdownHeading>
      <MarkdownDivider />
      {certifications.map((certification) => (
        <Section key={certification.title} id={certification.title}>
          <MarkdownHeading level={2}>{certification.title}</MarkdownHeading>
          <MarkdownParagraph>
            <em>{certification.date}</em>
          </MarkdownParagraph>
          <MarkdownList>
            {certification.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </MarkdownList>
          <Image
            src={certification.image}
            alt={`${certification.title} certificate`}
            width={1600}
            height={1200}
            className="h-auto w-full rounded-md border border-border"
          />
        </Section>
      ))}
    </article>
  );
}

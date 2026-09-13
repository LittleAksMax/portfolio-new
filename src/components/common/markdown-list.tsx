import { cn } from "@/lib/utils";

interface MarkdownListProps {
  ordered?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function MarkdownList({
  ordered = false,
  className,
  children,
}: MarkdownListProps) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag
      className={cn(
        "space-y-2 pl-5 text-sm leading-7",
        ordered ? "list-decimal" : "list-disc",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

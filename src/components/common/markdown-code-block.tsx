import { cn } from "@/lib/utils";

interface MarkdownCodeBlockProps {
  className?: string;
  children: React.ReactNode;
}

export function MarkdownCodeBlock({
  className,
  children,
}: MarkdownCodeBlockProps) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-xs leading-6",
        className,
      )}
    >
      <code>{children}</code>
    </pre>
  );
}

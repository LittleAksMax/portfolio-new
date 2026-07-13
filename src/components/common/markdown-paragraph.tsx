import { cn } from "@/lib/utils";

interface MarkdownParagraphProps {
  className?: string;
  children: React.ReactNode;
}

export function MarkdownParagraph({
  className,
  children,
}: MarkdownParagraphProps) {
  return (
    <p
      className={cn(
        "max-w-3xl text-sm leading-7 text-foreground/80",
        className,
      )}
    >
      {children}
    </p>
  );
}

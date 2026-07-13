import { cn } from "@/lib/utils";

interface MarkdownQuoteProps {
  className?: string;
  children: React.ReactNode;
}

export function MarkdownQuote({ className, children }: MarkdownQuoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-border pl-4 text-sm italic text-foreground/75",
        className,
      )}
    >
      {children}
    </blockquote>
  );
}

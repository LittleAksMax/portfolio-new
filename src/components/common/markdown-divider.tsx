import { cn } from "@/lib/utils";

interface MarkdownDividerProps {
  className?: string;
}

export function MarkdownDivider({ className }: MarkdownDividerProps) {
  return <hr className={cn("border-border", className)} />;
}

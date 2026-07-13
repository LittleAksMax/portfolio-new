import { cn } from "@/lib/utils";

interface MarkdownHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

const headingClasses: Record<
  NonNullable<MarkdownHeadingProps["level"]>,
  string
> = {
  1: "text-3xl font-semibold tracking-tight",
  2: "text-2xl font-semibold tracking-tight",
  3: "text-xl font-medium tracking-tight",
  4: "text-lg font-medium",
  5: "text-base font-medium",
  6: "text-sm font-medium uppercase tracking-wide",
};

export function MarkdownHeading({
  level = 2,
  className,
  children,
}: MarkdownHeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return <Tag className={cn(headingClasses[level], className)}>{children}</Tag>;
}

import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface MarkdownLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function MarkdownLink({
  className,
  children,
  ...props
}: MarkdownLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "font-medium text-blue-600 underline decoration-2 underline-offset-4 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
        className,
      )}
    >
      {children}
    </a>
  );
}

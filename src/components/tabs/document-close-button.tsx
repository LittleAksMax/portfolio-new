"use client";

import { cn } from "@/lib/utils";

interface DocumentCloseButtonProps {
  onClose: () => void;
  className?: string;
}

export function DocumentCloseButton({
  onClose,
  className,
}: DocumentCloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close document"
      className={cn(
        "inline-flex size-6 items-center justify-center rounded-sm text-xs text-foreground/60 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        className,
      )}
    >
      x
    </button>
  );
}

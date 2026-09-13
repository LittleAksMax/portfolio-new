"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";

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
        "inline-flex size-5 items-center justify-center rounded-sm text-foreground/60 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        className,
      )}
    >
      <X aria-hidden="true" size={14} strokeWidth={2.25} />
    </button>
  );
}

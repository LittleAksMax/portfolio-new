"use client";

import { cn } from "@/lib/utils";
import type { DocumentRecord } from "@/types/documents";

import { DocumentCloseButton } from "@/components/tabs/document-close-button";

interface DocumentTabProps {
  document: DocumentRecord;
  active: boolean;
  onSelect: (documentId: string) => void;
  onClose: (documentId: string) => void;
}

export function DocumentTab({
  document,
  active,
  onSelect,
  onClose,
}: DocumentTabProps) {
  return (
    <div
      className={cn(
        "relative -mb-px flex h-10 w-48 shrink-0 border border-b-0 border-border",
        active
          ? "z-10 bg-background text-foreground"
          : "bg-muted/60 text-foreground/65",
      )}
    >
      <button
        type="button"
        onClick={() => onSelect(document.id)}
        className={cn(
          "flex h-full w-full items-center justify-between gap-3 px-3 text-left text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60",
          active
            ? "bg-background text-foreground"
            : "bg-muted/60 text-foreground/65 hover:bg-muted hover:text-foreground",
        )}
      >
        <span className="min-w-0 flex-1 truncate">{document.title}</span>
      </button>

      {document.isClosable ? (
        <DocumentCloseButton
          onClose={() => onClose(document.id)}
          className="absolute top-1/2 right-1 -translate-y-1/2"
        />
      ) : null}
    </div>
  );
}

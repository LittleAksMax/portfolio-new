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
        "flex items-center gap-1 rounded-t-md border border-b-0 px-3 py-2 text-sm",
        active
          ? "bg-background text-foreground"
          : "bg-muted/40 text-foreground/65",
      )}
    >
      <button
        type="button"
        onClick={() => onSelect(document.id)}
        className="flex items-center gap-2 text-left focus-visible:outline-none"
      >
        <span>{document.title}</span>
      </button>

      {document.isClosable ? (
        <DocumentCloseButton
          onClose={() => onClose(document.id)}
          className="ml-1"
        />
      ) : null}
    </div>
  );
}

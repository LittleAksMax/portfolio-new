"use client";

import type { DocumentRecord } from "@/types/documents";

import { DocumentTab } from "@/components/tabs/document-tab";

interface DocumentTabBarProps {
  documents: DocumentRecord[];
  activeDocumentId: string;
  onSelectDocument: (documentId: string) => void;
  onCloseDocument: (documentId: string) => void;
}

export function DocumentTabBar({
  documents,
  activeDocumentId,
  onSelectDocument,
  onCloseDocument,
}: DocumentTabBarProps) {
  return (
    <div className="border-b border-border bg-background/95 px-4 pt-4 backdrop-blur">
      <div className="flex items-end gap-2 overflow-x-auto">
        {documents.map((document) => (
          <DocumentTab
            key={document.id}
            document={document}
            active={document.id === activeDocumentId}
            onSelect={onSelectDocument}
            onClose={onCloseDocument}
          />
        ))}
      </div>
      <div className="mt-4 h-px bg-border" />
    </div>
  );
}

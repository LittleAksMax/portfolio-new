"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  createOverviewDocument,
  createProjectDocument,
  toDocumentRecord,
} from "@/lib/document-utils";
import type { DocumentRecord, OpenDocumentInput } from "@/types/documents";
import type { ProjectData } from "@/types/projects";

interface DocumentContextValue {
  documents: DocumentRecord[];
  activeDocumentId: string;
  activeDocument: DocumentRecord;
  openDocument: (document: OpenDocumentInput | ProjectData) => void;
  closeDocument: (documentId: string) => void;
  setActiveDocument: (documentId: string) => void;
}

const DocumentContext = createContext<DocumentContextValue | null>(null);

function isProjectData(
  document: OpenDocumentInput | ProjectData,
): document is ProjectData {
  return "tags" in document && "slug" in document && "year" in document;
}

export function DocumentProvider({ children }: { children: React.ReactNode }) {
  const [documents, setDocuments] = useState<DocumentRecord[]>([
    createOverviewDocument(),
  ]);
  const [activeDocumentId, setActiveDocumentId] = useState("overview");

  const activeDocument = useMemo(
    () =>
      documents.find((document) => document.id === activeDocumentId) ??
      documents[0],
    [activeDocumentId, documents],
  );

  const openDocument = useCallback(
    (document: OpenDocumentInput | ProjectData) => {
      const nextDocument = isProjectData(document)
        ? createProjectDocument(document)
        : toDocumentRecord(document);

      setDocuments((currentDocuments) => {
        const existingDocument = currentDocuments.find(
          (item) => item.id === nextDocument.id,
        );

        if (existingDocument) {
          return currentDocuments;
        }

        return [...currentDocuments, nextDocument];
      });

      setActiveDocumentId(nextDocument.id);
    },
    [],
  );

  const closeDocument = useCallback((documentId: string) => {
    if (documentId === "overview") {
      return;
    }

    setDocuments((currentDocuments) =>
      currentDocuments.filter((document) => document.id !== documentId),
    );
    setActiveDocumentId((currentActiveDocumentId) =>
      currentActiveDocumentId === documentId
        ? "overview"
        : currentActiveDocumentId,
    );
  }, []);

  const setActiveDocument = useCallback((documentId: string) => {
    setActiveDocumentId(documentId);
  }, []);

  const value = useMemo(
    () => ({
      documents,
      activeDocumentId,
      activeDocument,
      openDocument,
      closeDocument,
      setActiveDocument,
    }),
    [
      activeDocument,
      activeDocumentId,
      closeDocument,
      documents,
      openDocument,
      setActiveDocument,
    ],
  );

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocumentContext() {
  const context = useContext(DocumentContext);

  if (!context) {
    throw new Error(
      "useDocumentContext must be used within a DocumentProvider",
    );
  }

  return context;
}

"use client";

import { useState } from "react";

import { projects } from "@/data/projects";
import { useDocumentKeyboardShortcuts } from "@/hooks/use-document-keyboard-shortcuts";
import { useDocumentContext } from "@/contexts/document-context";

import {
  CommandPalette,
  type CommandPaletteEntry,
} from "@/components/command/command-palette";
import { FloatingHelp } from "@/components/layout/floating-help";
import { MainContent } from "@/components/layout/main-content";
import { DocumentTabBar } from "@/components/tabs/document-tab-bar";

export function AppLayout() {
  const {
    documents,
    activeDocument,
    activeDocumentId,
    openDocument,
    closeDocument,
    setActiveDocument,
  } = useDocumentContext();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useDocumentKeyboardShortcuts({
    onOpenCommandPalette: () => setCommandPaletteOpen(true),
    onCloseCommandPalette: () => setCommandPaletteOpen(false),
  });

  const commandEntries: CommandPaletteEntry[] = [
    {
      id: "open-overview",
      label: "Open Overview",
      description: "Activate the default document",
      shortcut: "Enter",
      onSelect: () => setActiveDocument("overview"),
    },
    {
      id: "open-placeholder-project",
      label: "Open Placeholder Project",
      description: "Open a sample project document",
      shortcut: "P",
      onSelect: () => openDocument(projects[0]),
    },
    {
      id: "close-active-document",
      label: "Close Active Document",
      description: "Close the current project tab if it is closable",
      shortcut: "Backspace",
      onSelect: () => closeDocument(activeDocumentId),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <DocumentTabBar
        documents={documents}
        activeDocumentId={activeDocumentId}
        onSelectDocument={setActiveDocument}
        onCloseDocument={closeDocument}
      />

      <MainContent
        activeDocument={activeDocument}
        projects={projects}
        onOpenProject={openDocument}
      />

      <FloatingHelp />

      <CommandPalette
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
        commands={commandEntries}
      />
    </div>
  );
}

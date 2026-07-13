"use client";

import { useEffect } from "react";

interface UseDocumentKeyboardShortcutsOptions {
  onOpenCommandPalette: () => void;
  onCloseCommandPalette: () => void;
  enabled?: boolean;
}

export function useDocumentKeyboardShortcuts({
  onOpenCommandPalette,
  onCloseCommandPalette,
  enabled = true,
}: UseDocumentKeyboardShortcutsOptions) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const isOpenPaletteShortcut =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (isOpenPaletteShortcut) {
        event.preventDefault();
        onOpenCommandPalette();
        return;
      }

      if (event.key === "Escape") {
        onCloseCommandPalette();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, onCloseCommandPalette, onOpenCommandPalette]);
}

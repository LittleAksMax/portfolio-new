"use client";

import { useState } from "react";

export function FloatingHelp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2">
      {open ? (
        <div className="w-72 rounded-lg border border-border bg-background p-4 text-sm shadow-lg">
          <div className="space-y-3">
            <p className="font-medium">Help</p>
            <ul className="space-y-2 text-foreground/75">
              <li>Open the command palette with Ctrl + K or Cmd + K.</li>
              <li>Click a project card to open it in a new document tab.</li>
              <li>
                Use the tab bar to switch documents or close project tabs.
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="rounded-full border border-border bg-background px-4 py-2 text-sm shadow-sm transition-colors hover:bg-muted"
      >
        Help
      </button>
    </div>
  );
}

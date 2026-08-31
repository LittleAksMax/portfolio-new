"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface CommandItemProps {
  label: string;
  description?: string;
  shortcut?: string;
  active?: boolean;
  onSelect: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

export const CommandItem = forwardRef<HTMLButtonElement, CommandItemProps>(
  function CommandItem(
    { label, description, shortcut, active = false, onSelect, onKeyDown },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onSelect}
        onKeyDown={onKeyDown}
        tabIndex={active ? 0 : -1}
        className={cn(
          "flex w-full items-center justify-between gap-4 rounded-md px-3 py-2 text-left text-sm transition-colors focus:outline-none",
          active ? "bg-muted/80" : "hover:bg-muted/60 focus:bg-muted/70",
        )}
      >
        <span className="flex flex-col items-start">
          <span className="font-medium">{label}</span>
          {description ? (
            <span className="text-xs text-foreground/60">{description}</span>
          ) : null}
        </span>
        {shortcut ? (
          <span className="text-xs text-foreground/50">{shortcut}</span>
        ) : null}
      </button>
    );
  },
);

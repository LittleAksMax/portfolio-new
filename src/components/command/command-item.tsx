"use client";

import { cn } from "@/lib/utils";

interface CommandItemProps {
  label: string;
  description?: string;
  shortcut?: string;
  active?: boolean;
  onSelect: () => void;
}

export function CommandItem({
  label,
  description,
  shortcut,
  active = false,
  onSelect,
}: CommandItemProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-center justify-between gap-4 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        active && "bg-muted",
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
}

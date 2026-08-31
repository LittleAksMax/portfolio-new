"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { CommandItem } from "@/components/command/command-item";
import { CommandList } from "@/components/command/command-list";
import { CommandSearch } from "@/components/command/command-search";

export interface CommandPaletteEntry {
  id: string;
  label: string;
  description?: string;
  shortcut?: string;
  onSelect: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  commands: CommandPaletteEntry[];
}

export function CommandPalette({
  open,
  onOpenChange,
  commands,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const visibleCommands = useMemo(() => commands, [commands]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const nextIndex = Math.min(
      activeIndex,
      Math.max(visibleCommands.length - 1, 0),
    );

    itemRefs.current[nextIndex]?.focus();
  }, [activeIndex, open, visibleCommands.length]);

  useEffect(() => {
    setActiveIndex((current) =>
      Math.min(current, Math.max(visibleCommands.length - 1, 0)),
    );
  }, [visibleCommands.length]);

  const moveSelection = (delta: number) => {
    if (!visibleCommands.length) {
      return;
    }

    setActiveIndex((current) => {
      const nextIndex =
        (current + delta + visibleCommands.length) % visibleCommands.length;
      window.requestAnimationFrame(() => {
        itemRefs.current[nextIndex]?.focus();
      });
      return nextIndex;
    });
  };

  if (!open) {
    return null;
  }

  const handleExecute = (command: CommandPaletteEntry) => {
    command.onSelect();
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/20 px-4 pt-24">
      <div className="w-full max-w-xl rounded-xl border border-border bg-background p-4 shadow-lg">
        <div className="space-y-3">
          <CommandSearch
            value={query}
            onChange={setQuery}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                moveSelection(1);
              }

              if (event.key === "ArrowUp") {
                event.preventDefault();
                moveSelection(-1);
              }

              if (event.key === "Enter" && visibleCommands[activeIndex]) {
                event.preventDefault();
                handleExecute(visibleCommands[activeIndex]);
              }

              if (event.key === "Escape") {
                onOpenChange(false);
              }
            }}
          />

          <CommandList className="max-h-80 overflow-y-auto pr-1">
            {visibleCommands.map((command, index) => (
              <CommandItem
                key={command.id}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                label={command.label}
                description={command.description}
                shortcut={command.shortcut}
                active={index === activeIndex}
                onSelect={() => handleExecute(command)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    moveSelection(1);
                  }

                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    moveSelection(-1);
                  }

                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleExecute(command);
                  }
                }}
              />
            ))}
          </CommandList>

          <p className={cn("text-xs text-foreground/55")}>
            Search is scaffolded only. Command execution is placeholder wiring.
          </p>
        </div>
      </div>
    </div>
  );
}

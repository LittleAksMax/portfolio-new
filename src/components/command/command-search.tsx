"use client";

import { cn } from "@/lib/utils";

interface CommandSearchProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export function CommandSearch({
  value,
  onChange,
  onKeyDown,
}: CommandSearchProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={onKeyDown}
      placeholder="Search commands"
      className={cn(
        "h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
      )}
    />
  );
}

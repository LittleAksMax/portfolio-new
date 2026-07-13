"use client";

import { cn } from "@/lib/utils";

interface CommandListProps {
  className?: string;
  children: React.ReactNode;
}

export function CommandList({ className, children }: CommandListProps) {
  return <div className={cn("space-y-1", className)}>{children}</div>;
}

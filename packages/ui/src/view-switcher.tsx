"use client";

import * as React from "react";
import { cn } from "./lib/utils";

export type ViewType = "list" | "grid";

export interface ViewSwitcherProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  className?: string;
}

export function ViewSwitcher({
  currentView,
  onViewChange,
  className,
}: ViewSwitcherProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-0 rounded-[1000px] bg-[#111] p-1 backdrop-blur [font-family:var(--font-general-sans,'General_Sans',sans-serif)]",
        className
      )}
      role="group"
      aria-label="View options"
    >
      <button
        type="button"
        onClick={() => onViewChange("list")}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-[1000px] border-none bg-transparent text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#111]",
          currentView === "list" && "bg-white/20"
        )}
        aria-pressed={currentView === "list"}
        aria-label="List view"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => onViewChange("grid")}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-[1000px] border-none bg-transparent text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#111]",
          currentView === "grid" && "bg-white/20"
        )}
        aria-pressed={currentView === "grid"}
        aria-label="Grid view"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
        </svg>
      </button>
    </div>
  );
}

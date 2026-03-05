"use client";

import * as React from "react";
import { GridViewIcon, ListViewIcon } from "../atoms/icons";
import { cn } from "../lib/utils";

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
      className={cn("ui-view-switcher", className)}
      role="group"
      aria-label="View options"
    >
      <button
        type="button"
        onClick={() => onViewChange("list")}
        className={cn("ui-view-button", currentView === "list" && "is-active")}
        aria-pressed={currentView === "list"}
        aria-label="List view"
      >
        <ListViewIcon />
      </button>
      <button
        type="button"
        onClick={() => onViewChange("grid")}
        className={cn("ui-view-button", currentView === "grid" && "is-active")}
        aria-pressed={currentView === "grid"}
        aria-label="Grid view"
      >
        <GridViewIcon />
      </button>
    </div>
  );
}

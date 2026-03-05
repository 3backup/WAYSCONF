"use client";

import * as React from "react";
import { cn } from "../lib/utils";

type UiIconProps = React.SVGProps<SVGSVGElement>;

export function ArrowIcon({ className, ...props }: UiIconProps) {
  return (
    <svg
      className={cn("ui-icon ui-icon--arrow", className)}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
}

export function ListViewIcon({ className, ...props }: UiIconProps) {
  return (
    <svg
      className={cn("ui-icon ui-icon--list", className)}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    </svg>
  );
}

export function GridViewIcon({ className, ...props }: UiIconProps) {
  return (
    <svg
      className={cn("ui-icon ui-icon--grid", className)}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
    </svg>
  );
}

export function SortIcon({ className, ...props }: UiIconProps) {
  return (
    <svg
      className={cn("ui-icon ui-icon--sort", className)}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      {...props}
    >
      <path d="M10 18h4v-2h-4v2zM3 8h18V6H3v2zm3 5h12v-2H6v2z" fill="currentColor" />
    </svg>
  );
}

export function TypeIcon({ className, ...props }: UiIconProps) {
  return (
    <svg
      className={cn("ui-icon ui-icon--type", className)}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FiltersIcon({ className, ...props }: UiIconProps) {
  return (
    <svg
      className={cn("ui-icon ui-icon--filters", className)}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 15v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
        fill="currentColor"
      />
    </svg>
  );
}

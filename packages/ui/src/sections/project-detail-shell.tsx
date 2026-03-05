"use client";

import * as React from "react";
import { cn } from "../lib/utils";

export interface ProjectDetailShellProps {
  header: React.ReactNode;
  meta?: React.ReactNode;
  body?: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
}

/**
 * Generic two-column project detail layout:
 * - Left: header + meta + main content
 * - Right: sticky sidebar (e.g. vote form / CTA)
 */
export function ProjectDetailShell({
  header,
  meta,
  body,
  sidebar,
  className,
}: ProjectDetailShellProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl px-4 pb-12 pt-10 lg:px-6 lg:pb-16 lg:pt-12",
        className
      )}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.2fr)]">
        <div className="space-y-8 rounded-3xl border border-white/10 bg-black/50 p-6 shadow-xl backdrop-blur-md lg:p-8">
          {header}
          {meta && <div className="space-y-6">{meta}</div>}
          {body && <div className="space-y-8">{body}</div>}
        </div>
        {sidebar && (
          <aside className="rounded-3xl border border-white/12 bg-black/70 p-6 shadow-xl backdrop-blur-md lg:sticky lg:top-28 lg:p-7">
            {sidebar}
          </aside>
        )}
      </div>
    </div>
  );
}

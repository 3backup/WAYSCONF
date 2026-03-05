import * as React from "react";
import { cn } from "../../lib/utils";

export type ChipVariant = "Base" | "Blue" | "Teal" | "Pink" | "White";

const variantClass: Record<ChipVariant, string> = {
  Base: "",
  Blue: "w-variant-bf9d861a-6abc-401a-f8dd-ef7d0e32fc0d",
  Teal: "w-variant-0668983b-415c-2b78-e524-16d3bd921d5f",
  Pink: "w-variant-ae0e680e-5b8f-84f7-a17d-f64bf817b83b",
  White: "w-variant-2668cf3d-a985-1f2a-7a18-e1e4d976010d",
};

export type ChipProps = {
  text: string;
  variant?: ChipVariant;
  className?: string;
};

export function Chip({ text, variant = "Base", className }: ChipProps) {
  return (
    <div className={cn("chip-wrapper", variantClass[variant], className)}>
      <div>{text}</div>
    </div>
  );
}

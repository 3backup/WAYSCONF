"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { cn } from "./lib/utils";

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectDropdownProps {
  options: MultiSelectOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  label?: string;
}

export function MultiSelectDropdown({
  options,
  selectedValues,
  onChange,
  placeholder = "Select options",
  className = "",
  icon,
  label,
}: MultiSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (typeof document !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  const handleOptionToggle = (optionValue: string) => {
    const newValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((v) => v !== optionValue)
      : [...selectedValues, optionValue];
    onChange(newValues);
  };

  const displayText =
    selectedValues.length === 0
      ? placeholder
      : selectedValues.length === 1
        ? options.find((o) => o.value === selectedValues[0])?.label ?? placeholder
        : `${selectedValues.length} types selected`;

  return (
    <div className={cn("relative inline-block", className)} ref={dropdownRef}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-white">
          {label}
        </label>
      )}
      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-4 rounded-[1000px] border-none bg-[#111] px-4 py-3 text-lg font-semibold uppercase leading-none tracking-[-0.36px] text-white backdrop-blur-[36px] transition-all hover:-translate-y-px hover:bg-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 [font-family:var(--font-general-sans,'General_Sans',sans-serif)]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {icon && <span className="flex shrink-0">{icon}</span>}
        <span className="flex flex-1 text-center">{displayText}</span>
      </button>
      {isOpen && (
        <div
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-[1000] overflow-hidden rounded-2xl bg-[#111] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[36px] [font-family:var(--font-general-sans,'General_Sans',sans-serif)]"
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={selectedValues.includes(option.value)}
              className={cn(
                "w-full cursor-pointer border-none bg-transparent px-6 py-3 text-left text-base font-medium leading-none tracking-[-0.32px] text-white transition-colors hover:bg-white/10",
                selectedValues.includes(option.value) && "bg-white/20 font-semibold"
              )}
              onClick={() => handleOptionToggle(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

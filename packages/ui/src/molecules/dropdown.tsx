"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select option",
  className = "",
  icon,
}: DropdownProps) {
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

  const selectedOption = options.find((option) => option.value === value);

  const handleOptionSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={cn("ui-dropdown relative inline-block", className)} ref={dropdownRef}>
      <button
        type="button"
        className="ui-dropdown__trigger flex h-12 w-full items-center justify-center gap-4 rounded-[1000px] border-none bg-[#111] px-4 py-3 text-lg font-semibold uppercase leading-none tracking-[-0.36px] text-white shadow-none backdrop-blur-[36px] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent [font-family:var(--font-general-sans,'General_Sans',sans-serif)]"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {icon && <span className="ui-dropdown__icon flex shrink-0">{icon}</span>}
        <span className="ui-dropdown__label flex flex-1 text-center">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
      </button>

      {isOpen && (
        <div
          className="ui-dropdown__menu absolute left-0 right-0 top-[calc(100%+8px)] z-[1000] overflow-hidden rounded-2xl bg-[#111] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[36px] [font-family:var(--font-general-sans,'General_Sans',sans-serif)]"
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={value === option.value}
              className={cn(
                "ui-dropdown__option w-full cursor-pointer border-none bg-transparent px-6 py-3 text-left text-base font-medium leading-none tracking-[-0.32px] text-white transition-colors hover:bg-white/10",
                value === option.value && "bg-white/20 font-semibold"
              )}
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

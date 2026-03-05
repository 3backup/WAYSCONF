"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

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
    <div className={cn("ui-multiselect", className)} ref={dropdownRef}>
      {label && <label className="ui-multiselect__label">{label}</label>}
      <button
        type="button"
        className="ui-multiselect__trigger"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {icon && <span className="ui-multiselect__icon">{icon}</span>}
        <span className="ui-multiselect__display">{displayText}</span>
      </button>

      {isOpen && (
        <div className="ui-multiselect__menu" role="listbox">
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={cn(
                  "ui-multiselect__option",
                  isSelected && "is-selected"
                )}
                onClick={() => handleOptionToggle(option.value)}
              >
                <span className="ui-multiselect__checkbox">
                  {isSelected && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M9.5 16.2 5.8 12.5 4.4 13.9 9.5 19l10-10-1.4-1.4z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </span>
                <span className="ui-multiselect__option-label">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

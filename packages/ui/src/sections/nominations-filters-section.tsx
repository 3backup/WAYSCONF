"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { FiltersIcon, SortIcon, TypeIcon } from "../atoms/icons";
import { cn } from "../lib/utils";
import { Dropdown, type DropdownOption } from "../molecules/dropdown";
import {
  MultiSelectDropdown,
  type MultiSelectOption,
} from "../molecules/multi-select-dropdown";
import { ViewSwitcher, type ViewType } from "../molecules/view-switcher";

export interface NominationsFilterCategory {
  id: string;
  name: string;
  count: number;
}

export interface NominationsFiltersSectionProps {
  categories: NominationsFilterCategory[];
  selectedCategoryId: string | null;
  onCategoryChange: (categoryId: string | null) => void;
  typeOptions: MultiSelectOption[];
  selectedTypeValues: string[];
  onTypeChange: (values: string[]) => void;
  sortOptions: DropdownOption[];
  selectedSortValue: string;
  onSortChange: (value: string) => void;
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  className?: string;
  regionLabel?: string;
}

export function NominationsFiltersSection({
  categories,
  selectedCategoryId,
  onCategoryChange,
  typeOptions,
  selectedTypeValues,
  onTypeChange,
  sortOptions,
  selectedSortValue,
  onSortChange,
  currentView,
  onViewChange,
  className,
  regionLabel = "Project filters and sorting",
}: NominationsFiltersSectionProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isOverlayOpen || typeof document === "undefined") return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOverlayOpen(false);
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isOverlayOpen]);

  const handleCategorySelect = (categoryId: string | null, shouldClose = false) => {
    onCategoryChange(categoryId);
    if (shouldClose) {
      setIsOverlayOpen(false);
    }
  };

  return (
    <>
      <div className={cn("ui-filters-section", className)} role="region" aria-label={regionLabel}>
        {(!isMobile || !isClient) && (
          <div className="ui-filters-section__desktop">
            <div className="ui-filter-chips" role="group" aria-label="Filter by category">
              <button
                type="button"
                className={cn(
                  "ui-filter-chip",
                  selectedCategoryId === null && "is-active"
                )}
                aria-pressed={selectedCategoryId === null}
                onClick={() => handleCategorySelect(null)}
              >
                <span className="ui-filter-chip__label">All</span>
              </button>
              {categories.map((category) =>
                category.count > 0 ? (
                  <button
                    key={category.id}
                    type="button"
                    className={cn(
                      "ui-filter-chip",
                      selectedCategoryId === category.id && "is-active"
                    )}
                    aria-pressed={selectedCategoryId === category.id}
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    <span className="ui-filter-chip__label">{category.name}</span>
                    <span className="ui-filter-chip__count">{category.count}</span>
                  </button>
                ) : null
              )}
            </div>

            <div className="ui-filters-controls">
              <MultiSelectDropdown
                options={typeOptions}
                selectedValues={selectedTypeValues}
                onChange={onTypeChange}
                placeholder="Types"
                className="ui-multiselect--wide"
                icon={<TypeIcon />}
              />
              <Dropdown
                options={sortOptions}
                value={selectedSortValue}
                onChange={onSortChange}
                className="ui-dropdown--medium"
                icon={<SortIcon />}
              />
              <ViewSwitcher currentView={currentView} onViewChange={onViewChange} />
            </div>
          </div>
        )}

        {isMobile && isClient && (
          <button
            type="button"
            className="ui-filters-section__mobile-trigger"
            onClick={() => setIsOverlayOpen(true)}
            aria-label="Open categories and filters"
          >
            <span className="ui-filters-section__mobile-trigger-icon">
              <FiltersIcon />
            </span>
            <span className="ui-filters-section__mobile-trigger-label">
              Categories and filters
            </span>
          </button>
        )}
      </div>

      {isOverlayOpen && isMobile && (
        <div className="ui-filters-overlay" onClick={() => setIsOverlayOpen(false)}>
          <div
            className="ui-filters-overlay__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="ui-filters-overlay__header">
              <h3>Categories and Filters</h3>
              <button
                type="button"
                className="ui-filters-overlay__close"
                onClick={() => setIsOverlayOpen(false)}
                aria-label="Close filters panel"
              >
                ×
              </button>
            </div>

            <div className="ui-filters-overlay__group">
              <h4>Categories</h4>
              <div className="ui-filter-chips ui-filter-chips--overlay">
                <button
                  type="button"
                  className={cn(
                    "ui-filter-chip",
                    selectedCategoryId === null && "is-active"
                  )}
                  onClick={() => handleCategorySelect(null, true)}
                >
                  <span className="ui-filter-chip__label">All</span>
                </button>

                {categories.map((category) =>
                  category.count > 0 ? (
                    <button
                      key={category.id}
                      type="button"
                      className={cn(
                        "ui-filter-chip",
                        selectedCategoryId === category.id && "is-active"
                      )}
                      onClick={() => handleCategorySelect(category.id, true)}
                    >
                      <span className="ui-filter-chip__label">{category.name}</span>
                      <span className="ui-filter-chip__count">{category.count}</span>
                    </button>
                  ) : null
                )}
              </div>
            </div>

            <div className="ui-filters-overlay__group">
              <h4>Filters</h4>
              <div className="ui-filters-overlay__controls">
                <MultiSelectDropdown
                  options={typeOptions}
                  selectedValues={selectedTypeValues}
                  onChange={onTypeChange}
                  placeholder="Types"
                  className="ui-multiselect--full"
                  icon={<TypeIcon />}
                />
                <Dropdown
                  options={sortOptions}
                  value={selectedSortValue}
                  onChange={onSortChange}
                  className="ui-dropdown--full"
                  icon={<SortIcon />}
                />
                <ViewSwitcher
                  currentView={currentView}
                  onViewChange={onViewChange}
                  className="ui-view-switcher--mobile"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Button,
  cn,
  ViewSwitcher,
  Dropdown,
  MultiSelectDropdown,
  type ViewType,
} from "@waysconf/ui";
import {
  FilterType,
  ProjectType,
  filterByCategory,
  filterByType,
  getCategoryList,
  type Project as SharedProject,
} from "@waysconf/shared";
import { useSearch } from "./SearchContext";
import type { ApiProject, ApiCategory } from "@/lib/api";
import { ProjectList } from "./ProjectList";
import { highlightQueryHtml, searchRankAndSort } from "@/lib/search";

type ProjectGridProps = {
  projects: ApiProject[];
  categories: ApiCategory[];
};

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const { query } = useSearch();
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>("grid");
  const [filterType, setFilterType] = useState(FilterType.RANDOM);
  const [typeFilters, setTypeFilters] = useState<ProjectType[]>([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      count: projects.filter((p) =>
        p.categories?.some((c) => c.id === cat.id)
      ).length,
    }));
  }, [categories, projects]);

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const randomKeyById = useMemo(() => {
    const keys: Record<string, number> = {};
    projects.forEach((project) => {
      keys[project.id] = Math.random();
    });
    return keys;
  }, [projects]);

  const filteredCategories = useMemo(() => {
    const allowed = ["website", "mobile app", "web & desktop app"];
    const matched = categoriesWithCount.filter((cat) =>
      allowed.includes(cat.name.toLowerCase())
    );
    return matched.length ? matched : categoriesWithCount;
  }, [categoriesWithCount]);

  const filteredByCategory = useMemo(() => {
    return filterByCategory(projects as unknown as SharedProject[], categoryFilter) as ApiProject[];
  }, [projects, categoryFilter]);

  const filteredByType = useMemo(() => {
    if (!typeFilters.length) return filteredByCategory;
    return filteredByCategory.filter((project) => {
      const rawType = String(
        (project as Record<string, unknown>).type ?? ""
      ).toLowerCase();
      const typeText = rawType.replace(/<[^>]*>/g, "").trim();
      let normalizedType = typeText;

      if (/(^|\b)non[-\s]?commercial(\b|$)/.test(typeText)) {
        normalizedType = "non commercial";
      } else if (/(^|\b)commercial(\b|$)/.test(typeText)) {
        normalizedType = "commercial";
      }

      const noCode = (project as Record<string, unknown>).noCode as string | null;
      const vibeCode = (project as Record<string, unknown>).vibeCode as string | null;

      const projectTypes = [
        normalizedType,
        noCode &&
        noCode.toLowerCase().includes("nocode") &&
        !noCode.toLowerCase().includes("no no code")
          ? "no code"
          : null,
        vibeCode &&
        vibeCode.toLowerCase().includes("vibe coding") &&
        !vibeCode.toLowerCase().includes("no vibe coding")
          ? "vibe coding"
          : null,
      ]
        .filter(Boolean)
        .map((t) => t?.toLowerCase());

      return typeFilters.some((filter) => projectTypes.includes(filter));
    });
  }, [filteredByCategory, typeFilters]);

  const filtered = useMemo(() => {
    if (query) {
      return searchRankAndSort(filteredByType, query, filterType, randomKeyById);
    }
    return filterByType(
      filteredByType as unknown as SharedProject[],
      filterType,
      randomKeyById
    ) as ApiProject[];
  }, [filteredByType, filterType, query, randomKeyById]);

  const sortOptions = [
    { value: FilterType.RANDOM.toString(), label: "Random" },
    { value: FilterType.AZ.toString(), label: "a-Z" },
    { value: FilterType.ZA.toString(), label: "Z-A" },
    { value: FilterType.BY_VOTES_DESC.toString(), label: "Votes ↓" },
    { value: FilterType.BY_VOTES_ASC.toString(), label: "Votes ↑" },
  ];

  const typeOptions = [
    { value: ProjectType.COMMERCIAL, label: "Commercial" },
    { value: ProjectType.NON_COMMERCIAL, label: "Non Commercial" },
    { value: ProjectType.VIBE_CODING, label: "Vibe Coding" },
    { value: ProjectType.NO_CODE, label: "No Code" },
  ];

  const handleSortChange = (value: string) => {
    setFilterType(parseInt(value, 10) as FilterType);
  };

  const handleTypeChange = (values: string[]) => {
    setTypeFilters(values as ProjectType[]);
  };

  return (
    <div className="nominations-content">
      <div className="filters-bar filters-sticky" role="region" aria-label="Project filters and sorting">
        {(!isMobile || !isClient) && (
          <>
            <div className="category-filters" role="group" aria-label="Filter by category">
              <Button
                type="button"
                variant={categoryFilter === null ? "primary" : "transparent"}
                size="small"
                onClick={() => setCategoryFilter(null)}
                aria-pressed={categoryFilter === null}
                className={cn(
                  "uppercase tracking-tight",
                  categoryFilter === null && "border-white bg-white/10"
                )}
              >
                All
              </Button>
              {filteredCategories.map((cat) =>
                cat.count > 0 ? (
                  <Button
                    key={cat.id}
                    type="button"
                    variant={categoryFilter === cat.id ? "primary" : "transparent"}
                    size="small"
                    onClick={() => setCategoryFilter(cat.id)}
                    aria-pressed={categoryFilter === cat.id}
                    className={cn(
                      "uppercase tracking-tight",
                      categoryFilter === cat.id && "border-white bg-white/10"
                    )}
                  >
                    {cat.name} ({cat.count})
                  </Button>
                ) : null
              )}
            </div>

            <div className="filters-row">
              <div className="type-container">
                <MultiSelectDropdown
                  options={typeOptions}
                  selectedValues={typeFilters.map((t) => t.toString())}
                  onChange={handleTypeChange}
                  placeholder="Types"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                        fill="white"
                      />
                    </svg>
                  }
                />
              </div>
              <div className="sort-container">
                <Dropdown
                  options={sortOptions}
                  value={filterType.toString()}
                  onChange={handleSortChange}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
                        fill="white"
                      />
                    </svg>
                  }
                />
              </div>
              <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
            </div>
          </>
        )}

        {isMobile && isClient && (
          <button
            type="button"
            onClick={() => setIsOverlayOpen(true)}
            className="filters-overlay-button"
            aria-label="Open filters and categories"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 15v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                fill="white"
              />
            </svg>
            <span>Categories and filters</span>
          </button>
        )}
      </div>

      {isOverlayOpen && (
        <div className="filters-overlay" onClick={() => setIsOverlayOpen(false)}>
          <div
            className="filters-overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="filters-overlay-header">
              <h3>Categories and Filters</h3>
              <button
                type="button"
                onClick={() => setIsOverlayOpen(false)}
                className="filters-overlay-close"
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            <div className="overlay-section">
              <h4>Categories</h4>
              <div className="overlay-category-filters">
                <button
                  type="button"
                  onClick={() => {
                    setCategoryFilter(null);
                    setIsOverlayOpen(false);
                  }}
                  className={cn(
                    "overlay-category-btn",
                    categoryFilter === null && "active"
                  )}
                >
                  All
                </button>
                {filteredCategories.map((cat) =>
                  cat.count > 0 ? (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setCategoryFilter(cat.id);
                        setIsOverlayOpen(false);
                      }}
                      className={cn(
                        "overlay-category-btn",
                        categoryFilter === cat.id && "active"
                      )}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ) : null
                )}
              </div>
            </div>

            <div className="overlay-section">
              <h4>Filters</h4>
              <div className="overlay-controls">
                <MultiSelectDropdown
                  options={typeOptions}
                  selectedValues={typeFilters.map((t) => t.toString())}
                  onChange={handleTypeChange}
                  placeholder="Types"
                />
                <Dropdown
                  options={sortOptions}
                  value={filterType.toString()}
                  onChange={handleSortChange}
                />
                <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
              </div>
            </div>
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="grid-empty">
          <p className="grid-empty-text">
            {query
              ? `No projects found matching "${query}"`
              : "No projects in this category."}
          </p>
        </div>
      ) : currentView === "list" ? (
        <ProjectList projects={filtered} query={query} />
      ) : (
        <section className="projects-grid-section" aria-label="Project nominations">
          <div className="projects-grid-container">
            <div className="projects-grid">
              {filtered.map((project) => {
                const votesValue = (project as Record<string, unknown>).votes;
                const votes =
                  typeof votesValue === "number" || typeof votesValue === "string"
                    ? String(votesValue)
                    : "0";
                const titleHtml = highlightQueryHtml(project.name, query);

                return (
                  <Link
                    key={project.slug}
                    href={`/project/${encodeURIComponent(project.slug)}`}
                    className="project-grid-card"
                    aria-label={`View project: ${project.name}`}
                  >
                    <div className="project-grid-image">
                      {project.thumbnailUrl ? (
                        <img
                          src={project.thumbnailUrl}
                          loading="lazy"
                          alt={`${project.name} thumbnail`}
                          className="project-grid-thumbnail"
                        />
                      ) : (
                        <div className="project-grid-thumbnail project-grid-thumbnail-placeholder" />
                      )}
                      <div className="project-grid-votes-overlay">
                        <img
                          src="/images/group-fill.svg"
                          width={20}
                          height={20}
                          alt="Votes icon"
                          className="votes-icon"
                        />
                        <span className="votes-count">{votes} votes</span>
                      </div>
                    </div>
                    <div className="project-grid-content">
                      <h3
                        className="project-grid-title"
                        dangerouslySetInnerHTML={{ __html: titleHtml }}
                      />
                      <div className="project-grid-categories">
                        {getCategoryList(project as unknown as SharedProject)}
                      </div>
                      {(project.organisation || project.clientName) && (
                        <div className="project-grid-author">
                          {project.organisation && (
                            <div className="author-info">
                              <span className="author-label">by</span>
                              <span className="author-name">
                                {project.organisation}
                              </span>
                            </div>
                          )}
                          {project.clientName && (
                            <div className="client-info">
                              <span className="client-label">for</span>
                              <span className="client-name">{project.clientName}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

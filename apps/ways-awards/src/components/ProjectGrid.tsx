"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { NominationsFiltersSection, type ViewType } from "@waysconf/ui";
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

function stableRandomFromString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0) / 4294967295;
}

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const { query } = useSearch();
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>("grid");
  const [filterType, setFilterType] = useState(FilterType.RANDOM);
  const [typeFilters, setTypeFilters] = useState<ProjectType[]>([]);

  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      count: projects.filter((p) =>
        p.categories?.some((c) => c.id === cat.id)
      ).length,
    }));
  }, [categories, projects]);

  const randomKeyById = useMemo(() => {
    const keys: Record<string, number> = {};
    projects.forEach((project) => {
      keys[project.id] = stableRandomFromString(project.id);
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
      <NominationsFiltersSection
        categories={filteredCategories}
        selectedCategoryId={categoryFilter}
        onCategoryChange={setCategoryFilter}
        typeOptions={typeOptions}
        selectedTypeValues={typeFilters.map((filter) => filter.toString())}
        onTypeChange={handleTypeChange}
        sortOptions={sortOptions}
        selectedSortValue={filterType.toString()}
        onSortChange={handleSortChange}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

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

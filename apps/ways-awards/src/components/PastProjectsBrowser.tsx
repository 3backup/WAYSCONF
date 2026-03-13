"use client";

import React from "react";
import Link from "next/link";
import { getCategoryList, type Project as SharedProject } from "@waysconf/shared";
import type { ApiProject } from "@/lib/api";

type PastProjectsBrowserProps = {
  projects: ApiProject[];
  years?: string[];
};

type ProjectWithYear = ApiProject & {
  editionYear: string;
};

function parseYear(value: unknown): string | null {
  if (value == null) return null;
  const match = String(value).match(/20\d{2}/);
  return match ? match[0] : null;
}

function resolveProjectYear(project: ApiProject): string {
  const asRecord = project as Record<string, unknown>;
  return parseYear(asRecord.edition) ?? parseYear(asRecord.year) ?? "Unknown";
}

function toVotes(value: unknown): string {
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  if (typeof value === "string" && value.trim().length > 0) return value;
  return "0";
}

export function PastProjectsBrowser({ projects, years }: PastProjectsBrowserProps) {
  const projectsWithYear = React.useMemo<ProjectWithYear[]>(
    () =>
      projects
        .map((project) => ({
          ...project,
          editionYear: resolveProjectYear(project),
        }))
        .sort((a, b) => {
          const yearA = a.editionYear === "Unknown" ? 0 : parseInt(a.editionYear, 10);
          const yearB = b.editionYear === "Unknown" ? 0 : parseInt(b.editionYear, 10);
          if (yearA !== yearB) return yearB - yearA;
          return String(a.name ?? "").localeCompare(String(b.name ?? ""));
        }),
    [projects]
  );

  const availableYears = React.useMemo(() => {
    if (years && years.length > 0) return years;
    return Array.from(
      new Set(projectsWithYear.map((project) => project.editionYear))
    ).sort((a, b) => {
      if (a === "Unknown") return 1;
      if (b === "Unknown") return -1;
      return parseInt(b, 10) - parseInt(a, 10);
    });
  }, [projectsWithYear, years]);

  const [selectedYear, setSelectedYear] = React.useState<string>("all");

  const filteredProjects = React.useMemo(() => {
    if (selectedYear === "all") return projectsWithYear;
    return projectsWithYear.filter((project) => project.editionYear === selectedYear);
  }, [projectsWithYear, selectedYear]);

  return (
    <>
      <div className="filters-row category-filters" style={{ marginBottom: "1.5rem" }}>
        <button
          type="button"
          className={`category-filter-btn${selectedYear === "all" ? " active" : ""}`}
          onClick={() => setSelectedYear("all")}
        >
          All projects
        </button>
        {availableYears.map((year) => (
          <button
            key={year}
            type="button"
            className={`category-filter-btn${selectedYear === year ? " active" : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="grid-empty">
          <p className="grid-empty-text">No projects found for this year.</p>
        </div>
      ) : (
        <section className="projects-grid-section" aria-label="Past projects">
          <div className="projects-grid-container">
            <div className="projects-grid">
              {filteredProjects.map((project) => {
                const votes = toVotes((project as Record<string, unknown>).votes);
                return (
                  <Link
                    key={`${project.slug}-${project.editionYear}`}
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
                      <h3 className="project-grid-title">{project.name}</h3>
                      <div className="project-grid-categories">
                        {getCategoryList(project as unknown as SharedProject)}
                      </div>
                      <div className="project-grid-author">
                        <div className="author-info">
                          <span className="author-label">edition</span>
                          <span className="author-name">{project.editionYear}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

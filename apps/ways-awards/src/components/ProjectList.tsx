"use client";

import Link from "next/link";
import { Button } from "@waysconf/ui";
import { sanitizeRichHtml, getCategoryList, type Project as SharedProject } from "@waysconf/shared";
import type { ApiProject } from "@/lib/api";
import { highlightQueryHtml } from "@/lib/search";

type ProjectListProps = {
  projects: ApiProject[];
  query: string;
};

function buildExcerpt(project: ApiProject) {
  const raw = project.excerpt || project.description || "";
  if (!raw) return "";
  const cleaned = sanitizeRichHtml(raw);
  return cleaned;
}

export function ProjectList({ projects, query }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="list-empty">
        <p className="list-empty-text">
          {query ? `No projects found matching "${query}"` : "No projects available"}
        </p>
      </div>
    );
  }

  return (
    <section className="projects-list" aria-label="Project nominations">
      <div className="projects-list-grid">
        {projects.map((project) => {
          const votesValue = (project as Record<string, unknown>).votes;
          const votes =
            typeof votesValue === "number" || typeof votesValue === "string"
              ? String(votesValue)
              : "0";
          const noCode = (project as Record<string, unknown>).noCode as string | null;
          const vibeCode = (project as Record<string, unknown>).vibeCode as string | null;
          const projectType = (project as Record<string, unknown>).type as string | null;
          const excerpt = buildExcerpt(project);
          const titleHtml = highlightQueryHtml(project.name, query);
          const excerptHtml = excerpt
            ? highlightQueryHtml(`${excerpt.slice(0, 180)}...`, query)
            : "";

          return (
            <Link
              key={project.slug}
              href={`/project/${encodeURIComponent(project.slug)}`}
              className="project-card"
              aria-label={`View project: ${project.name}`}
            >
              <div className="project-image">
                {project.thumbnailUrl ? (
                  <img
                    src={project.thumbnailUrl}
                    loading="lazy"
                    alt={`${project.name} thumbnail`}
                    className="project-thumbnail"
                  />
                ) : (
                  <div className="project-thumbnail project-grid-thumbnail-placeholder" />
                )}
              </div>

              <div className="project-content">
                <h3
                  className="project-title"
                  dangerouslySetInnerHTML={{ __html: titleHtml }}
                />

                <div className="project-meta">
                  <div className="project-votes">
                    <img
                      src="/images/group-fill.svg"
                      width={20}
                      height={20}
                      alt="Votes icon"
                      className="votes-icon"
                    />
                    <span className="votes-count">{votes} votes</span>
                    <span className="meta-separator">|</span>
                    <span className="project-categories">
                      {getCategoryList(project as unknown as SharedProject)}
                    </span>
                  </div>

                  <div className="project-tags">
                    {vibeCode &&
                      vibeCode.toLowerCase().includes("vibe coding") &&
                      !vibeCode.toLowerCase().includes("no vibe coding") && (
                        <span className="project-tag">Vibe Code</span>
                      )}
                    {noCode &&
                      noCode.toLowerCase().includes("nocode") &&
                      !noCode.toLowerCase().includes("no no code") && (
                        <span className="project-tag">No Code</span>
                      )}
                    {projectType && <span className="project-tag">{projectType}</span>}
                  </div>
                </div>

                {excerptHtml && (
                  <p
                    className="project-excerpt"
                    dangerouslySetInnerHTML={{ __html: excerptHtml }}
                  />
                )}

                {(project.organisation || project.clientName) && (
                  <div className="project-info">
                    {project.organisation && (
                      <div className="info-item">
                        <span className="info-label">by</span>
                        <span className="info-value">{project.organisation}</span>
                      </div>
                    )}
                    {project.clientName && (
                      <div className="info-item">
                        <span className="info-label">for</span>
                        <span className="info-value">{project.clientName}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="project-hover-overlay">
                <Button variant="primary" size="medium">
                  Read more
                </Button>
              </div>

              <div className="project-actions-mobile">
                <Button variant="primary" size="small">
                  Vote for this project
                </Button>
                <Button variant="secondary" size="small">
                  Read more
                </Button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

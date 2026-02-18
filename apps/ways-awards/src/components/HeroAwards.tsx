"use client";

import React from "react";
import { useSearch } from "./SearchContext";
import styles from "./HeroAwards.module.css";

export function HeroAwards() {
  const { query, setQuery, projectsCount } = useSearch();

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 id="hero-heading" className={styles.heroTitle}>
            Vote for the best digital projects
          </h1>

          {projectsCount > 0 && (
            <div className={styles.searchContainer}>
              <div className={styles.searchInputWrapper}>
                <svg
                  className={styles.searchIcon}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${projectsCount} projects`}
                  aria-label="Search projects"
                  className={styles.searchInput}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

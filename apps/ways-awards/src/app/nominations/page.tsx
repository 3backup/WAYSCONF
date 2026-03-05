import { getProjects, getCategories, EDITION } from "@/lib/api";
import { Layout } from "@/components/Layout";
import { HeroAwards } from "@/components/HeroAwards";
import { SearchProvider } from "@/components/SearchContext";
import { ProjectGrid } from "@/components/ProjectGrid";

export const dynamic = "force-dynamic";

export default async function NominationsPage() {
  let projects: Awaited<ReturnType<typeof getProjects>> = [];
  let categories: Awaited<ReturnType<typeof getCategories>> = [];
  let error = false;

  try {
    [projects, categories] = await Promise.all([
      getProjects(),
      getCategories(),
    ]);
  } catch {
    error = true;
  }

  if (error) {
    return (
      <Layout>
        <SearchProvider projectsCount={0}>
          <HeroAwards />
          <section className="error-section" aria-labelledby="error-heading">
            <div className="error-container">
              <h2 id="error-heading">WaysAwards {EDITION}</h2>
              <p className="error-message">
                We&apos;re having trouble loading projects. Please try again
                later or contact{" "}
                <a href="mailto:awards@waysconf.com" className="error-link">
                  awards@waysconf.com
                </a>
                .
              </p>
            </div>
          </section>
        </SearchProvider>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchProvider projectsCount={projects.length}>
        <HeroAwards />
        <section id="nominations" className="nominations-section">
          <div className="nominations-container">
            <ProjectGrid projects={projects} categories={categories} />
          </div>
        </section>
      </SearchProvider>
    </Layout>
  );
}

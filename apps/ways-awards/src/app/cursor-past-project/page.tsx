import { getProjectsByEdition } from "@/lib/api";
import { Layout } from "@/components/Layout";
import { PastProjectsBrowser } from "@/components/PastProjectsBrowser";

export const dynamic = "force-dynamic";

export default async function PastProjectsPage() {
  const candidateEditions = [2025, 2024, 2023, 2022];

  const projectsByEdition = await Promise.all(
    candidateEditions.map(async (year) => {
      try {
        const projects = await getProjectsByEdition(year);
        return { year, projects };
      } catch {
        return { year, projects: [] };
      }
    })
  );

  const projects = projectsByEdition.flatMap(({ year, projects }) =>
    projects.map((project) => ({
      ...project,
      edition:
        (project as Record<string, unknown>).edition ??
        (project as Record<string, unknown>).year ??
        year,
    }))
  );

  return (
    <Layout>
      <section className="nominations-section">
        <div className="nominations-container">
          <h1 className="ways25-heading2" style={{ marginBottom: "1rem" }}>
            Previous Projects
          </h1>
          <p className="is--paragraph" style={{ marginBottom: "2rem" }}>
            Explore projects from past WaysAwards editions.
          </p>
          <PastProjectsBrowser
            projects={projects}
            years={candidateEditions.map(String)}
          />
        </div>
      </section>
    </Layout>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { sanitizeRichHtml } from "@waysconf/shared";
import {
  getProjectBySlug,
  verifyVote,
  EDITION,
  type ApiProject,
} from "@/lib/api";
import { Layout } from "@/components/Layout";
import { ProjectImageGrid } from "@/components/ProjectImageGrid";
import { ProjectVoteForm } from "./ProjectVoteForm";

function getProjectField(
  project: Record<string, unknown>,
  keys: string[]
): string | null {
  for (const key of keys) {
    const value = project[key];
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed.length > 0) return trimmed;
    } else if (typeof value === "number") {
      return String(value);
    }
  }
  return null;
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ verifyCode?: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found - WaysAwards" };
  return {
    title: `${project.name} - WaysAwards ${EDITION}`,
    description:
      project.excerpt?.slice(0, 160) ??
      `Vote for ${project.name} in WaysAwards ${EDITION}.`,
  };
}

export default async function ProjectPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { verifyCode } = await searchParams;

  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  let verified = false;
  if (verifyCode && verifyCode !== "test" && verifyCode !== "bypass") {
    verified = await verifyVote(verifyCode, project.id);
  } else if (verifyCode) {
    verified = true;
  }

  const categoriesLabel = project.categories?.length
    ? project.categories.map((c) => c.name).join(", ")
    : null;

  const votesValue = (project as Record<string, unknown>).votes;
  const votes =
    typeof votesValue === "number" || typeof votesValue === "string"
      ? String(votesValue)
      : null;

  const noCode = getProjectField(project as Record<string, unknown>, [
    "noCode",
    "no_code",
  ]);
  const vibeCode = getProjectField(project as Record<string, unknown>, [
    "vibeCode",
    "vibe_code",
  ]);
  const projectType = getProjectField(project as Record<string, unknown>, [
    "type",
    "projectType",
    "project_type",
  ]);

  const services = getProjectField(project as Record<string, unknown>, [
    "services",
  ]);
  const clientTimePeriod = getProjectField(project as Record<string, unknown>, [
    "clientTimePeriod",
    "client_time_period",
  ]);
  const techStack = getProjectField(project as Record<string, unknown>, [
    "toolsAndFramework",
    "tools_and_framework",
    "techStack",
    "tech_stack",
  ]);
  const team = getProjectField(project as Record<string, unknown>, ["team"]);
  const demoLink = getProjectField(project as Record<string, unknown>, [
    "demoLink",
    "demo_link",
  ]);
  const caseStudyLink =
    getProjectField(project as Record<string, unknown>, [
      "casestudyLink",
      "caseStudyLink",
      "case_study_link",
      "linkToCaseStudy",
      "link_to_case_study",
      "linkToCaseStudyPlain",
      "link_to_case_study_plain",
    ]) ?? project.linkToCaseStudy ?? null;
  const projectOutcomes = getProjectField(project as Record<string, unknown>, [
    "projectOutcomes",
    "project_outcomes",
    "projectOutcome",
    "project_outcome",
  ]);
  const targetAudience = getProjectField(project as Record<string, unknown>, [
    "targetAudience",
    "target_audience",
  ]);
  const whyYou = getProjectField(project as Record<string, unknown>, [
    "whyYou",
    "why_you",
    "whyUs",
    "why_us",
  ]);
  const linkRich = getProjectField(project as Record<string, unknown>, [
    "linkRich",
    "link_rich",
    "linkRichText",
    "link_rich_text",
    "linkPrimaryRichText",
    "link_primary_rich_text",
  ]);

  const voteBox = (
    <div className="voting-form-container">
      <div className="voting-form w-form">
        <div className="inner-voting">
          {verified ? (
            <div className="contact-form-success w-form-done">
              <div>Your vote has been confirmed. Thank you!</div>
            </div>
          ) : (
            <ProjectVoteForm projectId={project.id} projectName={project.name} />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="project-page">
        <div className="project-page-container">
          <div className="project-page-content">
            <div className="project-info-column">
              <div className="project-header">
                <Link href="/" className="go-back-button">
                  <div className="blogpost-content-back_embed w-embed">
                    <img
                      src="/images/back element.svg"
                      alt="Go back"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="is--text-medium">Go back</div>
                </Link>

                <h1 className="is--h1 is-awards-project">{project.name}</h1>

                <div className="voting-projects-numberofbotes">
                  <img
                    width="20"
                    height="20"
                    alt="Votes icon"
                    src="/images/group-fill.svg"
                  />
                  {votes && <p className="is--paragraph">{votes} votes</p>}
                  {votes && <p className="is--paragraph">|</p>}
                  <p className="is--paragraph">{categoriesLabel || "-"}</p>
                  {noCode &&
                    noCode !== "No" &&
                    noCode !== "No No Code" && (
                      <div className="is--paragraph project-tag">No-Code</div>
                    )}
                  {vibeCode &&
                    vibeCode !== "No" &&
                    vibeCode !== "No Vibe Coding" && (
                      <div className="is--paragraph project-tag">Vibe Code</div>
                    )}
                  {projectType && (
                    <div className="is--paragraph project-tag">{projectType}</div>
                  )}
                </div>
              </div>

              <div className="voting-box--mobile">{voteBox}</div>

              <section className="image-grid-section-full-width">
                <ProjectImageGrid project={project} />
              </section>

              <div className="project-details-section project-details-content">
                <h4>{project.name}</h4>
                {project.excerpt ? (
                  <div
                    className="is--paragraph-big is--text-color-silver"
                    dangerouslySetInnerHTML={{ __html: project.excerpt }}
                  />
                ) : project.description ? (
                  <div className="is--paragraph-big is--text-color-silver">
                    {project.description}
                  </div>
                ) : null}

                <h4>PROJECT DETAILS</h4>
                <div className="awards-project-details">
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">
                      Category
                    </p>
                    <div>{categoriesLabel || "-"}</div>
                  </div>
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">
                      Customer
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: project.clientName || "-",
                      }}
                    />
                  </div>
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">
                      Submitted by
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: project.organisation || "-",
                      }}
                    />
                  </div>
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">
                      Timeframe
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: clientTimePeriod || "-",
                      }}
                    />
                  </div>
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">
                      Tech Stack
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: techStack || "-",
                      }}
                    />
                  </div>
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">
                      Services
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: services || "-",
                      }}
                    />
                  </div>
                </div>

                <div className="additional-project-details">
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">Demo Link</p>
                    <div className="is--paragraph-big is--text-color-silver">
                      {demoLink ? (
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5
                            dangerouslySetInnerHTML={{ __html: demoLink || "-" }}
                          />
                        </a>
                      ) : (
                        "-"
                      )}
                    </div>
                  </div>
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">Team</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: team || "-",
                      }}
                    />
                  </div>
                  <div className="voting-info-wrapper">
                    <p className="is--paragraph is--text-color-silver">
                      Link to case study
                    </p>
                    <div className="is--paragraph-big is--text-color-silver">
                      {caseStudyLink ? (
                        <a
                          href={caseStudyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5
                            dangerouslySetInnerHTML={{
                              __html: caseStudyLink || "-",
                            }}
                          />
                        </a>
                      ) : (
                        "-"
                      )}
                    </div>
                  </div>
                </div>

                <h4>DESCRIPTION</h4>
                <div
                  className="is--paragraph-big is--text-color-silver"
                  dangerouslySetInnerHTML={{
                    __html: project.description
                      ? sanitizeRichHtml(project.description)
                      : "-",
                  }}
                />

                {project.caseStudy && (
                  <div
                    className="is--paragraph-big is--text-color-silver"
                    dangerouslySetInnerHTML={{ __html: project.caseStudy }}
                  />
                )}

                <h4>PROJECT OUTCOMES</h4>
                <div
                  className="is--paragraph-big is--text-color-silver"
                  dangerouslySetInnerHTML={{
                    __html: projectOutcomes || "-",
                  }}
                />

                <h4>TARGET AUDIENCE</h4>
                <div
                  className="is--paragraph-big is--text-color-silver"
                  dangerouslySetInnerHTML={{
                    __html: targetAudience || "-",
                  }}
                />

                <h4>WHY US</h4>
                <div
                  className="is--paragraph-big is--text-color-silver"
                  dangerouslySetInnerHTML={{
                    __html: whyYou || "-",
                  }}
                />

                {linkRich && (
                  <div
                    className="is--paragraph-big is--text-color-silver"
                    dangerouslySetInnerHTML={{ __html: linkRich }}
                  />
                )}
              </div>
            </div>

            <div className="voting-sidebar">{voteBox}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

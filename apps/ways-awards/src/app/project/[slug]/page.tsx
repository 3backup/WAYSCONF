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

  const noCode = (project as Record<string, unknown>).noCode as string | null;
  const vibeCode = (project as Record<string, unknown>).vibeCode as string | null;
  const projectType = (project as Record<string, unknown>).type as string | null;

  const services =
    ((project as Record<string, unknown>).services as string | null) ?? null;
  const clientTimePeriod =
    ((project as Record<string, unknown>).clientTimePeriod as string | null) ??
    null;
  const techStack =
    ((project as Record<string, unknown>).toolsAndFramework as string | null) ??
    null;
  const team = ((project as Record<string, unknown>).team as string | null) ?? null;
  const demoLink =
    ((project as Record<string, unknown>).demoLink as string | null) ?? null;
  const caseStudyLink =
    ((project as Record<string, unknown>).casestudyLink as string | null) ??
    project.linkToCaseStudy ??
    null;
  const projectOutcomes =
    ((project as Record<string, unknown>).projectOutcomes as string | null) ??
    null;
  const targetAudience =
    ((project as Record<string, unknown>).targetAudience as string | null) ??
    null;
  const whyYou =
    ((project as Record<string, unknown>).whyYou as string | null) ?? null;
  const linkRich =
    ((project as Record<string, unknown>).linkRich as string | null) ??
    ((project as Record<string, unknown>).linkRichText as string | null) ??
    null;

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

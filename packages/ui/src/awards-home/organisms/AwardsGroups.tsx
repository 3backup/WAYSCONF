import * as React from "react";
import { Chip, type ChipVariant } from "../atoms/Chip";

const defaultGroups = [
  {
    title: "Websites",
    contentId: "w-node-_0305d8a9-61bd-241b-e252-72961eb9410b-1eb940f5",
    headingId: "w-node-_0305d8a9-61bd-241b-e252-72961eb9410c-1eb940f5",
    description: [
      "Submit your outstanding website, whether it's a complete new build or just a specific functionality or feature, for a chance to be recognized as the best in its class.",
      "Showcasing exceptional design, user experience, and functionality, we are seeking websites that push the boundaries of digital excellence.",
    ],
    chips: [
      "BUSINESS WEBSITES",
      "PERSONAL WEBSITES",
      "PORTFOLIO WEBSITES",
      "E-COMMERCE WEBSITES",
      "INTERACTIVE ELEMENTS",
      "INNOVATIVE USER INTERFACES",
      "SEAMLESS USER JOURNEYS",
      "EDUCATIONAL WEBSITES",
      "INTEGRATION WITH THIRD-PARTY",
      "UX Writing",
      "LLM & AI",
    ],
    variant: "Blue" as ChipVariant,
    iconSrc:
      "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c0dcdf85524fd281fad4_brush-fill.svg",
    chipsContainerId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94113-1eb940f5",
    chipsListId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94119-1eb940f5",
  },
  {
    title: "Mobile apps",
    contentId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94131-1eb940f5",
    headingId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94132-1eb940f5",
    description: [
      "Submit your exceptional mobile app, whether it's a groundbreaking new release or a specific feature or module, for a chance to be honored as the top mobile app of the year. ",
      "We are seeking mobile apps that combine seamless user experiences, innovative features, and outstanding performance, setting new standards in the digital landscape.",
    ],
    chips: [
      "MOBILE APPS",
      "MOBILE APP DESIGN GUIDELINES",
      "INTEGRATION WITH APIS AND SERVICES",
      "UNIQUE FEATURES OR MODULES",
      "OFFLINE CAPABILITIES",
      "PWA",
      "ACCESSIBILITY CONSIDERATIONS",
      "INTUITIVE USER INTERFACES",
    ],
    variant: "Teal" as ChipVariant,
    iconSrc:
      "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c0dcdf85524fd281fad4_brush-fill.svg",
    chipsContainerId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94139-1eb940f5",
    chipsListId: "w-node-_0305d8a9-61bd-241b-e252-72961eb9413f-1eb940f5",
  },
  {
    title: "Desktop & web apps",
    contentId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94151-1eb940f5",
    headingId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94152-1eb940f5",
    description: [
      "Submit your outstanding desktop or web app, whether it's a comprehensive CRM system, a robust ERP solution, or a powerful dashboard, for a chance to be recognized as the top desktop and web app of the year.",
      "We are seeking applications that deliver seamless user experiences, advanced functionalities, and exceptional performance, revolutionizing the way businesses operate in the digital realm.",
    ],
    chips: [
      "DASHBOARDS",
      "ERP SOLUTIONS",
      "CRM SYSTEMS",
      "EFFICIENT DATA MANAGEMENT",
      "FINTECH APP",
      "HR SYSTEM",
      "SUPPLY MANAGEMENT SYSTEMS",
      "CUSTOMER SUPPORT",
      "CMS",
      "LMS",
      "PROJECT MANAGEMENT TOOLS",
      "MARKETING AUTOMATION",
    ],
    variant: "Pink" as ChipVariant,
    iconSrc:
      "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6849c0dcdf85524fd281fad4_brush-fill.svg",
    chipsContainerId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94159-1eb940f5",
    chipsListId: "w-node-_0305d8a9-61bd-241b-e252-72961eb9415f-1eb940f5",
  },
  {
    title: "Public choice",
    eyebrow: "Special award",
    contentId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94179-1eb940f5",
    headingId: "w-node-_0305d8a9-61bd-241b-e252-72961eb9417c-1eb940f5",
    description: [
      "Submit your outstanding desktop or web app, whether it's a comprehensive CRM system, a robust ERP solution,or a powerful dashboard, for a chance to be recognized as the top desktop and web app of the year.",
    ],
  },
  {
    title: "No-code and low-code solutions in all categories",
    contentId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94181-1eb940f5",
    headingId: "w-node-_0305d8a9-61bd-241b-e252-72961eb94182-1eb940f5",
    description: [
      "This year, we are excited to introduce a special award recognizing exceptional no-code solutions across all categories. Submit your outstanding projects for a chance to be honored as leaders in the no-code revolution.",
    ],
    className: "nocode",
  },
];

export type AwardsGroupsProps = {
  groups?: typeof defaultGroups;
};

export function AwardsGroups({ groups = defaultGroups }: AwardsGroupsProps) {
  return (
    <section className="section-awards24-programm is-awards">
      <div className="awards-groups">
        {groups.map((group) => (
          <div
            key={group.title}
            className={`awards-home-goup w-layout-grid${group.className ? ` ${group.className}` : ""}`}
          >
            <div
              className={`awards-home-goup_content${group.className ? ` ${group.className}` : ""}`}
              id={group.contentId}
            >
              {group.eyebrow ? (
                <h6 className="text-style-uppercase">{group.eyebrow}</h6>
              ) : null}
              <h2 id={group.headingId}>{group.title}</h2>
              <div className="is--paragraph is--text-color-silver">
                {group.description.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < group.description.length - 1 ? (
                      <>
                        <br />
                        <br />
                      </>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {group.chips && group.chips.length ? (
              <div className="chip-wrapper-right" id={group.chipsContainerId}>
                <div className="awards-group-headline">
                  <img
                    className="icon-embed-xsmall"
                    src={group.iconSrc}
                    alt=""
                    loading="lazy"
                  />
                  <h6 className="text-style-uppercase">what can be sumbitted?</h6>
                </div>
                <div className="spacer-small" />
                <div
                  className="chip-wrapper-right is-chips is-awards24"
                  id={group.chipsListId}
                >
                  {group.chips.map((chip) => (
                    <Chip key={chip} variant={group.variant ?? "Base"} text={chip} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

import * as React from "react";
import { InfoCard } from "../molecules/InfoCard";

const calendarSvg = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M2%2011H22V20C22%2020.5523%2021.5523%2021%2021%2021H3C2.44772%2021%202%2020.5523%202%2020V11ZM17%203H21C21.5523%203%2022%203.44772%2022%204V9H2V4C2%203.44772%202.44772%203%203%203H7V1H9V3H15V1H17V3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const scheduleItems = [
  {
    label: "16.07 - 16.08",
    title: "Project submissions",
    description:
      "This is your time! The Call for Entries for the WaysConf Awards will be open on July 16th. You can count on us and our consultation related to the best possible completion of the application form. ;)",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb9418b-1eb940f5",
  },
  {
    label: "19.08 - 11.09",
    title: "Jury's deliberations",
    description:
      "It's time for the intense deliberations of our Jury, which will evaluate the submissions. This evaluation will be independent and anonymous, which means that our experts will not consult with each other about their evaluations. The proper conduct of this stage will be supervised by a voting coordinator, whose role is to ensure that the Jury's voting remains independent and anonymous.",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb94195-1eb940f5",
  },
  {
    label: "26.08 - 11.09",
    title: "Audience voting",
    description:
      "Among the submissions, you'll have the opportunity to vote on the best projects in the following categories: Website, Webapp, Mobile App.Additionally, the best no-code projects will be awarded a separate prize.",
    className: "teal",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb9419f-1eb940f5",
  },
  {
    label: "17.09.2025",
    title: "WaysConf Official Gala",
    description:
      "The grand finale and awarding of statuettes in all categories will happen right after the first day of th Ways Conf at Expo Kraków. Admission is free, so bring your friends!",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb941a9-1eb940f5",
  },
];

export function AwardsSchedule() {
  return (
    <section className="section-awards25-schedule">
      <div className="home25-session-content">
        <h2 className="text-align-center">Awards schedule</h2>
        <div className="home25-session-content_grid w-layout-grid">
          {scheduleItems.map((item) => (
            <InfoCard
              key={item.title}
              id={item.id}
              iconHtml={calendarSvg}
              label={item.label}
              title={item.title}
              description={item.description}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

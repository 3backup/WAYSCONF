import * as React from "react";
import { InfoCard } from "../molecules/InfoCard";

const iconGathering = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M18.1227%208.8438C19.0155%209.27862%2020.0267%209.40735%2021%209.2101V19.2001C21%2019.4388%2020.9052%2019.6677%2020.7364%2019.8365C20.5676%2020.0053%2020.3387%2020.1001%2020.1%2020.1001H3.9C3.66131%2020.1001%203.43239%2020.0053%203.2636%2019.8365C3.09482%2019.6677%203%2019.4388%203%2019.2001V4.8001C3%204.5614%203.09482%204.33248%203.2636%204.1637C3.43239%203.99492%203.66131%203.9001%203.9%203.9001H15.69C15.6306%204.1908%2015.6%204.4923%2015.6%204.8001C15.5985%205.86934%2015.9793%206.9039%2016.6737%207.717L12.0549%2011.7148L6.2823%206.8143L5.1177%208.1859L12.0657%2014.0854L18.1227%208.8438ZM20.1%207.5001C19.7454%207.5001%2019.3943%207.43026%2019.0668%207.29457C18.7392%207.15888%2018.4415%206.96%2018.1908%206.70929C17.9401%206.45857%2017.7412%206.16092%2017.6055%205.83334C17.4698%205.50576%2017.4%205.15467%2017.4%204.8001C17.4%204.44553%2017.4698%204.09443%2017.6055%203.76685C17.7412%203.43927%2017.9401%203.14163%2018.1908%202.89091C18.4415%202.64019%2018.7392%202.44131%2019.0668%202.30562C19.3943%202.16994%2019.7454%202.1001%2020.1%202.1001C20.8161%202.1001%2021.5028%202.38456%2022.0092%202.89091C22.5155%203.39726%2022.8%204.08401%2022.8%204.8001C22.8%205.51618%2022.5155%206.20294%2022.0092%206.70929C21.5028%207.21563%2020.8161%207.5001%2020.1%207.5001Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const iconEvaluation = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M10.2%2014.8548L18.4728%206.58105L19.7463%207.85365L10.2%2017.4L4.47241%2011.6724L5.74501%2010.3998L10.2%2014.8548Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const iconJury = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M12%2013.8001V21.0001H4.80005C4.80005%2019.0905%205.55862%2017.2592%206.90888%2015.9089C8.25914%2014.5587%2010.0905%2013.8001%2012%2013.8001ZM17.4%2020.5501L14.7549%2021.9406L15.2598%2018.9958L13.1205%2016.9096L16.0779%2016.4794L17.4%2013.8001L18.723%2016.4794L21.6795%2016.9096L19.5402%2018.9958L20.0442%2021.9406L17.4%2020.5501ZM12%2012.9001C9.01655%2012.9001%206.60005%2010.4836%206.60005%207.5001C6.60005%204.5166%209.01655%202.1001%2012%202.1001C14.9835%202.1001%2017.4%204.5166%2017.4%207.5001C17.4%2010.4836%2014.9835%2012.9001%2012%2012.9001Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const iconPublic = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M19.1999%2021H4.7999C4.56121%2021%204.33229%2020.9052%204.16351%2020.7364C3.99472%2020.5676%203.8999%2020.3387%203.8999%2020.1V3.9C3.8999%203.66131%203.99472%203.43239%204.16351%203.2636C4.33229%203.09482%204.56121%203%204.7999%203H19.1999C19.4386%203%2019.6675%203.09482%2019.8363%203.2636C20.0051%203.43239%2020.0999%203.66131%2020.0999%203.9V20.1C20.0999%2020.3387%2020.0051%2020.5676%2019.8363%2020.7364C19.6675%2020.9052%2019.4386%2021%2019.1999%2021ZM8.3999%207.5V9.3H15.5999V7.5H8.3999ZM8.3999%2011.1V12.9H15.5999V11.1H8.3999ZM8.3999%2014.7V16.5H15.5999V14.7H8.3999Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const processItems = [
  {
    title: "Gathering Submissions",
    description:
      "We collect project submissions from talented digital product creators across various categories. This initial step gathers a diverse range of innovative projects for consideration. Submissions are open to agencies, freelancers, and companies, ensuring a wide variety of high-quality entries.",
    icon: iconGathering,
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb941ba-1eb940f5",
  },
  {
    title: "Evaluation and selection",
    description:
      "Our expert team carefully evaluates each submission, considering criteria such as creativity, innovation, functionality, and impact. The most promising projects are selected to advance to the next stage.",
    icon: iconEvaluation,
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb941c1-1eb940f5",
  },
  {
    title: "Jury assessment and top picks",
    description:
      "Esteemed jury members, with extensive industry experience, independently review the selected projects. Each juror chooses their top five projects in each category based on their expertise and judgment.",
    icon: iconJury,
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb941c8-1eb940f5",
  },
  {
    title: "Public voting and final rankings",
    description:
      "Jury votes are tallied, assigning points based on rank: five points for first place, four for second, and so on. We calculate the average score for each project. The highest-scoring projects in each category are declared winners.",
    icon: iconPublic,
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb941cf-1eb940f5",
  },
];

export function AwardsProcess() {
  return (
    <section className="section_home25-session blue">
      <div className="home25-session-border" />
      <div className="home25-session-content">
        <div className="max-width _100ch">
          <h2 className="ways25-heading2">The process of selectingthe best projects</h2>
        </div>
        <div className="home25-session-tabs_grid w-layout-grid">
          {processItems.map((item) => (
            <InfoCard
              key={item.title}
              id={item.id}
              iconHtml={item.icon}
              title={item.title}
              description={item.description}
              baseClassName="home25-session-tabs_grid-item-2"
            />
          ))}
        </div>
      </div>
      <div className="home25-session-border bottom" />
    </section>
  );
}

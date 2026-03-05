import * as React from "react";
import { InfoCard } from "../molecules/InfoCard";

const iconBlueOne = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M11.1%2017.4001H8.34689C8.07959%2016.2544%206.87359%2015.3175%206.37859%2014.7001C5.53096%2013.641%204.99974%2012.3641%204.84613%2011.0163C4.69251%209.66859%204.92275%208.30486%205.51032%207.08224C6.09788%205.85963%207.01888%204.82786%208.16721%204.1058C9.31554%203.38374%2010.6445%203.00076%2012.001%203.00098C13.3574%203.00119%2014.6863%203.3846%2015.8344%204.10703C16.9825%204.82946%2017.9031%205.86152%2018.4903%207.08432C19.0775%208.30713%2019.3073%209.67093%2019.1532%2011.0186C18.9992%2012.3663%2018.4676%2013.6431%2017.6196%2014.7019C17.1246%2015.3184%2015.9204%2016.2553%2015.6531%2017.4001H12.9V12.9001H11.1V17.4001ZM15.6%2019.2001V20.1001C15.6%2020.5775%2015.4103%2021.0353%2015.0728%2021.3729C14.7352%2021.7104%2014.2774%2021.9001%2013.8%2021.9001H10.2C9.7226%2021.9001%209.26476%2021.7104%208.9272%2021.3729C8.58963%2021.0353%208.39999%2020.5775%208.39999%2020.1001V19.2001H15.6Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const iconTealOne = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M5.7%203.8999V18.2999H20.1V20.0999H3.9V3.8999H5.7ZM19.146%206.5459L21.054%208.4539L15.6%2013.9097L12.9%2011.2097L9.354%2014.7557L7.446%2012.8459L12.9%207.3919L15.6%2010.0919L19.146%206.5459V6.5459Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const iconPinkOne = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M19.2%2021H7.04999C6.21456%2021%205.41335%2020.6681%204.82261%2020.0774C4.23187%2019.4866%203.89999%2018.6854%203.89999%2017.85V5.7C3.89999%204.98392%204.18446%204.29716%204.69081%203.79081C5.19715%203.28446%205.88391%203%206.59999%203H19.2C19.4387%203%2019.6676%203.09482%2019.8364%203.2636C20.0052%203.43239%2020.1%203.66131%2020.1%203.9V20.1C20.1%2020.3387%2020.0052%2020.5676%2019.8364%2020.7364C19.6676%2020.9052%2019.4387%2021%2019.2%2021ZM18.3%2019.2V16.5H7.04999C6.69195%2016.5%206.34857%2016.6422%206.0954%2016.8954C5.84223%2017.1486%205.69999%2017.492%205.69999%2017.85C5.69999%2018.208%205.84223%2018.5514%206.0954%2018.8046C6.34857%2019.0578%206.69195%2019.2%207.04999%2019.2H18.3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const iconBlueTwo = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M12%202.09961C12.591%202.09961%2013.1761%202.21601%2013.7221%202.44215C14.2681%202.6683%2014.7641%202.99977%2015.182%203.41763C15.5999%203.83549%2015.9313%204.33157%2016.1575%204.87753C16.3836%205.4235%2016.5%206.00866%2016.5%206.59961V10.1996C16.5%2011.3931%2016.0259%2012.5377%2015.182%2013.3816C14.3381%2014.2255%2013.1935%2014.6996%2012%2014.6996C10.8065%2014.6996%209.66196%2014.2255%208.81804%2013.3816C7.97413%2012.5377%207.50002%2011.3931%207.50002%2010.1996V6.59961C7.50002%205.40614%207.97413%204.26154%208.81804%203.41763C9.66196%202.57372%2010.8065%202.09961%2012%202.09961V2.09961ZM3.94952%2011.0996H5.76302C5.98109%2012.5979%206.73131%2013.9676%207.87643%2014.9581C9.02156%2015.9487%2010.485%2016.4938%2011.9991%2016.4938C13.5132%2016.4938%2014.9767%2015.9487%2016.1218%2014.9581C17.2669%2013.9676%2018.0172%2012.5979%2018.2352%2011.0996H20.0496C19.845%2012.9255%2019.026%2014.6276%2017.7269%2015.9268C16.4278%2017.226%2014.7258%2018.0452%2012.9%2018.2501V21.8996H11.1V18.2501C9.27405%2018.0454%207.57183%2017.2263%206.27258%2015.9271C4.97333%2014.6278%204.1542%2012.9256%203.94952%2011.0996V11.0996Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const iconTealTwo = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M9%206C9%206.82843%208.32843%207.5%207.5%207.5C6.67157%207.5%206%206.82843%206%206C6%205.17157%206.67157%204.5%207.5%204.5C8.32843%204.5%209%205.17157%209%206ZM6.75%2015V19.5H5.25V10.5C5.25%209.25736%206.25736%208.25%207.5%208.25C8.11544%208.25%208.67317%208.49709%209.07939%208.8975L10.8602%2010.5793L12.5948%208.84467L13.6555%209.90533L10.8901%2012.6707L9.75%2011.594V19.5H8.25V15H6.75ZM10.5%206.75H17.25V13.5H10.5V15H13.7741L15.8917%2019.5H17.5495L15.4318%2015H18C18.4142%2015%2018.75%2014.6642%2018.75%2014.25V6C18.75%205.58579%2018.4142%205.25%2018%205.25H10.5V6.75Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const iconPinkTwo = decodeURIComponent(
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M3.00001%209.3001H5.70001V20.1001H3.00001C2.76131%2020.1001%202.53239%2020.0053%202.36361%2019.8365C2.19483%2019.6677%202.10001%2019.4388%202.10001%2019.2001V10.2001C2.10001%209.96141%202.19483%209.73249%202.36361%209.5637C2.53239%209.39492%202.76131%209.3001%203.00001%209.3001V9.3001ZM7.76371%208.1364L13.5237%202.3764C13.6003%202.29962%2013.702%202.25307%2013.8101%202.2453C13.9182%202.23753%2014.0256%202.26906%2014.1123%202.3341L14.88%202.9101C15.0932%203.07016%2015.2543%203.28977%2015.3428%203.54123C15.4314%203.79269%2015.4435%204.06475%2015.3777%204.3231L14.34%208.4001H20.1C20.5774%208.4001%2021.0352%208.58974%2021.3728%208.92731C21.7104%209.26487%2021.9%209.72271%2021.9%2010.2001V12.0937C21.9002%2012.3289%2021.8544%2012.5619%2021.765%2012.7795L18.9795%2019.543C18.9116%2019.7079%2018.7961%2019.8489%2018.6479%2019.9481C18.4997%2020.0473%2018.3254%2020.1002%2018.147%2020.1001H8.40001C8.16131%2020.1001%207.93239%2020.0053%207.76361%2019.8365C7.59483%2019.6677%207.50001%2019.4388%207.50001%2019.2001V8.7727C7.50006%208.53402%207.59491%208.30514%207.76371%208.1364Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
);

const whyItems = [
  {
    title: "We promote good solutions and models",
    description:
      "Through our conferences, new and innovative ideas have the chance to gain wider recognition. Every participant can find inspiration and practical tools to implement in their work.",
    icon: iconBlueOne,
    colorClass: "text-color-blue",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb941fa-1eb940f5",
  },
  {
    title: "Together we observe and create trends",
    description:
      "Our events are a perfect opportunity to follow the latest trends and share insights. Participants have the chance to shape the future of their industry together.",
    icon: iconTealOne,
    colorClass: "text-color-teal",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb94201-1eb940f5",
  },
  {
    title: "We show we knowthe industry",
    description:
      "During our events, experts and professionals share their knowledge, confirming their position as industry leaders. It's also an opportunity to demonstrate expertise to a wide audience.",
    icon: iconPinkOne,
    colorClass: "text-color-pink",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb94208-1eb940f5",
  },
  {
    title: "We talk about our work in front of a wider audience",
    description:
      "Our conferences provide the opportunity to showcase personal achievements to a large audience, enhancing prestige and recognition. It's a chance to gain new contacts and partnerships.",
    icon: iconBlueTwo,
    colorClass: "text-color-blue",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb9420f-1eb940f5",
  },
  {
    title: "We talk about submitted projects at conferences",
    description:
      "Every participant can present their projects, allowing for evaluation and feedback from other specialists. It's also an opportunity to promote personal initiatives and find support for their implementation.",
    icon: iconTealTwo,
    colorClass: "text-color-teal",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb94216-1eb940f5",
  },
  {
    title: "Let's just say to each other \"you did a great job\" :)!",
    description:
      "Our events are also a moment to appreciate each other and build a positive atmosphere of cooperation. This way, everyone feels part of a larger community.",
    icon: iconPinkTwo,
    colorClass: "text-color-pink",
    id: "w-node-_0305d8a9-61bd-241b-e252-72961eb9421d-1eb940f5",
  },
];

export function AwardsWhy() {
  return (
    <section className="section-awards25-schedule">
      <div className="home25-session-content">
        <h2 className="ways25-heading1">Why is it worth it?</h2>
        <div className="awards-home-why_grid w-layout-grid">
          {whyItems.map((item) => (
            <InfoCard
              key={item.title}
              id={item.id}
              iconHtml={item.icon}
              iconClassName={item.colorClass}
              title={item.title}
              description={item.description}
              titleClassName="text-size-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

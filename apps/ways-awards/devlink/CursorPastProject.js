"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { PageGlobals } from "./PageGlobals";
import { Footer24 } from "./Footer24";
import * as _utils from "./utils";
import _styles from "./CursorPastProject.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-379":{"id":"e-379","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-380"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4282","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4282","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1752611496290},"e-383":{"id":"e-383","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-384"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4246","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4246","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1752611641418},"e-385":{"id":"e-385","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-386"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4254","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4254","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1752611643574},"e-387":{"id":"e-387","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-388"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4273","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4273","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1752612317777},"e-391":{"id":"e-391","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-392"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4293","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4293","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1752612345749},"e-393":{"id":"e-393","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-394"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4264","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2d72ecf0-be17-cf57-978e-a00f7f8f4264","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1752612998613}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

const _cmsNodeIds = [
  "2d72ecf0-be17-cf57-978e-a00f7f8f4246",
  "2d72ecf0-be17-cf57-978e-a00f7f8f4254",
  "2d72ecf0-be17-cf57-978e-a00f7f8f4264",
  "2d72ecf0-be17-cf57-978e-a00f7f8f4273",
  "2d72ecf0-be17-cf57-978e-a00f7f8f4282",
  "2d72ecf0-be17-cf57-978e-a00f7f8f4293",
];

const _dummyProjects = [
  {
    id: "nova-commerce-platform",
    year: "2024",
    title: "Nova Commerce Platform",
    category: "Web App",
    submittedBy: "Bright Pixel Studio",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "citypass-mobile",
    year: "2024",
    title: "CityPass Mobile Companion",
    category: "Mobile App",
    submittedBy: "Northbound Digital",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "eco-route-api",
    year: "2024",
    title: "EcoRoute Public API",
    category: "API",
    submittedBy: "Layered Labs",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "legal-self-service",
    year: "2023",
    title: "Legal Self-Service Hub",
    category: "Website",
    submittedBy: "Craftline",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "flux-analytics",
    year: "2023",
    title: "Flux Analytics Workspace",
    category: "Web App",
    submittedBy: "Pixel Foundry",
    image:
      "https://images.unsplash.com/photo-1551281044-8b5bd044d7f8?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "habit-loop-mobile",
    year: "2023",
    title: "HabitLoop Mobile",
    category: "Mobile App",
    submittedBy: "Object Object",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "open-transport-api",
    year: "2022",
    title: "Open Transport API",
    category: "API",
    submittedBy: "Data Harbor",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "museum-kiosk-builder",
    year: "2022",
    title: "Museum Kiosk Builder",
    category: "No-code",
    submittedBy: "Form & Flow",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    id: "green-insurance-site",
    year: "2022",
    title: "Green Insurance Website",
    category: "Website",
    submittedBy: "Unit Zero",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
];

const _dummyProjectsAll = _dummyProjects.map((project, index) => ({
  ...project,
  nodeId: _cmsNodeIds[index],
}));

const _dummyProjectsByYear = _dummyProjects.reduce((acc, project) => {
  if (!acc[project.year]) {
    acc[project.year] = [];
  }
  acc[project.year].push(project);
  return acc;
}, {});

function _ProjectCard({ project }) {
  return (
    <_Builtin.Block
      className={_utils.cx(
        _styles,
        "jury-collection-item",
        "is--interactive",
        "awards-item"
      )}
      id={project.nodeId}
      tag="article"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "awards-projects-item_thumbnail")}
        style={{
          backgroundImage: `url("${project.image}")`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
        }}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "awards-projects-item_thumbnail-content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "is--text-uppercase",
              "text-size-16",
              "font-weight-semibold"
            )}
            tag="div"
          >
            {project.category}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Heading className={_utils.cx(_styles, "is--h4")} tag="h3">
        {project.title}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "awards-projects-item_creator",
          "is--text-uppercase"
        )}
        tag="div"
      >
        <_Builtin.Block tag="span">{"Submitted by"}</_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "font-weight-semibold")} tag="span">
          {project.submittedBy}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Link
        className={_utils.cx(_styles, "awards-projects-link")}
        button={false}
        block=""
        options={{
          href: project.href,
        }}
        aria-label={`Open project ${project.title}`}
      />
    </_Builtin.Block>
  );
}

function _ProjectsGrid({ projects }) {
  return (
    <_Builtin.Grid className={_utils.cx(_styles, "jury-collection-list-s", "is-awards")} tag="div">
      {projects.map((project) => (
        <_ProjectCard key={project.id} project={project} />
      ))}
    </_Builtin.Grid>
  );
}

export function CursorPastProject({
  as: _Component = _Builtin.Block,
  title1 = "WaysawArds projects",
  title2 = "Explore projects from last editions",
  image = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/684c3ecd897ce52b46cbb507_Vector.svg",
  text1 = "All projects",
  text2 = "2024",
  text3 = "2023",
  text4 = "2022",
  footer24Email = "hello@waysconf.com",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <PageGlobals />
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20.awards-item%3Ahover%20h3%20%7B%0A%20%20%09text-decoration%3A%20underline%3B%0A%20%20%7D%0A%20%20%0A%20%20.awards-tabs-menu_link.w--current%20.awards-tabs-icon%20%7B%0A%20%20%09display%3A%20flex%3B%0A%20%20%7D%0A%3C%2Fstyle%3E" />
      <_Builtin.Section
        className={_utils.cx(_styles, "section_cfs2024-hero", "is-speakers")}
        tag="section"
        grid={{
          type: "section",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "home24-hero-container", "is-speakers")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "home24-hero-header")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "text-size-large")}
              tag="h4"
            >
              {title1}
            </_Builtin.Heading>
            <_Builtin.Heading
              className={_utils.cx(_styles, "ways25-heading2")}
              tag="h1"
            >
              {title2}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Block
        className={_utils.cx(_styles, "speakers-image-bg-2")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "awards-jury-hero_shape", "projects")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "section-speakers-main")}
        tag="section"
      >
        <_Builtin.TabsWrapper
          className={_utils.cx(_styles, "awards-tabs")}
          current="All projects"
          easing="ease"
          fadeIn={300}
          fadeOut={100}
        >
          <_Builtin.TabsMenu
            className={_utils.cx(_styles, "awards-tabs-menu")}
            tag="div"
          >
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "awards-tabs-menu_link")}
              data-w-tab="All projects"
              block="inline"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "icon-embed-xsmall-10",
                  "awards-tabs-icon"
                )}
                value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M23.9996%2012C23.9996%2013.2323%2021.685%2014.0663%2021.34%2015.1785C20.995%2016.2907%2022.3746%2018.428%2021.708%2019.3876C21.0415%2020.3472%2018.6955%2019.6144%2017.7702%2020.3194C16.8543%2021.0174%2016.8092%2023.58%2015.7086%2023.9543C14.608%2024.3286%2013.1765%2022.2818%2011.9998%2022.2818C10.823%2022.2818%209.35304%2024.3156%208.29098%2023.9543C7.22892%2023.593%207.14566%2021.0174%206.22931%2020.3194C5.31296%2019.6214%202.96518%2020.3565%202.29154%2019.3876C1.62498%2018.4284%203.017%2016.3311%202.65958%2015.1785C2.31501%2014.0667%200%2013.2323%200%2012C0%2010.7677%202.31457%209.93372%202.65958%208.8215C3.017%207.66893%201.62498%205.57204%202.29154%204.61241C2.96473%203.64351%205.3041%204.38561%206.22931%203.68061C7.14521%202.98258%207.19039%200.420017%208.29098%200.0457213C9.39157%20-0.328575%2010.823%201.71823%2011.9998%201.71823C13.1765%201.71823%2014.6474%20-0.315124%2015.709%200.0461851C16.7706%200.407494%2016.8543%202.98304%2017.7707%203.68108C18.6959%204.38607%2021.0348%203.64397%2021.7085%204.61287C22.375%205.57204%2020.983%207.66939%2021.3404%208.82196C21.685%209.93372%2024%2010.7681%2024%2012.0005L23.9996%2012Z%22%20fill%3D%22%233842F4%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{text1}</_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "awards-tabs-menu_link")}
              data-w-tab="2024"
              block="inline"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "icon-embed-xsmall-10",
                  "awards-tabs-icon"
                )}
                value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M23.9996%2012C23.9996%2013.2323%2021.685%2014.0663%2021.34%2015.1785C20.995%2016.2907%2022.3746%2018.428%2021.708%2019.3876C21.0415%2020.3472%2018.6955%2019.6144%2017.7702%2020.3194C16.8543%2021.0174%2016.8092%2023.58%2015.7086%2023.9543C14.608%2024.3286%2013.1765%2022.2818%2011.9998%2022.2818C10.823%2022.2818%209.35304%2024.3156%208.29098%2023.9543C7.22892%2023.593%207.14566%2021.0174%206.22931%2020.3194C5.31296%2019.6214%202.96518%2020.3565%202.29154%2019.3876C1.62498%2018.4284%203.017%2016.3311%202.65958%2015.1785C2.31501%2014.0667%200%2013.2323%200%2012C0%2010.7677%202.31457%209.93372%202.65958%208.8215C3.017%207.66893%201.62498%205.57204%202.29154%204.61241C2.96473%203.64351%205.3041%204.38561%206.22931%203.68061C7.14521%202.98258%207.19039%200.420017%208.29098%200.0457213C9.39157%20-0.328575%2010.823%201.71823%2011.9998%201.71823C13.1765%201.71823%2014.6474%20-0.315124%2015.709%200.0461851C16.7706%200.407494%2016.8543%202.98304%2017.7707%203.68108C18.6959%204.38607%2021.0348%203.64397%2021.7085%204.61287C22.375%205.57204%2020.983%207.66939%2021.3404%208.82196C21.685%209.93372%2024%2010.7681%2024%2012.0005L23.9996%2012Z%22%20fill%3D%22%233842F4%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{text2}</_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "awards-tabs-menu_link")}
              data-w-tab="2023"
              block="inline"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "icon-embed-xsmall-10",
                  "awards-tabs-icon"
                )}
                value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M23.9996%2012C23.9996%2013.2323%2021.685%2014.0663%2021.34%2015.1785C20.995%2016.2907%2022.3746%2018.428%2021.708%2019.3876C21.0415%2020.3472%2018.6955%2019.6144%2017.7702%2020.3194C16.8543%2021.0174%2016.8092%2023.58%2015.7086%2023.9543C14.608%2024.3286%2013.1765%2022.2818%2011.9998%2022.2818C10.823%2022.2818%209.35304%2024.3156%208.29098%2023.9543C7.22892%2023.593%207.14566%2021.0174%206.22931%2020.3194C5.31296%2019.6214%202.96518%2020.3565%202.29154%2019.3876C1.62498%2018.4284%203.017%2016.3311%202.65958%2015.1785C2.31501%2014.0667%200%2013.2323%200%2012C0%2010.7677%202.31457%209.93372%202.65958%208.8215C3.017%207.66893%201.62498%205.57204%202.29154%204.61241C2.96473%203.64351%205.3041%204.38561%206.22931%203.68061C7.14521%202.98258%207.19039%200.420017%208.29098%200.0457213C9.39157%20-0.328575%2010.823%201.71823%2011.9998%201.71823C13.1765%201.71823%2014.6474%20-0.315124%2015.709%200.0461851C16.7706%200.407494%2016.8543%202.98304%2017.7707%203.68108C18.6959%204.38607%2021.0348%203.64397%2021.7085%204.61287C22.375%205.57204%2020.983%207.66939%2021.3404%208.82196C21.685%209.93372%2024%2010.7681%2024%2012.0005L23.9996%2012Z%22%20fill%3D%22%233842F4%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{text3}</_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "awards-tabs-menu_link")}
              data-w-tab="2022"
              block="inline"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "icon-embed-xsmall-10",
                  "awards-tabs-icon"
                )}
                value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M23.9996%2012C23.9996%2013.2323%2021.685%2014.0663%2021.34%2015.1785C20.995%2016.2907%2022.3746%2018.428%2021.708%2019.3876C21.0415%2020.3472%2018.6955%2019.6144%2017.7702%2020.3194C16.8543%2021.0174%2016.8092%2023.58%2015.7086%2023.9543C14.608%2024.3286%2013.1765%2022.2818%2011.9998%2022.2818C10.823%2022.2818%209.35304%2024.3156%208.29098%2023.9543C7.22892%2023.593%207.14566%2021.0174%206.22931%2020.3194C5.31296%2019.6214%202.96518%2020.3565%202.29154%2019.3876C1.62498%2018.4284%203.017%2016.3311%202.65958%2015.1785C2.31501%2014.0667%200%2013.2323%200%2012C0%2010.7677%202.31457%209.93372%202.65958%208.8215C3.017%207.66893%201.62498%205.57204%202.29154%204.61241C2.96473%203.64351%205.3041%204.38561%206.22931%203.68061C7.14521%202.98258%207.19039%200.420017%208.29098%200.0457213C9.39157%20-0.328575%2010.823%201.71823%2011.9998%201.71823C13.1765%201.71823%2014.6474%20-0.315124%2015.709%200.0461851C16.7706%200.407494%2016.8543%202.98304%2017.7707%203.68108C18.6959%204.38607%2021.0348%203.64397%2021.7085%204.61287C22.375%205.57204%2020.983%207.66939%2021.3404%208.82196C21.685%209.93372%2024%2010.7681%2024%2012.0005L23.9996%2012Z%22%20fill%3D%22%233842F4%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{text4}</_Builtin.Block>
            </_Builtin.TabsLink>
          </_Builtin.TabsMenu>
          <_Builtin.TabsContent tag="div">
            <_Builtin.TabsPane tag="div" data-w-tab="All projects">
              <_Builtin.Block
                className={_utils.cx(_styles, "allprojects-wrapper", "symbols")}
                tag="div"
              >
                <_Builtin.Block className={_utils.cx(_styles, "_2024-collection-wrapper")} tag="div">
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "text-size-large", "is--text-uppercase")}
                    tag="h4"
                  >
                    {"2024"}
                  </_Builtin.Heading>
                  <_ProjectsGrid
                    projects={_dummyProjectsAll.filter((project) => project.year === "2024")}
                  />
                </_Builtin.Block>
                <_Builtin.Block className={_utils.cx(_styles, "_2023-collection-wrapper")} tag="div">
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "text-size-large", "is--text-uppercase")}
                    tag="h4"
                  >
                    {"2023"}
                  </_Builtin.Heading>
                  <_ProjectsGrid
                    projects={_dummyProjectsAll.filter((project) => project.year === "2023")}
                  />
                </_Builtin.Block>
                <_Builtin.Block className={_utils.cx(_styles, "_2023-collection-wrapper")} tag="div">
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "text-size-large", "is--text-uppercase")}
                    tag="h4"
                  >
                    {"2022"}
                  </_Builtin.Heading>
                  <_ProjectsGrid
                    projects={_dummyProjectsAll.filter((project) => project.year === "2022")}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane tag="div" data-w-tab="2024">
              <_Builtin.Block className={_utils.cx(_styles, "_2024-collection-wrapper")} tag="div">
                <_ProjectsGrid projects={_dummyProjectsByYear["2024"] ?? []} />
              </_Builtin.Block>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane tag="div" data-w-tab="2023">
              <_Builtin.Block className={_utils.cx(_styles, "_2023-collection-wrapper")} tag="div">
                <_ProjectsGrid projects={_dummyProjectsByYear["2023"] ?? []} />
              </_Builtin.Block>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane tag="div" data-w-tab="2022">
              <_Builtin.Block className={_utils.cx(_styles, "_2023-collection-wrapper")} tag="div">
                <_ProjectsGrid projects={_dummyProjectsByYear["2022"] ?? []} />
              </_Builtin.Block>
            </_Builtin.TabsPane>
          </_Builtin.TabsContent>
        </_Builtin.TabsWrapper>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "section-hero-wrapper",
            "is-awards-projects"
          )}
          tag="div"
        />
      </_Builtin.Block>
      <Footer24 email={footer24Email} />
    </_Component>
  );
}

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CursrorSectionJuryPeople.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-155":{"id":"e-155","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-32","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"selector":".speaker-hero-grid_image-wrapper","originalId":"6846a22a95d3c778d528cf7f|ef184280-c757-8e95-d0ef-56fc15f8b13b","appliesTo":"CLASS"},"targets":[{"selector":".speaker-hero-grid_image-wrapper","originalId":"6846a22a95d3c778d528cf7f|ef184280-c757-8e95-d0ef-56fc15f8b13b","appliesTo":"CLASS"}],"config":[{"continuousParameterGroupId":"a-32-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":75,"restingState":50},{"continuousParameterGroupId":"a-32-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":75,"restingState":50}],"createdOn":1710922988287},"e-358":{"id":"e-358","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-359"}},"mediaQueries":["main"],"target":{"id":"0305d8a9-61bd-241b-e252-72961eb941dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0305d8a9-61bd-241b-e252-72961eb941dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1743437456125},"e-359":{"id":"e-359","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-358"}},"mediaQueries":["main"],"target":{"id":"0305d8a9-61bd-241b-e252-72961eb941dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0305d8a9-61bd-241b-e252-72961eb941dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1743437456125},"e-364":{"id":"e-364","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-32","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"selector":".speaker-hero-grid_image-wrapper-2","originalId":"64f33353468c25972dd10ae2|ef184280-c757-8e95-d0ef-56fc15f8b13b","appliesTo":"CLASS"},"targets":[{"selector":".speaker-hero-grid_image-wrapper-2","originalId":"64f33353468c25972dd10ae2|ef184280-c757-8e95-d0ef-56fc15f8b13b","appliesTo":"CLASS"}],"config":[{"continuousParameterGroupId":"a-32-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":75,"restingState":50},{"continuousParameterGroupId":"a-32-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":75,"restingState":50}],"createdOn":1710922988287},"e-365":{"id":"e-365","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-366"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882ec2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882ec2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967687721},"e-366":{"id":"e-366","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-365"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882ec2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882ec2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967687721},"e-367":{"id":"e-367","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-368"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882eee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882eee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967691478},"e-368":{"id":"e-368","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-367"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882eee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882eee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967691478},"e-369":{"id":"e-369","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-370"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882f04","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882f04","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967692363},"e-370":{"id":"e-370","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-369"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882f04","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882f04","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967692363},"e-371":{"id":"e-371","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-372"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882f1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882f1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967728614},"e-372":{"id":"e-372","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-371"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882f1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882f1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749967728614},"e-373":{"id":"e-373","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-374"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfb4|c0115db9-16f3-8f67-c156-47c8d69d744e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfb4|c0115db9-16f3-8f67-c156-47c8d69d744e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751969448949},"e-374":{"id":"e-374","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-373"}},"mediaQueries":["main"],"target":{"id":"6846a22a95d3c778d528cfb4|c0115db9-16f3-8f67-c156-47c8d69d744e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6846a22a95d3c778d528cfb4|c0115db9-16f3-8f67-c156-47c8d69d744e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751969448949},"e-375":{"id":"e-375","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-376"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882ed8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882ed8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751969455694},"e-376":{"id":"e-376","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-375"}},"mediaQueries":["main"],"target":{"id":"1a82e833-81eb-a561-6a2f-e6d077882ed8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a82e833-81eb-a561-6a2f-e6d077882ed8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751969455694}},"actionLists":{"a-32":{"id":"a-32","title":"speaker-blur","continuousParameterGroups":[{"id":"a-32-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"xValue":-5,"yValue":null,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-32-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"xValue":5,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-32-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-32-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"yValue":-5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-32-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"yValue":5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}]}],"createdOn":1710922934251},"a-29":{"id":"a-29","title":"speakers-hover IN","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".aboutus24-main-grid_image.is-logo.is-partner","selectorGuids":["11cc42c8-231c-431e-3ce4-c220907217d1","f4c7a043-ec80-839e-971d-93169a3e1fa6","bd2d36ed-da98-a92a-b875-2f4c853ba74f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".aboutus24-main-grid_image.is-logo.is-partner","selectorGuids":["11cc42c8-231c-431e-3ce4-c220907217d1","f4c7a043-ec80-839e-971d-93169a3e1fa6","bd2d36ed-da98-a92a-b875-2f4c853ba74f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710756477764},"a-30":{"id":"a-30","title":"speakers-hover IN 2","actionItemGroups":[{"actionItems":[{"id":"a-30-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".speaker-main-grid_image.is-blur","selectorGuids":["ceccf952-5b8e-0381-293b-cfd2ee613213","b3481e0c-d293-54e8-083d-68b5b4195ec7"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710756477764}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

const _WAVE_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='160' viewBox='0 0 1200 160' fill='none'%3E%3Cpath d='M0 95.6C150 67.2 300 124.8 450 95.6C600 67.2 750 124.8 900 95.6C1000 76.5 1100 82.8 1200 95.6V160H0V95.6Z' fill='%233842f4'/%3E%3C/svg%3E";

function _normalizeYear(year) {
  if (!year) {
    return undefined;
  }

  const match = String(year).match(/20\d{2}/);
  return match ? match[0] : undefined;
}

const _DEFAULT_JURY_YEAR = process.env.NEXT_PUBLIC_EDITION ?? "2025";
const _TAB_ICON =
  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M23.9996%2012C23.9996%2013.2323%2021.685%2014.0663%2021.34%2015.1785C20.995%2016.2907%2022.3746%2018.428%2021.708%2019.3876C21.0415%2020.3472%2018.6955%2019.6144%2017.7702%2020.3194C16.8543%2021.0174%2016.8092%2023.58%2015.7086%2023.9543C14.608%2024.3286%2013.1765%2022.2818%2011.9998%2022.2818C10.823%2022.2818%209.35304%2024.3156%208.29098%2023.9543C7.22892%2023.593%207.14566%2021.0174%206.22931%2020.3194C5.31296%2019.6214%202.96518%2020.3565%202.29154%2019.3876C1.62498%2018.4284%203.017%2016.3311%202.65958%2015.1785C2.31501%2014.0667%200%2013.2323%200%2012C0%2010.7677%202.31457%209.93372%202.65958%208.8215C3.017%207.66893%201.62498%205.57204%202.29154%204.61241C2.96473%203.64351%205.3041%204.38561%206.22931%203.68061C7.14521%202.98258%207.19039%200.420017%208.29098%200.0457213C9.39157%20-0.328575%2010.823%201.71823%2011.9998%201.71823C13.1765%201.71823%2014.6474%20-0.315124%2015.709%200.0461851C16.7706%200.407494%2016.8543%202.98304%2017.7707%203.68108C18.6959%204.38607%2021.0348%203.64397%2021.7085%204.61287C22.375%205.57204%2020.983%207.66939%2021.3404%208.82196C21.685%209.93372%2024%2010.7681%2024%2012.0005L23.9996%2012Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E";

function _memberRole(member) {
  if (member.role && member.company) {
    return `${member.role} @ ${member.company}`;
  }

  return member.role || member.company || "";
}

function _JuryCard({ member }) {
  const role = _memberRole(member);

  return (
    <_Builtin.Block
      className={_utils.cx(_styles, "speakers-collection-item", "is--interactive")}
      tag="article"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "speaker-hero-grid_image-wrapper-2")}
        tag="div"
      >
        {member.image ? (
          <>
            <_Builtin.Image
              className={_utils.cx(_styles, "speaker-main-grid_image", "is-blur")}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src={member.image}
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "speaker-main-grid_image")}
              width="auto"
              height="auto"
              loading="lazy"
              alt={member.name}
              src={member.image}
            />
          </>
        ) : (
          <_Builtin.Block
            className={_utils.cx(_styles, "speaker-main-grid_image")}
            tag="div"
            style={{
              backgroundImage: "linear-gradient(135deg, #3842f4 0%, #8da0ff 100%)",
            }}
          />
        )}
        <_Builtin.Image
          className={_utils.cx(_styles, "speaker-main-grid_wave")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={_WAVE_IMAGE}
        />
      </_Builtin.Block>

      <_Builtin.Block className={_utils.cx(_styles, "speakers-item_name-3")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "ways25-heading5", "text-size-32", "jury-card__name")}
          tag="h3"
        >
          {member.name}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "is--paragraph",
            "jury-card__role"
          )}
          aria-hidden={role ? undefined : true}
        >
          {role || "\u00a0"}
        </_Builtin.Paragraph>
      </_Builtin.Block>

      {member.profileUrl ? (
        <_Builtin.Link
          className={_utils.cx(_styles, "speakers-collection-link")}
          button={false}
          block=""
          options={{
            href: member.profileUrl,
            target: "_blank",
          }}
          aria-label={`Open ${member.name} profile`}
        />
      ) : (
        <_Builtin.Block className={_utils.cx(_styles, "speakers-collection-link", "is--display-hidden")} tag="div" />
      )}
    </_Builtin.Block>
  );
}

function _JuryGrid({
  members,
  isLoading,
  error,
  showMoreButton = false,
  showMoreHref,
  showMoreLabel = "Pokaż więcej",
}) {
  if (isLoading) {
    return (
      <_Builtin.Paragraph className={_utils.cx(_styles, "is--paragraph", "is--text-color-silver")}>
        Loading jury members...
      </_Builtin.Paragraph>
    );
  }

  if (error && members.length === 0) {
    return (
      <_Builtin.Paragraph className={_utils.cx(_styles, "is--paragraph", "is--text-color-silver")}>
        {error}
      </_Builtin.Paragraph>
    );
  }

  if (members.length === 0) {
    return (
      <_Builtin.Paragraph className={_utils.cx(_styles, "is--paragraph", "is--text-color-silver")}>
        No jury members available for this year yet.
      </_Builtin.Paragraph>
    );
  }

  return (
    <_Builtin.Block className={_utils.cx(_styles, "speakers-collection-wrapper")} tag="div">
      <_Builtin.Grid className={_utils.cx(_styles, "speakers-collection-list-s-2")} tag="div">
        {members.map((member) => (
          <_JuryCard key={member.id} member={member} />
        ))}
      </_Builtin.Grid>
      {showMoreButton && showMoreHref ? (
        <_Builtin.Block className={_utils.cx(_styles, "jury-more-wrap")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "ways25-button-secondary", "white")}
            button={false}
            block=""
            options={{
              href: showMoreHref,
            }}
          >
            {showMoreLabel}
          </_Builtin.Link>
        </_Builtin.Block>
      ) : null}
    </_Builtin.Block>
  );
}

export function CursrorSectionJuryPeople({
  as: _Component = _Builtin.Block,
  showTabs = true,
  limit,
  showMoreHref,
  showMoreLabel = "Pokaż więcej",
  year = _DEFAULT_JURY_YEAR,
  text1 = "All",
  text2 = "2025",
  text3 = "2024",
  text4 = "2023",
  text5 = "2022",
}) {
  _interactions.useInteractions(_interactionsData, _styles);
  const [members, setMembers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const requestedYear = _normalizeYear(year);
  const tabYears = React.useMemo(() => {
    const years = [text2, text3, text4, text5]
      .map((value) => _normalizeYear(value))
      .filter(Boolean);

    return Array.from(new Set(years));
  }, [text2, text3, text4, text5]);
  const currentTab = React.useMemo(() => {
    if (!showTabs) {
      return "All";
    }

    const preferred = requestedYear && tabYears.includes(requestedYear) ? requestedYear : text2;
    return preferred || tabYears[0] || "All";
  }, [requestedYear, showTabs, tabYears, text2]);

  React.useEffect(() => {
    let isCancelled = false;

    async function loadJuryMembers() {
      setIsLoading(true);

      try {
        const params = new URLSearchParams();
        if (!showTabs && requestedYear) {
          params.set("year", requestedYear);
        }

        const query = params.toString();
        const endpoint = query ? `/api/webflow/jury?${query}` : "/api/webflow/jury";
        const response = await fetch(endpoint, {
          headers: {
            Accept: "application/json",
          },
        });
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload?.error || "Unable to load jury members.");
        }

        const nextMembers = Array.isArray(payload?.members) ? payload.members : [];
        if (!isCancelled) {
          setMembers(nextMembers);
          setError("");
        }
      } catch (fetchError) {
        if (!isCancelled) {
          setMembers([]);
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Unable to load jury members."
          );
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    loadJuryMembers();

    return () => {
      isCancelled = true;
    };
  }, [requestedYear, showTabs]);

  const membersByYear = React.useMemo(() => {
    const grouped = { all: members };
    for (const tabYear of tabYears) {
      grouped[tabYear] = [];
    }

    for (const member of members) {
      const memberYear = _normalizeYear(member.year);
      if (memberYear && grouped[memberYear]) {
        grouped[memberYear].push(member);
      }
    }

    return grouped;
  }, [members, tabYears]);

  const homeMembers = React.useMemo(() => {
    const filtered = requestedYear
      ? members.filter((member) => _normalizeYear(member.year) === requestedYear)
      : members;

    if (typeof limit === "number" && limit > 0) {
      return filtered.slice(0, limit);
    }

    return filtered;
  }, [limit, members, requestedYear]);

  const homeTotalCount = React.useMemo(() => {
    if (!requestedYear) {
      return members.length;
    }

    return members.filter((member) => _normalizeYear(member.year) === requestedYear).length;
  }, [members, requestedYear]);

  const shouldShowMoreButton =
    !showTabs &&
    Boolean(showMoreHref) &&
    typeof limit === "number" &&
    limit > 0 &&
    homeTotalCount > homeMembers.length;

  if (!showTabs) {
    return (
      <_Component className={_utils.cx(_styles, "section-jury-people")} tag="div">
        <_JuryGrid
          members={homeMembers}
          isLoading={isLoading}
          error={error}
          showMoreButton={shouldShowMoreButton}
          showMoreHref={showMoreHref}
          showMoreLabel={showMoreLabel}
        />
      </_Component>
    );
  }

  return (
    <_Component className={_utils.cx(_styles, "section-jury-people")} tag="div">
      <_Builtin.TabsWrapper
        className={_utils.cx(_styles, "jury-tabs")}
        current={currentTab}
        easing="ease"
        fadeIn={300}
        fadeOut={100}
      >
        <_Builtin.TabsMenu
          className={_utils.cx(_styles, "jury-tabs-menu")}
          tag="div"
        >
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "jury-tabs-link")}
            data-w-tab="All"
            block="inline"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "jury-tabs-link__icon")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "icon-embed-xsmall-10",
                  "text-color-pink"
                )}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M23.9996%2012C23.9996%2013.2323%2021.685%2014.0663%2021.34%2015.1785C20.995%2016.2907%2022.3746%2018.428%2021.708%2019.3876C21.0415%2020.3472%2018.6955%2019.6144%2017.7702%2020.3194C16.8543%2021.0174%2016.8092%2023.58%2015.7086%2023.9543C14.608%2024.3286%2013.1765%2022.2818%2011.9998%2022.2818C10.823%2022.2818%209.35304%2024.3156%208.29098%2023.9543C7.22892%2023.593%207.14566%2021.0174%206.22931%2020.3194C5.31296%2019.6214%202.96518%2020.3565%202.29154%2019.3876C1.62498%2018.4284%203.017%2016.3311%202.65958%2015.1785C2.31501%2014.0667%200%2013.2323%200%2012C0%2010.7677%202.31457%209.93372%202.65958%208.8215C3.017%207.66893%201.62498%205.57204%202.29154%204.61241C2.96473%203.64351%205.3041%204.38561%206.22931%203.68061C7.14521%202.98258%207.19039%200.420017%208.29098%200.0457213C9.39157%20-0.328575%2010.823%201.71823%2011.9998%201.71823C13.1765%201.71823%2014.6474%20-0.315124%2015.709%200.0461851C16.7706%200.407494%2016.8543%202.98304%2017.7707%203.68108C18.6959%204.38607%2021.0348%203.64397%2021.7085%204.61287C22.375%205.57204%2020.983%207.66939%2021.3404%208.82196C21.685%209.93372%2024%2010.7681%2024%2012.0005L23.9996%2012Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block tag="div">{text1}</_Builtin.Block>
          </_Builtin.TabsLink>
          {tabYears.map((tabYear) => (
            <_Builtin.TabsLink
              key={tabYear}
              className={_utils.cx(_styles, "jury-tabs-link")}
              data-w-tab={tabYear}
              block="inline"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "jury-tabs-link__icon")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(
                    _styles,
                    "icon-embed-xsmall-10",
                    "text-color-pink"
                  )}
                  value={_TAB_ICON}
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">{tabYear}</_Builtin.Block>
            </_Builtin.TabsLink>
          ))}
        </_Builtin.TabsMenu>
        <_Builtin.TabsContent
          className={_utils.cx(_styles, "jury-tabs-content")}
          tag="div"
        >
          <_Builtin.TabsPane tag="div" data-w-tab="All">
            <_JuryGrid members={membersByYear.all} isLoading={isLoading} error={error} />
          </_Builtin.TabsPane>
          {tabYears.map((tabYear) => (
            <_Builtin.TabsPane key={tabYear} tag="div" data-w-tab={tabYear}>
              <_JuryGrid members={membersByYear[tabYear] || []} isLoading={isLoading} error={error} />
            </_Builtin.TabsPane>
          ))}
        </_Builtin.TabsContent>
      </_Builtin.TabsWrapper>
    </_Component>
  );
}

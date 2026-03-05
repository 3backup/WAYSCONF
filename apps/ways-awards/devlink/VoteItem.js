"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Ways25Tag } from "./Ways25Tag";
import { Ways25Button } from "./Ways25Button";
import * as _utils from "./utils";
import _styles from "./VoteItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-405":{"id":"e-405","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-406"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"17d6b230-10e3-ecaf-8563-4aff42ae5a1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"17d6b230-10e3-ecaf-8563-4aff42ae5a1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754988162936},"e-406":{"id":"e-406","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-405"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"17d6b230-10e3-ecaf-8563-4aff42ae5a1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"17d6b230-10e3-ecaf-8563-4aff42ae5a1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754988162937}},"actionLists":{"a-93":{"id":"a-93","title":"vote-item-hover IN","actionItemGroups":[{"actionItems":[{"id":"a-93-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".vote-item-thumbnail_hover","selectorGuids":["eba82de5-0213-2fdf-6286-59526beab4b4"]},"value":1,"unit":""}},{"id":"a-93-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".vote-item-thumbnail_content","selectorGuids":["a70a675c-6167-8803-82fe-6c2ff6934198"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1754988165109},"a-94":{"id":"a-94","title":"vote-item-hover OUT","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".vote-item-thumbnail_hover","selectorGuids":["eba82de5-0213-2fdf-6286-59526beab4b4"]},"value":0,"unit":""}},{"id":"a-94-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".vote-item-thumbnail_content","selectorGuids":["a70a675c-6167-8803-82fe-6c2ff6934198"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1754988165109}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VoteItem({
  as: _Component = _Builtin.Block,
  projectName = "System back-office dla redakcji Wirtualnej Polski",
  projectCreatorS = "Tom Osowski",
  projectVotes = "64 votes",
  projectTool = "Figma",
  projectCategory = "Website",

  projectVoteLink = {
    href: "#",
  },

  projectThumbnail = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/687017ecd8532c9fdecd04a3_image.png",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "vote-item")}
      id={_utils.cx(
        _styles,
        "w-node-_17d6b230-10e3-ecaf-8563-4aff42ae5a1c-42ae5a1c"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "vote-item-thumbnail")}
        data-w-id="17d6b230-10e3-ecaf-8563-4aff42ae5a1d"
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "vote-item-thumbnail_asset")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={projectThumbnail}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "vote-item-thumbnail_content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ways25-chip-wrapper", "gray")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-embed-xxsmall")}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.16602%2012.833C1.16602%2010.2557%203.25535%208.16634%205.83268%208.16634C8.41002%208.16634%2010.4993%2010.2557%2010.4993%2012.833H1.16602ZM5.83268%207.58301C3.89893%207.58301%202.33268%206.01676%202.33268%204.08301C2.33268%202.14926%203.89893%200.583008%205.83268%200.583008C7.76643%200.583008%209.33268%202.14926%209.33268%204.08301C9.33268%206.01676%207.76643%207.58301%205.83268%207.58301ZM10.1276%208.88571C11.9275%209.34567%2013.2806%2010.9217%2013.4064%2012.833H11.666C11.666%2011.3106%2011.0828%209.92445%2010.1276%208.88571ZM8.94774%207.55787C9.90015%206.70346%2010.4993%205.46322%2010.4993%204.08301C10.4993%203.25623%2010.2843%202.47966%209.90721%201.80618C11.2433%202.07282%2012.2493%203.25155%2012.2493%204.66634C12.2493%206.2778%2010.9441%207.58301%209.33268%207.58301C9.20219%207.58301%209.07368%207.57443%208.94774%207.55787Z%22%20fill%3D%22%23FF6365%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">{projectVotes}</_Builtin.Block>
          </_Builtin.Block>
          <Ways25Tag label={projectTool} variant="Gray" />
          <Ways25Tag label={projectCategory} variant="Gray" />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "vote-item-thumbnail_hover")}
          tag="div"
        >
          <Ways25Button
            link={projectVoteLink}
            variant="Small-White"
            label="Vote for this project"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "vote-item-content")}
        tag="div"
      >
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "ways25-text-size-24",
            "text-weight-semibold"
          )}
        >
          {projectName}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "vote-item-created")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "opacity-60")}
            tag="div"
          >
            {"Created by"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-weight-semibold",
              "text-style-uppercase"
            )}
            tag="div"
          >
            {projectCreatorS}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

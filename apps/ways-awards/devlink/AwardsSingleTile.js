"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AwardsSingleTile.module.css";

export function AwardsSingleTile({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "voting-project")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-7")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d13b_Rectangle%205395.png"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "voting-project-container")}
        tag="div"
      >
        <_Builtin.Heading tag="h4">
          {"Morele - proces projektowy"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "voting-projects-numberofbotes")}
          tag="div"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d13c_users.svg"
          />
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "is--paragraph",
              "is--text-uppercase"
            )}
          >
            {"64 votes"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "is--paragraph-small",
            "is--text-color-silver",
            "is-award-desc"
          )}
        >
          {
            "Crafton team designed its own website, focusing on user experience. The result is a seamless, engaging showcase of Crafton's portfolio in UX/UI design."
          }
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "voting-caption-wraper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "voting-info-wrapper")}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "is--paragraph",
                "is--text-color-silver",
                "is--text-uppercase"
              )}
            >
              {"Category"}
            </_Builtin.Paragraph>
            <_Builtin.Heading tag="h5">{"Website"}</_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "voting-info-wrapper")}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "is--paragraph",
                "is--text-color-silver",
                "is--text-uppercase"
              )}
            >
              {"Customer"}
            </_Builtin.Paragraph>
            <_Builtin.Heading tag="h5">{"Crafton"}</_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "voting-info-wrapper")}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "is--paragraph",
                "is--text-color-silver",
                "is--text-uppercase"
              )}
            >
              {"Submitted by"}
            </_Builtin.Paragraph>
            <_Builtin.Heading tag="h5">{"Crafton"}</_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "voting-project-cta")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "button-icon",
            "is--smaller",
            "is-awards"
          )}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block tag="div">{"Read more"}</_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "button-icon_embed")}
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.02941%201L11.3824%201.11765M11.3824%201.11765L11.5%209.47059M11.3824%201.11765L1.5%2011%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.66667%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "link")}
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Vote for this project"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}

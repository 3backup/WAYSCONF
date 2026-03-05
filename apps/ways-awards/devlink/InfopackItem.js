"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InfopackItem.module.css";

export function InfopackItem({
  as: _Component = _Builtin.Block,
  heading = "WaysConf Agenda",
  description = "Section description",
  icon = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528cff1_calendar-dates.svg",

  fullButtonLink = {
    href: "#",
  },

  fullButtonLabel = "Buy tickets",
  fullButtonVisibility = true,
  transparentButtonVisibility = true,

  transparentButtonLink = {
    href: "#",
  },

  transparentButtonLabel = "Buy tickets",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "infopack-content-item_wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "infopack-content-item_header")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "infopack-content-item_header-content")}
          tag="div"
        >
          <_Builtin.Heading tag="h4">{heading}</_Builtin.Heading>
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "is--paragraph",
              "is--text-color-silver"
            )}
          >
            {description}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "infopack-content-item_header-icon")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={icon}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "infopack-content-item_footer")}
        tag="div"
      >
        {fullButtonVisibility ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "button-icon")}
            button={false}
            block="inline"
            options={fullButtonLink}
          >
            <_Builtin.Block tag="div">{fullButtonLabel}</_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "button-icon_embed")}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.02941%201L11.3824%201.11765M11.3824%201.11765L11.5%209.47059M11.3824%201.11765L1.5%2011%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.66667%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
        ) : null}
        {transparentButtonVisibility ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "button-icon", "is--transparent")}
            button={false}
            block="inline"
            options={transparentButtonLink}
          >
            <_Builtin.Block tag="div">{transparentButtonLabel}</_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "button-icon_embed")}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.02941%201L11.3824%201.11765M11.3824%201.11765L11.5%209.47059M11.3824%201.11765L1.5%2011%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.66667%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}

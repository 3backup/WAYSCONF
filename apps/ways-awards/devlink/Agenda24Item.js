"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Agenda24Item.module.css";

export function Agenda24Item({
  as: _Component = _Builtin.Link,
  contentTimeStart = "9:45",
  contentTimeEnd = "10:30",
  contentFlagPolish = false,
  contentFlagEnglish = true,
  contentTitle = "No-coding your productone iteration at a time",
  contentTag = "No code / Management",
  contentTagVisibility = true,
  contentPath = "Pantone",
  contentPathTheme = "same as path",

  contentAgendaLink = {
    href: "#",
    target: "_blank",
  },

  structureAgenda24GridItemMiddleAuthors,
  structureItemSize = "1row",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "agenda24-grid-item")}
      id={_utils.cx(
        _styles,
        "w-node-_7bfec228-7578-d29f-a9d4-b75ebd332bdc-bd332bdc"
      )}
      button={false}
      block="inline"
      options={contentAgendaLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "agenda24-grid-item_top")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "agenda24-grid-item_top-time")}
          tag="div"
        >
          <_Builtin.Block tag="div">{contentTimeStart}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "agenda24-grid-item_top-time-divider"
            )}
            tag="div"
          />
          <_Builtin.Block tag="div">{contentTimeEnd}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "agenda24-grid-item_top-flags")}
          tag="div"
        >
          {contentFlagPolish ? (
            <_Builtin.Image
              className={_utils.cx(_styles, "agenda24-flag_polish")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d436_flag-polish.svg"
            />
          ) : null}
          {contentFlagEnglish ? (
            <_Builtin.Image
              className={_utils.cx(_styles, "agenda24-flag_english")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d437_flag-english.svg"
            />
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "agenda24-grid-item_middle")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "agenda24-grid-item_middle-title")}
          tag="div"
        >
          {contentTitle}
        </_Builtin.Block>
        {structureAgenda24GridItemMiddleAuthors}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "agenda24-grid-item_bottom")}
        tag="div"
      >
        {contentTagVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "agenda24-grid-item_tag")}
            tag="div"
          >
            {contentTag}
          </_Builtin.Block>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "agenda24-grid-item_tag", "is-path")}
          tag="div"
          path={contentPathTheme}
        >
          {contentPath}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

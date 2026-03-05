"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AgendaGridItem.module.css";

export function AgendaGridItem({
  as: _Component = _Builtin.Block,
  hourStart = "9:00",
  hourEnd = "9:30",
  lectureTitle = "Kanban mać! Zarządzanie zespołem. Chyba.",
  lectureSpeaker = "Marcin Andrzejewski",
  meritsPath = "pATH NAME",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "agenda-grid-main_lecture-wrapper")}
      id={_utils.cx(
        _styles,
        "w-node-_9e650255-6374-7f24-4a86-182aceed83dc-ceed83dc"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "agenda-grid-main_lecture-header")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "agenda-grid-main_lecture-header-time")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-2")}
            tag="div"
          >
            {hourStart}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "agenda-grid-main_lecture-header-time_line"
            )}
            tag="div"
          />
          <_Builtin.Block tag="div">{hourEnd}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "agenda-grid-main_lecture-header-about"
          )}
          tag="div"
        >
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "is--paragraph",
              "is--agenda-grid-title"
            )}
          >
            {lectureTitle}
          </_Builtin.Paragraph>
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "is--paragraph-small",
              "is--text-color-silver"
            )}
          >
            {lectureSpeaker}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "chip-wrapper", "is--agenda-grid-path")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "is--caption-small", "no-wrap")}
          tag="div"
        >
          {meritsPath}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

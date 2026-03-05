"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Agenda24Blocker.module.css";

export function Agenda24Blocker({
  as: _Component = _Builtin.Block,
  title = "Registration",
  startTime = "9:45",
  endTime = "10:30",
  endDateVisibility = true,
  dividerVisibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "agenda24-grid-item_blocker")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "agenda24-grid-item_blocker-title")}
        tag="div"
      >
        {title}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "agenda24-grid-item_blocker-time")}
        tag="div"
      >
        <_Builtin.Block tag="div">{startTime}</_Builtin.Block>
        {dividerVisibility ? (
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "agenda24-grid-item_blocker-time-divider"
            )}
            tag="div"
          />
        ) : null}
        {endDateVisibility ? (
          <_Builtin.Block tag="div">{endTime}</_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Agenda24Author.module.css";

export function Agenda24Author({
  as: _Component = _Builtin.Block,
  fullName = "Natalie Pilling",
  position = "Content Designer at Docplanner",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "agenda24-grid-item_middle-author")}
      id={_utils.cx(
        _styles,
        "w-node-_337b3aa3-8115-e0b0-0854-944dc4b9f51b-c4b9f51b"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "agenda24-grid-item_middle-author-name")}
        tag="div"
      >
        {fullName}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "agenda24-grid-item_middle-author-position"
        )}
        tag="div"
      >
        {position}
      </_Builtin.Block>
    </_Component>
  );
}

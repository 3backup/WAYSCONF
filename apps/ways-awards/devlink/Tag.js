"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Tag.module.css";

export function Tag({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "chip-wrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "is--caption")} tag="div">
        {"Media kit"}
      </_Builtin.Block>
    </_Component>
  );
}

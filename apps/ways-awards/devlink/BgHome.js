"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BgHome.module.css";

export function BgHome({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "speakers-image-bg-2")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "awards-jury-hero_shape", "projects")}
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/684c3ecd897ce52b46cbb507_Vector.svg"
      />
    </_Component>
  );
}

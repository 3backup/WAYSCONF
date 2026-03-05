"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroAwards.module.css";

export function HeroAwards({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_cfs2024-hero", "is-speakers")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "home24-hero-container", "is-speakers")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "home24-hero-header")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "text-size-large")}
            tag="h4"
          >
            {"WaysawArds projects"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "ways25-heading2")}
            tag="h1"
          >
            {"Vote for the bestdigital projects"}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

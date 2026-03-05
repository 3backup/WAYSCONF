"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentChip } from "./ComponentChip";
import * as _utils from "./utils";
import _styles from "./FeedbacSwiper.module.css";

export function FeedbacSwiper({
  as: _Component = _Builtin.Block,
  heading2Text = "An honest feedback",
  componentChipChipWrapperVisibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-home-feedback")}
      tag="section"
      id="feedback"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-vertical", "is--128")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "section-hero-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "home-feedback-wrapper", "s-in")}
            tag="div"
          >
            <ComponentChip
              chipWrapperVisibility={componentChipChipWrapperVisibility}
              chipText="Ways in Social media"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer", "is--24")}
              tag="div"
            />
            <_Builtin.Heading tag="h2">{heading2Text}</_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer", "is--64")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

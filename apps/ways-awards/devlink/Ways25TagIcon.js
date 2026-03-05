"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Ways25TagIcon.module.css";

export function Ways25TagIcon({
  as: _Component = _Builtin.Block,
  text = "Poland",
  image = "",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Blue: "w-variant-73d1344c-0d89-b529-7bfb-8fd2e83f5b11",
    Teal: "w-variant-36f81d1c-7784-622b-4b11-1ab2e7f5ce11",
    Pink: "w-variant-944b3f5e-3552-ab8a-794b-8515599974db",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "ways25-chip-wrapper",
        "is-icon",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Image
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}

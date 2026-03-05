"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Ways25Tag.module.css";

export function Ways25Tag({
  as: _Component = _Builtin.Block,
  label = "EXPO KRAKÓW + ONLINE",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Teal: "w-variant-5215e380-2c44-d9c3-2f98-21d3fcd435c5",
    Pink: "w-variant-bcec81f5-d071-b01a-f894-6bee22e13bbb",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "ways25-chip-wrapper",
        "small",
        "line-wrap",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Block tag="div">{label}</_Builtin.Block>
    </_Component>
  );
}

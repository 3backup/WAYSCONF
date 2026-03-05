"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ComponentChip.module.css";

export function ComponentChip({
  as: _Component = _Builtin.Block,
  chipWrapperVisibility = true,
  chipText = "Krakow + online",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Blue: "w-variant-bf9d861a-6abc-401a-f8dd-ef7d0e32fc0d",
    Teal: "w-variant-0668983b-415c-2b78-e524-16d3bd921d5f",
    Pink: "w-variant-ae0e680e-5b8f-84f7-a17d-f64bf817b83b",
    White: "w-variant-2668cf3d-a985-1f2a-7a18-e1e4d976010d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return chipWrapperVisibility ? (
    <_Component
      className={_utils.cx(_styles, "chip-wrapper", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Block tag="div">{chipText}</_Builtin.Block>
    </_Component>
  ) : null;
}

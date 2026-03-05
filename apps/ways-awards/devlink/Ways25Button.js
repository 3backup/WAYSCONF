"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Ways25Button.module.css";

export function Ways25Button({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  label = "Apply",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    White: "w-variant-928d4469-ccb5-4912-b930-6914bf0b655b",
    "Small-Default": "w-variant-7b983af5-6cb7-7533-7f6f-6b1e9ff656dd",
    "Small-White": "w-variant-f77d7fef-a8dc-058a-cd52-a4fc4105d929",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "ways25-button-secondary",
        _activeStyleVariant
      )}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "text-style-nowrap", _activeStyleVariant)}
      >
        {label}
      </_Builtin.Paragraph>
    </_Component>
  );
}

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonIcon.module.css";

export function ButtonIcon({
  as: _Component = _Builtin.Link,
  textBlockText = "Buy tickets",

  link = {
    href: "#",
  },

  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    smaller: "w-variant-8ad0fca4-f7d8-9c07-7a71-7eb65c0d4448",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "button-icon",
        "is--menu",
        _activeStyleVariant
      )}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block tag="div">{textBlockText}</_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "button-icon_embed", _activeStyleVariant)}
        value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.02941%201L11.3824%201.11765M11.3824%201.11765L11.5%209.47059M11.3824%201.11765L1.5%2011%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.66667%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}

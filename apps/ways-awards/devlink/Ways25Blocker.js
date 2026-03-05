"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Ways25Partner } from "./Ways25Partner";
import * as _utils from "./utils";
import _styles from "./Ways25Blocker.module.css";

export function Ways25Blocker({
  as: _Component = _Builtin.Section,
  variant = "Base",
  heading = "Become a Speakerat WaysConf 2025",

  link = {
    href: "#",
  },

  label = "Become our speaker",
}) {
  const _styleVariantMap = {
    Base: "",
    Speaker: "w-variant-001a15e8-3d8d-55be-4cfc-f7d668e39e74",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section_home24-blocker",
        _activeStyleVariant
      )}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "section-hero-wrapper",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "home24-blocker-content",
            "s-in",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(
              _styles,
              "home24-blocker-heading",
              "partner",
              _activeStyleVariant
            )}
            tag="h1"
          >
            {"Become a Partnerat WaysConf 2025"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(
              _styles,
              "home24-blocker-heading",
              "speaner",
              _activeStyleVariant
            )}
            tag="h1"
          >
            {heading}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "blocker-form", _activeStyleVariant)}
            tag="div"
          >
            <Ways25Partner home24BlockerFormWrapperVisibility={true} />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "cta-group",
              "blocker-cta",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "main-button",
                "blocker",
                _activeStyleVariant
              )}
              button={false}
              block="inline"
              options={link}
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "text-style-nowrap",
                  _activeStyleVariant
                )}
              >
                {label}
              </_Builtin.Paragraph>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

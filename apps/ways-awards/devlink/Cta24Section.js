"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cta24Section.module.css";

export function Cta24Section({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_aboutus24-blocker")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "section-hero-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "home24-blocker-content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "home24-hero-heading")}
            tag="div"
          >
            {"Help Create "}
            <br />
            {"‍"}
            <_Builtin.Span className={_utils.cx(_styles, "text-style-outline")}>
              {"the Best Digital event"}
            </_Builtin.Span>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "home24-hero-buttonwrapper",
              "is-custom"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "buttononclick",
                "is-navbar18-button"
              )}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "text-style-nowrap")}
              >
                {"Contact Us"}
              </_Builtin.Paragraph>
              <_Builtin.Image
                className={_utils.cx(_styles, "form-button_submit-icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d030_arrow.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "home24-blocker-bg")}
        tag="div"
      />
    </_Component>
  );
}

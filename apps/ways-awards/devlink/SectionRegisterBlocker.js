"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentChip } from "./ComponentChip";
import { ButtonIcon } from "./ButtonIcon";
import * as _utils from "./utils";
import _styles from "./SectionRegisterBlocker.module.css";

export function SectionRegisterBlocker({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-register", "s-in")}
      tag="section"
      id="register"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-vertical", "is--blocker")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "section-hero-wrapper", "is--register")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "divider",
              "is--bg-gradient-center",
              "is--register-top"
            )}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "divider",
              "is--bg-gradient-center",
              "is--register-bottom"
            )}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "register-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "register-wrapper_header",
                "is--z-index-1"
              )}
              tag="div"
            >
              <ComponentChip chipText="September 19-20, 2024" />
              <ComponentChip />
              <ComponentChip chipText="6th edition" />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer", "is--24")}
              tag="div"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "regsiter-heading")}
              tag="h2"
            >
              {"Join us at WaysConf and be part of the digital revolution."}
              <br />
              {"Buy your tickets "}
              <_Builtin.Span
                className={_utils.cx(_styles, "is--text-gradient-blue")}
              >
                {"now!"}
              </_Builtin.Span>
              <br />
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer", "is--64")}
              tag="div"
            />
            <ButtonIcon
              link={{
                href: "#",
              }}
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "register-bg")} tag="div" />
    </_Component>
  );
}

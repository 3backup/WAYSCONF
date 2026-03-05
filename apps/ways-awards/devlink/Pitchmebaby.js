"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonIcon } from "./ButtonIcon";
import * as _utils from "./utils";
import _styles from "./Pitchmebaby.module.css";

export function Pitchmebaby({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section-speakers-hero",
        "is--awards-gala",
        "s-in"
      )}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "section-hero-wrapper")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "speakers-hero-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "speakers-hero-grid_content")}
            id={_utils.cx(
              _styles,
              "w-node-_46c76477-5e3d-bf31-0673-dbbd9526a62f-9526a62c"
            )}
            tag="div"
          >
            <_Builtin.Heading tag="h2">
              {"PitchMeBaby Contest"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "is--paragraph-big",
                "is--text-color-silver"
              )}
            >
              {
                "Elevate your startup at Pitch Me Baby, the ultimate pitch contest for aspiring entrepreneurs. Refine your pitch, compete for prizes, and connect with industry experts. Make your mark in the entrepreneurial world"
              }
            </_Builtin.Paragraph>
            <ButtonIcon
              textBlockText="Read more"
              link={{
                href: "#",
              }}
            />
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "cfs-hero-image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d1b4_pitchmebaby.webp"
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "divider",
          "is--bg-gradient-center",
          "is--attendes"
        )}
        tag="div"
      />
    </_Component>
  );
}

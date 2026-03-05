"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonIcon } from "./ButtonIcon";
import * as _utils from "./utils";
import _styles from "./StartupStage.module.css";

export function StartupStage({ as: _Component = _Builtin.Block }) {
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
              "w-node-d5fafe81-5764-9054-41a7-a1b4a511c74f-a511c74c"
            )}
            tag="div"
          >
            <_Builtin.Heading tag="h2">
              {"Explore the Startup Stage Program and Speakers Now!"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "is--paragraph-big",
                "is--text-color-silver"
              )}
            >
              {
                "Discover the exciting lineup of speakers and sessions on the Startup Stage at WaysConf. Get inspired by industry experts, gain valuable insights, and learn from successful startup founders. Don't miss out on this opportunity to level up your entrepreneurial journey. Check out our Startup Stage program and speakers today!"
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
        className={_utils.cx(
          _styles,
          "cfs-hero-image",
          "is--speakers",
          "is--attendes"
        )}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d1af_2022-DesignWays-3082.webp"
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

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Ways25CommunitySlide.module.css";

export function Ways25CommunitySlide({
  as: _Component = _Builtin.Block,
  authorPortrait = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d48c_lectureCard.png",
  authorFullName = "Luis Ouriach",
  authorPosition = "Designer advocate at Figma",
  paragraph = "Our conference app helps you connect with other attendees through profile browsing, meeting scheduling, and direct messaging. Create your professional profile and join topic-based groups to make meaningful connections before, during, and after the event.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "swiper-slide", "ways25-community")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "home25-community-slide_portrait")}
        id={_utils.cx(
          _styles,
          "w-node-_2c46a2b7-11bb-01d8-ee6b-cf4aa6609a89-a6609a88"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "home25-community-slide_portrait-asset"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={authorPortrait}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "home25-community-slide_content")}
        id={_utils.cx(
          _styles,
          "w-node-_2c46a2b7-11bb-01d8-ee6b-cf4aa6609a8b-a6609a88"
        )}
        tag="div"
      >
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "ways25-text-size-40",
            "text-weight-semibold"
          )}
        >
          {paragraph}
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "home25-community-slide_author")}
        id={_utils.cx(
          _styles,
          "w-node-_2c46a2b7-11bb-01d8-ee6b-cf4aa6609a8e-a6609a88"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "ways25-text-size-24",
            "text-weight-semibold"
          )}
          tag="div"
        >
          {authorFullName}
        </_Builtin.Block>
        <_Builtin.Block tag="div">{authorPosition}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

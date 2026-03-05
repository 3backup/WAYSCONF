"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SliderFeedbackItem.module.css";

export function SliderFeedbackItem({
  as: _Component = _Builtin.Block,
  name = "Bartosz Piasecki",
  position = "Head of Marketing",
  quote = "The conference will be held in one of the largest exhibition and convention centers in Poland: EXPO Krakow.The conference will be held in one of the largest exhibition and convention centers in Poland: EXPO Krakow.",
  whereFromDate = "LinkedIn, 12.10.2022",
  photo = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528cf65_Image.webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "swiper-slide", "is--feedback-item")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "feedback-item_header")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "feedback-item_image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={photo}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "feedback-item_header-content")}
          tag="div"
        >
          <_Builtin.Heading tag="h4">{name}</_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "is--caption-small",
              "is--text-color-silver",
              "is--opacity-70"
            )}
            tag="div"
          >
            {position}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "feedback-item_content")}
        tag="div"
      >
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "is--paragraph",
            "is--text-color-silver",
            "is--opacity-80"
          )}
        >
          {quote}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "divider",
            "is--bg-gradient-white_right",
            "is--trusted"
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "divider",
            "is--bg-gradient-white_right",
            "is--feedback"
          )}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "feedback-item_footer")}
        tag="div"
      >
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "is--paragraph",
            "is--text-color-silver",
            "is--opacity-80"
          )}
        >
          {whereFromDate}
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "divider", "is--bg-gradient-white_right")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "divider",
          "is--bg-gradient-white_right",
          "is--trusted"
        )}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "divider",
          "is--bg-color-white",
          "is--trusted-vertical"
        )}
        tag="div"
      />
    </_Component>
  );
}

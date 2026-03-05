"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { PageGlobals } from "./PageGlobals";
import { CursrorSectionJuryPeople } from "./CursrorSectionJuryPeople";
import { Footer24 } from "./Footer24";
import * as _utils from "./utils";
import _styles from "./CursorJury.module.css";

export function CursorJury({
  as: _Component = _Builtin.Block,
  title1 = "waysAWARDS JURY",
  title2 = "Our expertsfrom digital industry",
  image = "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d54d_partners-vactor.svg",
  text1 = "All",
  text2 = "2025",
  text3 = "2024",
  text4 = "2023",
  text5 = "2022",
  footer24Email = "hello@waysconf.com",
}) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper-jury")} tag="div">
      <PageGlobals />
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20.jury-tabs-link%20.jury-tabs-link__icon%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%0A%20%20.jury-tabs-link.w--current%20.jury-tabs-link__icon%20%7B%0A%20%20%20%20display%3A%20block%3B%0A%20%20%7D%0A%3C%2Fstyle%3E" />
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="div">
        <_Builtin.Section
          className={_utils.cx(_styles, "section_cfs2024-hero", "is-speakers")}
          tag="section"
          grid={{
            type: "section",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "home24-hero-container",
              "is-speakers"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "home24-hero-header")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "text-size-large")}
                tag="h4"
              >
                {title1}
              </_Builtin.Heading>
              <_Builtin.Heading
                className={_utils.cx(_styles, "ways25-heading2")}
                tag="h1"
              >
                {title2}
              </_Builtin.Heading>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Section>
        <_Builtin.Block
          className={_utils.cx(_styles, "speakers-image-bg-2")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "awards-jury-hero_shape")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={image}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "section-speakers-main")}
          tag="section"
        >
          <CursrorSectionJuryPeople
            text1={text1}
            text2={text2}
            text3={text3}
            text4={text4}
            text5={text5}
          />
        </_Builtin.Block>
        <Footer24 email={footer24Email} />
      </_Builtin.Block>
    </_Component>
  );
}

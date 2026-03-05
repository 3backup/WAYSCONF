"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionAudience.module.css";

export function SectionAudience({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-sponsor24-audience", "is-border")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-large",
          "is-smaller"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sponsors24-audience-left_wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-c8da1d29-5532-abef-1400-9c9d7b22b61f-7b22b61d"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "sponsors24-heading-h2", "width-50")}
            tag="h1"
          >
            {"WAYSCONF"}
            <br />
            <_Builtin.Span className={_utils.cx(_styles, "text-style-outline")}>
              {"AUDIENCE"}
            </_Builtin.Span>
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "spacer-medium")}
            tag="div"
          />
          <_Builtin.TabsWrapper
            className={_utils.cx(_styles, "sponsors24-audience-tabs")}
            current="Tab 3"
            easing="ease"
            fadeIn={300}
            fadeOut={100}
          >
            <_Builtin.TabsMenu
              className={_utils.cx(_styles, "sponsors24-audience-tabs_menu")}
              tag="div"
            >
              <_Builtin.TabsLink
                className={_utils.cx(
                  _styles,
                  "home24-gallery-tabs_menu-link",
                  "is-bigger",
                  "is--blur"
                )}
                data-w-tab="Tab 1"
                block="inline"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "is--text-medium")}
                  tag="div"
                >
                  {"Seniority"}
                </_Builtin.Block>
              </_Builtin.TabsLink>
              <_Builtin.TabsLink
                className={_utils.cx(
                  _styles,
                  "home24-gallery-tabs_menu-link",
                  "is-bigger",
                  "is--blur"
                )}
                data-w-tab="Tab 2"
                block="inline"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "is--text-medium")}
                  tag="div"
                >
                  {"Area of activity"}
                </_Builtin.Block>
              </_Builtin.TabsLink>
              <_Builtin.TabsLink
                className={_utils.cx(
                  _styles,
                  "home24-gallery-tabs_menu-link",
                  "is-bigger",
                  "is--blur"
                )}
                data-w-tab="Tab 3"
                block="inline"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "is--text-medium")}
                  tag="div"
                >
                  {"Age stucture"}
                </_Builtin.Block>
              </_Builtin.TabsLink>
            </_Builtin.TabsMenu>
            <_Builtin.TabsContent
              className={_utils.cx(_styles, "sponsors24-audience-tabs_content")}
              tag="div"
            >
              <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
                <_Builtin.Image
                  className={_utils.cx(_styles, "is--blur")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d26e_chart1.webp"
                />
              </_Builtin.TabsPane>
              <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
                <_Builtin.Image
                  className={_utils.cx(_styles, "is--blur")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d268_chart2.webp"
                />
              </_Builtin.TabsPane>
              <_Builtin.TabsPane tag="div" data-w-tab="Tab 3">
                <_Builtin.Image
                  className={_utils.cx(_styles, "is--blur")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d2b9_chart3%20(1).webp"
                />
              </_Builtin.TabsPane>
            </_Builtin.TabsContent>
          </_Builtin.TabsWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "sposors24-audience-buttons_wrapper")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "button",
                "home24-gallery-tabs_menu-link"
              )}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Age structure"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "button",
                "home24-gallery-tabs_menu-link"
              )}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Area of activity"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "button",
                "home24-gallery-tabs_menu-link"
              )}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Seniority"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "spacer-medium",
              "width-50",
              "is--display-hidden-mobile"
            )}
            tag="div"
          />
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "is--paragraph-big",
              "width-50",
              "is--text-color-silver"
            )}
          >
            {
              "This year, we're zeroing in on an experience designed for senior professionals, with a special focus on networking and advanced learning. Introducing our program board, comprised of industry experts, we're dedicated to curating content that's both relevant and forward-thinking."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

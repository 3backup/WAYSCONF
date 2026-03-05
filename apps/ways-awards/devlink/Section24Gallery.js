"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Section24Gallery.module.css";

export function Section24Gallery({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_home24-gallery", "s-in")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.TabsWrapper
        className={_utils.cx(_styles, "home24-gallery-tabs")}
        current="2023"
        easing="ease"
        fadeIn={300}
        fadeOut={100}
      >
        <_Builtin.TabsMenu
          className={_utils.cx(_styles, "home24-gallery-tabs_menu")}
          tag="div"
        >
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "home24-gallery-tabs_menu-link")}
            data-w-tab="2023"
            block="inline"
          >
            <_Builtin.Block tag="div">{"/ 2023"}</_Builtin.Block>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "home24-gallery-tabs_menu-link")}
            data-w-tab="2022"
            block="inline"
          >
            <_Builtin.Block tag="div">{"/ 2022"}</_Builtin.Block>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "home24-gallery-tabs_menu-link")}
            data-w-tab="2021"
            block="inline"
          >
            <_Builtin.Block tag="div">{"/ 2021"}</_Builtin.Block>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "home24-gallery-tabs_menu-link")}
            data-w-tab="2019"
            block="inline"
          >
            <_Builtin.Block tag="div">{"/ 2019"}</_Builtin.Block>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "home24-gallery-tabs_menu-link")}
            data-w-tab="2018"
            block="inline"
          >
            <_Builtin.Block tag="div">{"/ 2018"}</_Builtin.Block>
          </_Builtin.TabsLink>
        </_Builtin.TabsMenu>
        <_Builtin.TabsContent
          className={_utils.cx(_styles, "home24-gallery-tabs_content")}
          tag="div"
        >
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "home24-gallery-tabs_content-panel")}
            tag="div"
            data-w-tab="2023"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home24-gallery-tabs_content-image"
              )}
              tag="div"
            />
          </_Builtin.TabsPane>
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "home24-gallery-tabs_content-panel")}
            tag="div"
            data-w-tab="2022"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home24-gallery-tabs_content-image",
                "is-2022"
              )}
              tag="div"
            />
          </_Builtin.TabsPane>
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "home24-gallery-tabs_content-panel")}
            tag="div"
            data-w-tab="2021"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home24-gallery-tabs_content-image",
                "is-2021"
              )}
              tag="div"
            />
          </_Builtin.TabsPane>
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "home24-gallery-tabs_content-panel")}
            tag="div"
            data-w-tab="2019"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home24-gallery-tabs_content-image",
                "is-2019"
              )}
              tag="div"
            />
          </_Builtin.TabsPane>
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "home24-gallery-tabs_content-panel")}
            tag="div"
            data-w-tab="2018"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home24-gallery-tabs_content-image",
                "is-2018"
              )}
              tag="div"
            />
          </_Builtin.TabsPane>
        </_Builtin.TabsContent>
      </_Builtin.TabsWrapper>
    </_Component>
  );
}

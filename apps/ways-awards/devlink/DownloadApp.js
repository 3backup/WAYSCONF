"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DownloadApp.module.css";

export function DownloadApp({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "appstore-buttons-wrapper")}
      tag="div"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "appstore-link")}
        button={false}
        block="inline"
        options={{
          href: "https://apps.apple.com/pl/app/waysconf-2024/id6504410010?l=pl",
        }}
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d3bb_google.svg"
        />
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "appstore-link")}
        button={false}
        block="inline"
        options={{
          href: "https://play.google.com/store/apps/details?id=com.gridaly.event.waysconf&hl=en_US",
          target: "_blank",
        }}
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d3bc_google2.svg"
        />
      </_Builtin.Link>
    </_Component>
  );
}

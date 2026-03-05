"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AlertLastTickets.module.css";

export function AlertLastTickets({ as: _Component = _Builtin.Paragraph }) {
  return (
    <_Component className={_utils.cx(_styles, "chip-wrapper-copy", "is-alert")}>
      {"Act quickly, just 100 tickets left! "}
      <_Builtin.Link
        button={false}
        block=""
        options={{
          href: "#",
        }}
      >
        {"Get yours"}
      </_Builtin.Link>
      {" now before they're gone! 🎫🔥"}
    </_Component>
  );
}

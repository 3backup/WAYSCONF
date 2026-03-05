"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PartyPlus1Form.module.css";

export function PartyPlus1Form({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_between-form")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-2024")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "between-form-content")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "text-weight-bold")}
            tag="h2"
          >
            {"Bring your+1 to WaysConf side events"}
          </_Builtin.Heading>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "is--paragraph-big", "opacity-60")}
            id={_utils.cx(
              _styles,
              "w-node-b0a9fa6d-54dc-2976-0091-fe183a0f96b1-3a0f96ac"
            )}
          >
            {
              "Feel free to bring along a friend or partner to any of the extra events happening during the conference. No need to worry about entry restrictions – your guest is more than welcome to join! Looking forward to seeing you there!"
            }
            <br />
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

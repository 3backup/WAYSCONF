"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DraftCode.module.css";

export function DraftCode({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "global__draft-code")}
      value="%3C!--Links%20to%20local%20servers--%3E%0A%3Clink%20rel%3D%22stylesheet%22%20href%3D%22http%3A%2F%2F127.0.0.1%3A5500%2Fimie%2Fprojekt%2Fstyle.css%22%3E%0A%3Cscript%20type%3D%22module%22%20src%3D%22http%3A%2F%2F127.0.0.1%3A5500%2Fimie%2Fprojekt%2Fscript.js%22%20defer%3E%3C%2Fscript%3E"
    />
  );
}

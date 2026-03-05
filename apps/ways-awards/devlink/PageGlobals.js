"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalCustomCode } from "./GlobalCustomCode";
import { Navbar2024New } from "./Navbar2024New";
import { AwardsNavbar } from "@waysconf/ui";
import * as _utils from "./utils";
import _styles from "./PageGlobals.module.css";

export function PageGlobals({
  as: _Component = _Builtin.Block,
  navbarNavbarBorder = true,
  banner = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-14")} tag="aside">
      <GlobalCustomCode />
      <AwardsNavbar />
    </_Component>
  );
}

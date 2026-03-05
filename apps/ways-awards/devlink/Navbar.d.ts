import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  navbarBrandLink?: Types.Basic.Link;
  navbarBorder?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

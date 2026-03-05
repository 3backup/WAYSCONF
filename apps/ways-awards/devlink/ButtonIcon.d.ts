import * as React from "react";
import * as Types from "./types";

declare function ButtonIcon(props: {
  as?: React.ElementType;
  textBlockText?: React.ReactNode;
  link?: Types.Basic.Link;
  variant?: "Base" | "smaller";
}): React.JSX.Element;

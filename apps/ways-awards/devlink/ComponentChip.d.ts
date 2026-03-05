import * as React from "react";
import * as Types from "./types";

declare function ComponentChip(props: {
  as?: React.ElementType;
  chipWrapperVisibility?: Types.Visibility.VisibilityConditions;
  chipText?: React.ReactNode;
  variant?: "Base" | "Blue" | "Teal" | "Pink" | "White";
}): React.JSX.Element;

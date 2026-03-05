import * as React from "react";
import * as Types from "./types";

declare function InfopackItem(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  icon?: Types.Asset.Image;
  fullButtonLink?: Types.Basic.Link;
  fullButtonLabel?: React.ReactNode;
  fullButtonVisibility?: Types.Visibility.VisibilityConditions;
  transparentButtonVisibility?: Types.Visibility.VisibilityConditions;
  transparentButtonLink?: Types.Basic.Link;
  transparentButtonLabel?: React.ReactNode;
}): React.JSX.Element;

import * as React from "react";
import * as Types from "./types";

declare function Agenda24Blocker(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  startTime?: React.ReactNode;
  endTime?: React.ReactNode;
  endDateVisibility?: Types.Visibility.VisibilityConditions;
  dividerVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

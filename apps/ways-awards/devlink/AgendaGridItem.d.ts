import * as React from "react";
import * as Types from "./types";

declare function AgendaGridItem(props: {
  as?: React.ElementType;
  hourStart?: React.ReactNode;
  hourEnd?: React.ReactNode;
  lectureTitle?: React.ReactNode;
  lectureSpeaker?: React.ReactNode;
  meritsPath?: React.ReactNode;
}): React.JSX.Element;

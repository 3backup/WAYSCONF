import * as React from "react";
import * as Types from "./types";

declare function Agenda24Item(props: {
  as?: React.ElementType;
  contentTimeStart?: React.ReactNode;
  contentTimeEnd?: React.ReactNode;
  contentFlagPolish?: Types.Visibility.VisibilityConditions;
  contentFlagEnglish?: Types.Visibility.VisibilityConditions;
  contentTitle?: React.ReactNode;
  contentTag?: React.ReactNode;
  contentTagVisibility?: Types.Visibility.VisibilityConditions;
  contentPath?: React.ReactNode;
  contentPathTheme?: Types.Builtin.Text;
  contentAgendaLink?: Types.Basic.Link;
  structureAgenda24GridItemMiddleAuthors?: React.ReactNode;
  structureItemSize?: Types.Builtin.Text;
}): React.JSX.Element;

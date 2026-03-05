import * as React from "react";
import * as Types from "./types";

declare function VoteItem(props: {
  as?: React.ElementType;
  projectName?: React.ReactNode;
  projectCreatorS?: React.ReactNode;
  projectVotes?: React.ReactNode;
  projectTool?: React.ReactNode;
  projectCategory?: React.ReactNode;
  projectVoteLink?: Types.Basic.Link;
  projectThumbnail?: Types.Asset.Image;
}): React.JSX.Element;

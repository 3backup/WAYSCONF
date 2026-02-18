import type { ApiProject, ApiCategory } from "./api";

export type VotingProject = ApiProject & {
  votes?: number;
  type?: string;
  noCode?: string;
  vibeCode?: string;
};

export type VotingCategory = ApiCategory & {
  projects?: number;
};

export enum FilterType {
  BY_VOTES_ASC,
  BY_VOTES_DESC,
  RANDOM,
  AZ,
  ZA,
}

export enum ProjectType {
  COMMERCIAL = "commercial",
  NON_COMMERCIAL = "non commercial",
  VIBE_CODING = "vibe coding",
  NO_CODE = "no code",
}

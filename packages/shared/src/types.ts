export type Project = {
  linkToCaseStudy: string;
  caseStudy: string;
  whyYou: unknown;
  linkRich: unknown;
  id: string;
  description: unknown;
  slug: string;
  organisation: string;
  clientName: string;
  thumbnailUrl: string | undefined;
  thumbnailUrlSecondary: string | undefined;
  thumbnailUrlThird: string | undefined;
  categories: Category[];
  votes: number;
  name: string;
  excerpt: string;
  clientTimePeriod: string;
  toolsAndFramework: string;
  team: string;
  services: string;
  link: string;
  demoLink: string;
  materialsLink: string;
  targetAudience: string;
  vibeCode: string;
  noCode: string;
  projectOutcomes: string;
  type: string;
  casestudyLink: string;
  alreadyVoted: boolean;
};

export type Category = {
  id: string;
  name: string;
  projects: number;
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

export enum ResponseCodes {
  INVALID_PARAMS = "INVALID_PARAMS",
  NOT_SUPPORTED = "NOT_SUPPORTED",
  ALREADY_VOTED = "ALREADY_VOTED",
  NEED_ACKN = "NEED_ACKN",
  NO_SUCH_PROJECT = "NO_SUCH_PROJECT",
  INVALID_EMAIL = "INVALID_EMAIL",
  SOMETHING_WENT_WRONG = "SOMETHING_WENT_WRONG",
  SUCCESS = "SUCCESS",
  RATE_LIMITED = "RATE_LIMITED",
}

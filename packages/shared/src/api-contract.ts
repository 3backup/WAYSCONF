/**
 * API path and method contract for ways-awards API.
 * Consuming apps use these with their HTTP client (fetch/axios).
 */

export const API_PATHS = {
  projectByYear: (edition: number) => `/project/year/${edition}`,
  categoriesByYear: (edition: number) => `/project/year/${edition}/categories`,
  projectBySlug: (slug: string) => `/project/slug/${slug}`,
  projectById: (id: string) => `/project/${id}`,
  vote: () => `/vote`,
  voteVerify: (hash: string, projectId: string) => `/vote/verify/${hash}/${projectId}`,
  voteEmail: () => `/vote/email-vote`,
  voteResults: () => `/vote/results`,
  voteEmails: () => `/vote/emails`,
} as const;

export type ApiPaths = typeof API_PATHS;

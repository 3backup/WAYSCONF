import type { IVoteRepository } from '../domain/ports/vote-repository.port';

export interface VoteResultItem {
  slug: string;
  project: { id: string; slug: string; [key: string]: unknown };
  confirmed: number;
  notConfirmed: number;
}

export class GetVoteResultsUseCase {
  constructor(private readonly voteRepository: IVoteRepository) {}

  async execute(): Promise<VoteResultItem[]> {
    const votes = await this.voteRepository.findAll();
    const map: Record<
      string,
      { project: { id: string; slug: string }; confirmed: number; notConfirmed: number }
    > = {};
    for (const vote of votes) {
      const project = vote.project;
      if (!project) continue;
      const slug = project.slug;
      const projectRef = { id: project.id, slug };
      if (!map[slug]) {
        map[slug] = { project: projectRef, confirmed: 0, notConfirmed: 0 };
      }
      if (vote.confirmed) {
        map[slug].confirmed += 1;
      } else {
        map[slug].notConfirmed += 1;
      }
    }
    return Object.entries(map)
      .map(([slug, v]) => ({
        slug,
        project: v.project,
        confirmed: v.confirmed,
        notConfirmed: v.notConfirmed,
      }))
      .sort((a, b) => b.confirmed - a.confirmed);
  }
}

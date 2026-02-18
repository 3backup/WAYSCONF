import type { IVoteRepository } from '../domain/ports/vote-repository.port';

export class GetVoteEmailsUseCase {
  constructor(private readonly voteRepository: IVoteRepository) {}

  async execute(): Promise<string[]> {
    return this.voteRepository.getEmails();
  }
}

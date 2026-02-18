import type { IVoteRepository } from '../domain/ports/vote-repository.port';
import { ResponseCodes } from '@waysconf/shared';

export interface ConfirmVoteInput {
  hash: string;
  projectId: string;
}

export type ConfirmVoteResult =
  | { success: true; status: ResponseCodes.SUCCESS }
  | { success: false; status: ResponseCodes };

export class ConfirmVoteUseCase {
  constructor(private readonly voteRepository: IVoteRepository) {}

  async execute(input: ConfirmVoteInput): Promise<ConfirmVoteResult> {
    const vote = await this.voteRepository.findByConfirmationHash(input.hash);
    if (!vote) {
      return { success: false, status: ResponseCodes.NO_SUCH_PROJECT };
    }
    if (vote.confirmed) {
      return { success: false, status: ResponseCodes.ALREADY_VOTED };
    }
    if (vote.project?.id !== input.projectId) {
      return { success: false, status: ResponseCodes.NO_SUCH_PROJECT };
    }
    await this.voteRepository.confirm(vote);
    return { success: true, status: ResponseCodes.SUCCESS };
  }
}

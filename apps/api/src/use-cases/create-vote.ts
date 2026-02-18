import type { IVoteRepository } from '../domain/ports/vote-repository.port';
import type { IProjectRepository } from '../domain/ports/project-repository.port';
import type { IMailer } from '../domain/ports/mailer.port';
import type { Project } from '../domain/entities/project.entity';
import { ResponseCodes } from '@waysconf/shared';

export interface CreateVoteInput {
  projectId: string;
  email: string;
  marketing?: boolean;
}

export type CreateVoteResult =
  | { success: true; status: ResponseCodes.SUCCESS }
  | { success: false; status: ResponseCodes; message?: string };

export class CreateVoteUseCase {
  constructor(
    private readonly voteRepository: IVoteRepository,
    private readonly projectRepository: IProjectRepository,
    private readonly mailer: IMailer,
    private readonly allowMultipleVotes: boolean,
  ) {}

  async execute(input: CreateVoteInput): Promise<CreateVoteResult> {
    const { projectId, email, marketing = false } = input;
    const project = await this.projectRepository.findById(projectId);
    if (!project) {
      return { success: false, status: ResponseCodes.NO_SUCH_PROJECT };
    }
    const existing = await this.voteRepository.findByProjectAndEmail(
      projectId,
      email,
      this.allowMultipleVotes,
    );
    if (existing) {
      if (!existing.confirmed) {
        return { success: false, status: ResponseCodes.NEED_ACKN };
      }
      return { success: false, status: ResponseCodes.ALREADY_VOTED };
    }
    const hash = this.generateHash();
    await this.voteRepository.create(project, email, hash, marketing);
    await this.mailer.sendVoteConfirmation(email, hash, project);
    return { success: true, status: ResponseCodes.SUCCESS };
  }

  private generateHash(): string {
    return require('crypto').randomUUID();
  }
}

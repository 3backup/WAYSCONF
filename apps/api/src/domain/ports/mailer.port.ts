import type { Project } from '../entities/project.entity';

export interface IMailer {
  sendVoteConfirmation(email: string, confirmationHash: string, project: Project): Promise<void>;
}

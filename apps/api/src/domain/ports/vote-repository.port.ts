import type { Vote } from '../entities/vote.entity';
import type { Project } from '../entities/project.entity';

export interface IVoteRepository {
  findById(id: string): Promise<Vote | null>;
  findByConfirmationHash(hash: string): Promise<Vote | null>;
  findByProjectAndEmail(projectId: string, email: string, allowMultiple?: boolean): Promise<Vote | null>;
  findAll(): Promise<Vote[]>;
  create(project: Project, email: string, confirmationHash: string, marketing: boolean): Promise<Vote>;
  confirm(vote: Vote): Promise<Vote>;
  getEmails(): Promise<string[]>;
}

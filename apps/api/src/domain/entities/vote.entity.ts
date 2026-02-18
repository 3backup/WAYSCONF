import type { Project } from './project.entity';

export type Vote = {
  id: string;
  createdAt: Date;
  marketing: boolean;
  email: string;
  confirmationHash: string;
  confirmed: boolean;
  project?: Project;
  projectId?: string;
};

import type { Vote } from '../../../domain/entities/vote.entity';
import type { Project } from '../../../domain/entities/project.entity';
import type { VoteEntity } from '../entities/vote.entity';
import type { ProjectEntity } from '../entities/project.entity';
import { toDomainProject } from './project.mapper';

export function toDomainVote(
  entity: VoteEntity,
  projectEntity?: ProjectEntity | null,
): Vote {
  const project: Project | undefined =
    projectEntity != null ? toDomainProject(projectEntity) : undefined;
  return {
    id: entity.id,
    createdAt: entity.createdAt,
    marketing: entity.marketing,
    email: entity.email,
    confirmationHash: entity.confirmationHash,
    confirmed: entity.confirmed,
    ...(project != null && { project, projectId: project.id }),
  };
}

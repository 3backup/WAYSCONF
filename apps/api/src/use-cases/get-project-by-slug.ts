import type { IProjectRepository } from '../domain/ports/project-repository.port';
import type { Project } from '../domain/entities/project.entity';

export interface GetProjectBySlugInput {
  slug: string;
  edition: number;
}

export class GetProjectBySlugUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(input: GetProjectBySlugInput): Promise<Project | null> {
    return this.projectRepository.findBySlug(input.slug, input.edition);
  }
}

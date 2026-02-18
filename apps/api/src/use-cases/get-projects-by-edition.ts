import type { IProjectRepository } from '../domain/ports/project-repository.port';
import type { Project } from '../domain/entities/project.entity';

export interface GetProjectsByEditionInput {
  edition: number;
}

export class GetProjectsByEditionUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(input: GetProjectsByEditionInput): Promise<Project[]> {
    return this.projectRepository.findAllByEdition(input.edition);
  }
}

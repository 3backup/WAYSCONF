import type { IProjectRepository } from '../domain/ports/project-repository.port';
import type { Category } from '../domain/entities/category.entity';

export interface GetCategoriesByEditionInput {
  edition: number;
}

export class GetCategoriesByEditionUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(input: GetCategoriesByEditionInput): Promise<Category[]> {
    return this.projectRepository.findAllCategoriesByEdition(input.edition);
  }
}

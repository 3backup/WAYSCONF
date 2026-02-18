import type { Project } from '../entities/project.entity';
import type { Category } from '../entities/category.entity';

export interface IProjectRepository {
  findById(id: string): Promise<Project | null>;
  findBySlug(slug: string, edition: number): Promise<Project | null>;
  findAllByEdition(edition: number): Promise<Project[]>;
  findAllCategoriesByEdition(edition: number): Promise<Category[]>;
  save(project: Partial<Project>): Promise<Project>;
}

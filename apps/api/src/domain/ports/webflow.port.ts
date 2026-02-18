import type { Project } from '../entities/project.entity';
import type { Category } from '../entities/category.entity';

export interface IWebflowClient {
  getCategories(collectionId: string): Promise<Category[]>;
  getProjects(collectionId: string, edition: number): Promise<Project[]>;
}

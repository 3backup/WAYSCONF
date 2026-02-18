import { Injectable } from '@nestjs/common';
import type { IWebflowClient } from '../../domain/ports/webflow.port';
import type { Project } from '../../domain/entities/project.entity';
import type { Category } from '../../domain/entities/category.entity';

@Injectable()
export class WebflowAdapter implements IWebflowClient {
  async getCategories(_collectionId: string): Promise<Category[]> {
    // Stub: sync from Webflow API when needed; for now return empty
    return [];
  }

  async getProjects(_collectionId: string, _edition: number): Promise<Project[]> {
    // Stub: sync from Webflow API when needed; for now return empty
    return [];
  }
}

import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { GetProjectsByEditionUseCase } from '../../../use-cases/get-projects-by-edition';
import { GetProjectBySlugUseCase } from '../../../use-cases/get-project-by-slug';
import { GetCategoriesByEditionUseCase } from '../../../use-cases/get-categories-by-edition';

@Controller()
export class ProjectsController {
  constructor(
    private readonly getProjectsByEdition: GetProjectsByEditionUseCase,
    private readonly getProjectBySlug: GetProjectBySlugUseCase,
    private readonly getCategoriesByEdition: GetCategoriesByEditionUseCase,
  ) {}

  @Get('project/year/:edition')
  async getByYear(@Param('edition', ParseIntPipe) edition: number) {
    return this.getProjectsByEdition.execute({ edition });
  }

  @Get('project/year/:edition/categories')
  async getCategoriesByYear(@Param('edition', ParseIntPipe) edition: number) {
    return this.getCategoriesByEdition.execute({ edition });
  }

  @Get('project/slug/:slug')
  async getBySlug(
    @Param('slug') slug: string,
    @Query('edition') editionStr?: string,
  ) {
    const editionNum = editionStr != null ? parseInt(editionStr, 10) : 2026;
    const project = await this.getProjectBySlug.execute({ slug, edition: editionNum });
    if (!project) {
      throw new NotFoundException();
    }
    return project;
  }
}

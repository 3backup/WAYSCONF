import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import type { IProjectRepository } from '../../../domain/ports/project-repository.port';
import type { Project } from '../../../domain/entities/project.entity';
import type { Category } from '../../../domain/entities/category.entity';
import { ProjectEntity } from '../entities/project.entity';
import { CategoryEntity } from '../entities/category.entity';
import { toDomainProject } from '../mappers/project.mapper';

@Injectable()
export class TypeOrmProjectRepository implements IProjectRepository {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepo: Repository<ProjectEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepo: Repository<CategoryEntity>,
  ) {}

  async findById(id: string): Promise<Project | null> {
    const entity = await this.projectRepo.findOne({
      where: { id },
      relations: { categories: true },
    });
    return entity ? toDomainProject(entity) : null;
  }

  async findBySlug(slug: string, edition: number): Promise<Project | null> {
    const entity = await this.projectRepo.findOne({
      where: { slug, edition },
      relations: { categories: true },
    });
    return entity ? toDomainProject(entity) : null;
  }

  async findAllByEdition(edition: number): Promise<Project[]> {
    const entities = await this.projectRepo.find({
      where: { edition, isArchived: false, isDraft: false },
      relations: { categories: true },
      order: { name: 'ASC' },
    });
    return entities.map((e) => toDomainProject(e));
  }

  async findAllCategoriesByEdition(edition: number): Promise<Category[]> {
    const entities = await this.categoryRepo
      .createQueryBuilder('c')
      .innerJoin('c.projects', 'p', 'p.edition = :edition', { edition })
      .where('p.isArchived = false AND p.isDraft = false')
      .distinct(true)
      .orderBy('c.name', 'ASC')
      .getMany();
    return entities.map((e) => ({
      id: e.id,
      createdAt: e.createdAt,
      name: e.name,
      externalId: e.externalId,
    }));
  }

  async save(project: Partial<Project>): Promise<Project> {
    const entity = await this.projectRepo.save(project as Partial<ProjectEntity>);
    const withRelations = await this.projectRepo.findOne({
      where: { id: entity.id },
      relations: { categories: true },
    });
    return toDomainProject(withRelations ?? entity);
  }
}

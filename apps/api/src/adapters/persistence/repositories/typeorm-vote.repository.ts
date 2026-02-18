import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { IVoteRepository } from '../../../domain/ports/vote-repository.port';
import type { Vote } from '../../../domain/entities/vote.entity';
import type { Project } from '../../../domain/entities/project.entity';
import { VoteEntity } from '../entities/vote.entity';
import { ProjectEntity } from '../entities/project.entity';
import { toDomainVote } from '../mappers/vote.mapper';
import { toDomainProject } from '../mappers/project.mapper';

@Injectable()
export class TypeOrmVoteRepository implements IVoteRepository {
  constructor(
    @InjectRepository(VoteEntity)
    private readonly voteRepo: Repository<VoteEntity>,
    @InjectRepository(ProjectEntity)
    private readonly projectRepo: Repository<ProjectEntity>,
  ) {}

  async findById(id: string): Promise<Vote | null> {
    const entity = await this.voteRepo.findOne({
      where: { id },
      relations: { project: true },
    });
    return entity ? toDomainVote(entity, entity.project) : null;
  }

  async findByConfirmationHash(hash: string): Promise<Vote | null> {
    const entity = await this.voteRepo.findOne({
      where: { confirmationHash: hash },
      relations: { project: true },
    });
    return entity ? toDomainVote(entity, entity.project) : null;
  }

  async findByProjectAndEmail(
    projectId: string,
    email: string,
    allowMultiple?: boolean,
  ): Promise<Vote | null> {
    if (allowMultiple === true) {
      return null;
    }
    const entity = await this.voteRepo.findOne({
      where: { project: { id: projectId }, email },
      relations: { project: true },
    });
    return entity ? toDomainVote(entity, entity.project) : null;
  }

  async findAll(): Promise<Vote[]> {
    const entities = await this.voteRepo.find({
      relations: { project: true },
      order: { createdAt: 'DESC' },
    });
    return entities.map((e) => toDomainVote(e, e.project));
  }

  async create(
    project: Project,
    email: string,
    confirmationHash: string,
    marketing: boolean,
  ): Promise<Vote> {
    const projectEntity = await this.projectRepo.findOne({
      where: { id: project.id },
    });
    if (!projectEntity) {
      throw new Error(`Project ${project.id} not found`);
    }
    const entity = this.voteRepo.create({
      project: projectEntity,
      email,
      confirmationHash,
      marketing,
      confirmed: false,
    });
    const saved = await this.voteRepo.save(entity);
    const withProject = await this.voteRepo.findOne({
      where: { id: saved.id },
      relations: { project: true },
    });
    return toDomainVote(withProject ?? saved, withProject?.project ?? projectEntity);
  }

  async confirm(vote: Vote): Promise<Vote> {
    const entity = await this.voteRepo.findOne({
      where: { id: vote.id },
      relations: { project: true },
    });
    if (!entity) {
      throw new Error(`Vote ${vote.id} not found`);
    }
    entity.confirmed = true;
    const saved = await this.voteRepo.save(entity);
    return toDomainVote(saved, saved.project);
  }

  async getEmails(): Promise<string[]> {
    const rows = await this.voteRepo
      .createQueryBuilder('v')
      .select('DISTINCT v.email')
      .getRawMany<{ email: string }>();
    return rows.map((r) => r.email);
  }
}

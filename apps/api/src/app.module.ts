import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './infrastructure/config/env';
import { ProjectEntity } from './adapters/persistence/entities/project.entity';
import { CategoryEntity } from './adapters/persistence/entities/category.entity';
import { VoteEntity } from './adapters/persistence/entities/vote.entity';
import { UserEntity } from './adapters/persistence/entities/user.entity';
import { TypeOrmProjectRepository } from './adapters/persistence/repositories/typeorm-project.repository';
import { TypeOrmVoteRepository } from './adapters/persistence/repositories/typeorm-vote.repository';
import { MailerAdapter } from './adapters/http/mailer.adapter';
import { WebflowAdapter } from './adapters/http/webflow.adapter';
import { ProjectsController } from './adapters/http/controllers/projects.controller';
import { VotesController } from './adapters/http/controllers/votes.controller';
import { CreateVoteUseCase } from './use-cases/create-vote';
import { ConfirmVoteUseCase } from './use-cases/confirm-vote';
import { GetProjectsByEditionUseCase } from './use-cases/get-projects-by-edition';
import { GetProjectBySlugUseCase } from './use-cases/get-project-by-slug';
import { GetCategoriesByEditionUseCase } from './use-cases/get-categories-by-edition';
import { GetVoteResultsUseCase } from './use-cases/get-vote-results';
import { GetVoteEmailsUseCase } from './use-cases/get-vote-emails';
import type { IProjectRepository } from './domain/ports/project-repository.port';
import type { IVoteRepository } from './domain/ports/vote-repository.port';
import type { IMailer } from './domain/ports/mailer.port';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: env.databaseUrl,
      entities: [ProjectEntity, CategoryEntity, VoteEntity, UserEntity],
      synchronize: false,
      logging: env.nodeEnv === 'development',
    }),
    TypeOrmModule.forFeature([ProjectEntity, CategoryEntity, VoteEntity, UserEntity]),
  ],
  controllers: [ProjectsController, VotesController],
  providers: [
    TypeOrmProjectRepository,
    TypeOrmVoteRepository,
    MailerAdapter,
    WebflowAdapter,
    {
      provide: 'IProjectRepository',
      useExisting: TypeOrmProjectRepository,
    },
    {
      provide: 'IVoteRepository',
      useExisting: TypeOrmVoteRepository,
    },
    {
      provide: 'IMailer',
      useExisting: MailerAdapter,
    },
    {
      provide: CreateVoteUseCase,
      useFactory: (
        voteRepo: IVoteRepository,
        projectRepo: IProjectRepository,
        mailer: IMailer,
      ) =>
        new CreateVoteUseCase(
          voteRepo,
          projectRepo,
          mailer,
          env.allowMultipleVotes,
        ),
      inject: [
        { token: 'IVoteRepository', optional: false },
        { token: 'IProjectRepository', optional: false },
        { token: 'IMailer', optional: false },
      ],
    },
    {
      provide: ConfirmVoteUseCase,
      useFactory: (voteRepo: IVoteRepository) => new ConfirmVoteUseCase(voteRepo),
      inject: [{ token: 'IVoteRepository', optional: false }],
    },
    {
      provide: GetProjectsByEditionUseCase,
      useFactory: (projectRepo: IProjectRepository) =>
        new GetProjectsByEditionUseCase(projectRepo),
      inject: [{ token: 'IProjectRepository', optional: false }],
    },
    {
      provide: GetProjectBySlugUseCase,
      useFactory: (projectRepo: IProjectRepository) =>
        new GetProjectBySlugUseCase(projectRepo),
      inject: [{ token: 'IProjectRepository', optional: false }],
    },
    {
      provide: GetCategoriesByEditionUseCase,
      useFactory: (projectRepo: IProjectRepository) =>
        new GetCategoriesByEditionUseCase(projectRepo),
      inject: [{ token: 'IProjectRepository', optional: false }],
    },
    {
      provide: GetVoteResultsUseCase,
      useFactory: (voteRepo: IVoteRepository) =>
        new GetVoteResultsUseCase(voteRepo),
      inject: [{ token: 'IVoteRepository', optional: false }],
    },
    {
      provide: GetVoteEmailsUseCase,
      useFactory: (voteRepo: IVoteRepository) =>
        new GetVoteEmailsUseCase(voteRepo),
      inject: [{ token: 'IVoteRepository', optional: false }],
    },
  ],
})
export class AppModule {}

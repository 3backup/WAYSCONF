import { DataSource } from 'typeorm';
import { env } from '../config/env';
import { ProjectEntity } from '../../adapters/persistence/entities/project.entity';
import { CategoryEntity } from '../../adapters/persistence/entities/category.entity';
import { VoteEntity } from '../../adapters/persistence/entities/vote.entity';
import { UserEntity } from '../../adapters/persistence/entities/user.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: env.databaseUrl,
  entities: [ProjectEntity, CategoryEntity, VoteEntity, UserEntity],
  migrations: [__dirname + '/migrations/1700000000000-InitialSchema.js'],
  synchronize: false,
  logging: env.nodeEnv === 'development',
});

export default AppDataSource;

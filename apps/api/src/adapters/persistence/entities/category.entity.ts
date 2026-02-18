import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProjectEntity } from './project.entity';

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name!: string;

  @Column({ type: 'varchar', length: 300 })
  externalId!: string;

  @ManyToMany(() => ProjectEntity, (project) => project.categories)
  projects?: ProjectEntity[];
}

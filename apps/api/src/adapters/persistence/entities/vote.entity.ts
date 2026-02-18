import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProjectEntity } from './project.entity';

@Entity({ name: 'vote' })
export class VoteEntity extends BaseEntity {
  @Column({ type: 'boolean', default: false })
  marketing!: boolean;

  @Column({ type: 'varchar', length: 300 })
  email!: string;

  @Column({ type: 'varchar', length: 300 })
  confirmationHash!: string;

  @Column({ type: 'boolean', default: false })
  confirmed!: boolean;

  @ManyToOne(() => ProjectEntity, (project) => project.votes)
  @JoinColumn()
  project!: ProjectEntity;
}

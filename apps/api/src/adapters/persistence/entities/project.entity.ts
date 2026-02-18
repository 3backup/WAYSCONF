import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CategoryEntity } from './category.entity';
import { VoteEntity } from './vote.entity';

@Entity({ name: 'project' })
export class ProjectEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  externalId!: string;

  @Column({ type: 'varchar', length: 500 })
  name!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'text', nullable: true })
  excerpt!: string | null;

  @Column({ type: 'varchar', length: 300 })
  slug!: string;

  @Column({ type: 'boolean' })
  isArchived!: boolean;

  @Column({ type: 'boolean' })
  isDraft!: boolean;

  @Column({ type: 'varchar', length: 300 })
  contactPersonEmail!: string;

  @Column({ type: 'text', nullable: true })
  linkPrimaryRichText!: string | null;

  @Column({ type: 'boolean' })
  isCommercial!: boolean;

  @Column({ type: 'varchar', length: 300, nullable: true })
  linkToCaseStudyPlain!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  clientName!: string | null;

  @Column({ type: 'text' })
  toolsAndFramework!: string;

  @Column({ type: 'text' })
  caseStudy!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  clientTimePeriod!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  organisation!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  titleOfTheProject!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  services!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  contactPersonNumber!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  thumbnailUrl!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  thumbnailUrlSecondary!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  thumbnailUrlThird!: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  year!: string | null;

  @Column({ type: 'text' })
  team!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  linkRichText!: string | null;

  @Column({ type: 'varchar', length: 5000 })
  whyYou!: string;

  @Column({ type: 'varchar', length: 300, nullable: true, name: 'linkToCaseStudy' })
  linkToCaseStudyUrl!: string | null;

  @Column({ type: 'int' })
  edition!: number;

  @ManyToMany(() => CategoryEntity, (category) => category.projects)
  @JoinTable()
  categories!: CategoryEntity[];

  @OneToMany(() => VoteEntity, (vote) => vote.project)
  votes!: VoteEntity[];
}

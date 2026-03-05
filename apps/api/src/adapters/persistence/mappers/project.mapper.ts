import type { Project } from '../../../domain/entities/project.entity';
import type { ProjectEntity } from '../entities/project.entity';

export function toDomainProject(entity: ProjectEntity): Project {
  const linkToCaseStudy =
    (entity as { linkToCaseStudyUrl?: string }).linkToCaseStudyUrl ?? entity.linkToCaseStudyPlain ?? null;
  return {
    id: entity.id,
    createdAt: entity.createdAt,
    externalId: entity.externalId,
    name: entity.name,
    description: entity.description,
    excerpt: entity.excerpt ?? null,
    slug: entity.slug,
    isArchived: entity.isArchived,
    isDraft: entity.isDraft,
    contactPersonEmail: entity.contactPersonEmail,
    linkPrimaryRichText: entity.linkPrimaryRichText ?? null,
    isCommercial: entity.isCommercial,
    linkToCaseStudyPlain: entity.linkToCaseStudyPlain ?? null,
    clientName: entity.clientName ?? null,
    toolsAndFramework: entity.toolsAndFramework,
    caseStudy: entity.caseStudy,
    clientTimePeriod: entity.clientTimePeriod ?? null,
    organisation: entity.organisation ?? null,
    titleOfTheProject: entity.titleOfTheProject ?? null,
    services: entity.services ?? null,
    contactPersonNumber: entity.contactPersonNumber ?? null,
    link: entity.link ?? null,
    demoLink: entity.demoLink ?? null,
    materialsLink: entity.materialsLink ?? null,
    thumbnailUrl: entity.thumbnailUrl ?? null,
    thumbnailUrlSecondary: entity.thumbnailUrlSecondary ?? null,
    thumbnailUrlThird: entity.thumbnailUrlThird ?? null,
    year: entity.year ?? null,
    team: entity.team,
    linkRichText: entity.linkRichText ?? null,
    whyYou: entity.whyYou,
    targetAudience: entity.targetAudience ?? null,
    projectOutcomes: entity.projectOutcomes ?? null,
    vibeCode: entity.vibeCode ?? null,
    noCode: entity.noCode ?? null,
    type: entity.type ?? null,
    casestudyLink: entity.casestudyLink ?? null,
    linkToCaseStudy,
    edition: entity.edition,
    categories: entity.categories?.map((c) => ({ id: c.id, createdAt: c.createdAt, name: c.name, externalId: c.externalId })),
    // votes left undefined; load via vote repository when needed
  };
}

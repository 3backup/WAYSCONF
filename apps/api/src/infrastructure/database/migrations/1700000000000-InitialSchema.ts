import type { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1700000000000 implements MigrationInterface {
  name = 'InitialSchema1700000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "name" character varying(300) NOT NULL,
        "email" character varying(300) NOT NULL,
        CONSTRAINT "PK_user" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE "category" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "name" character varying(300) NOT NULL,
        "externalId" character varying(300) NOT NULL,
        CONSTRAINT "PK_category" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE "project" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "externalId" character varying(300) NOT NULL,
        "name" character varying(500) NOT NULL,
        "description" text NOT NULL,
        "excerpt" text,
        "slug" character varying(300) NOT NULL,
        "isArchived" boolean NOT NULL,
        "isDraft" boolean NOT NULL,
        "contactPersonEmail" character varying(300) NOT NULL,
        "linkPrimaryRichText" text,
        "isCommercial" boolean NOT NULL,
        "linkToCaseStudyPlain" character varying(300),
        "clientName" character varying(300),
        "toolsAndFramework" text NOT NULL,
        "caseStudy" text NOT NULL,
        "clientTimePeriod" character varying(300),
        "organisation" character varying(300),
        "titleOfTheProject" character varying(300),
        "services" character varying(300),
        "contactPersonNumber" character varying(300),
        "thumbnailUrl" character varying(300),
        "thumbnailUrlSecondary" character varying(300),
        "thumbnailUrlThird" character varying(300),
        "year" character varying(300),
        "team" text NOT NULL,
        "linkRichText" character varying(300),
        "whyYou" character varying(5000) NOT NULL,
        "linkToCaseStudy" character varying(300),
        "edition" integer NOT NULL,
        CONSTRAINT "PK_project" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE "vote" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "marketing" boolean NOT NULL DEFAULT false,
        "email" character varying(300) NOT NULL,
        "confirmationHash" character varying(300) NOT NULL,
        "confirmed" boolean NOT NULL DEFAULT false,
        "projectId" uuid,
        CONSTRAINT "PK_vote" PRIMARY KEY ("id"),
        CONSTRAINT "FK_vote_project" FOREIGN KEY ("projectId") REFERENCES "project"("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE "project_categories_category" (
        "projectId" uuid NOT NULL,
        "categoryId" uuid NOT NULL,
        CONSTRAINT "PK_project_categories_category" PRIMARY KEY ("projectId", "categoryId"),
        CONSTRAINT "FK_project_categories_category_project" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE,
        CONSTRAINT "FK_project_categories_category_category" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "project_categories_category"`);
    await queryRunner.query(`DROP TABLE "vote"`);
    await queryRunner.query(`DROP TABLE "project"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}

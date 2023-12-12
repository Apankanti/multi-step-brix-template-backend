import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1702372658077 implements MigrationInterface {
    name = 'NewMigrations1702372658077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usersdata" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "number" character varying NOT NULL, "email" character varying NOT NULL, "companyName" character varying NOT NULL, "selectedService" character varying NOT NULL, "projectBudget" character varying NOT NULL, "requested_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_45d85e0ae2562d3939028f207e5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usersdata"`);
    }

}

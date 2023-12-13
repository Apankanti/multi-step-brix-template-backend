import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1702372890876 implements MigrationInterface {
    name = 'NewMigrations1702372890876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "number" character varying NOT NULL, "email" character varying NOT NULL, "companyName" character varying NOT NULL, "selectedService" character varying NOT NULL, "projectBudget" character varying NOT NULL, "requested_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

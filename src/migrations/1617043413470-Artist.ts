import {MigrationInterface, QueryRunner} from "typeorm";

export class Artist1617043413470 implements MigrationInterface {
    name = 'Artist1617043413470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "artist" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "artist"`);
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfessionalExperiencesComments1639959404171 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "professionalExperiences_comments",

        columns: [
          { name: "proEx_id", type: "uuid" },

          { name: "comments_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "proEx_comments_fk",
            columnNames: ["proEx_id"],
            referencedTableName: "professionalExperiences",
            referencedColumnNames: ["id"],
          },
          {
            name: "comments_proEx_fk",
            columnNames: ["comments_id"],
            referencedTableName: "comments",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("professionalExperiences_comments");
  }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEducationAndCertificationsComments1639959427204 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "educationAndCertifications_comments",

        columns: [
          { name: "educationCt_id", type: "uuid" },

          { name: "comments_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "educationCt_comments_fk",
            columnNames: ["educationCt_id"],
            referencedTableName: "educationAndCertifications",
            referencedColumnNames: ["id"],
          },
          {
            name: "comments_educationCt_fk",
            columnNames: ["comments_id"],
            referencedTableName: "comments",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("educationAndCertifications_comments");
  }
}

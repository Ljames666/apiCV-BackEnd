import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEducationAndCertificationsFiles1639959370880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "educationAndCertifications_files",

        columns: [
          { name: "educationCt_id", type: "uuid" },

          { name: "file_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "educationCt_file_fk",
            columnNames: ["educationCt_id"],
            referencedTableName: "educationAndCertifications",
            referencedColumnNames: ["id"],
          },
          {
            name: "file_educationCt_fk",
            columnNames: ["file_id"],
            referencedTableName: "files",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("educationAndCertifications_files");
  }
}

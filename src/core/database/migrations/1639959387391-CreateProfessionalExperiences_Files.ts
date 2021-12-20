import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfessionalExperiencesFiles1639959387391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "professionalExperiences_files",

        columns: [
          { name: "proEx_id", type: "uuid" },

          { name: "file_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "proEx_file_fk",
            columnNames: ["proEx_id"],
            referencedTableName: "professionalExperiences",
            referencedColumnNames: ["id"],
          },
          {
            name: "file_proEx_fk",
            columnNames: ["file_id"],
            referencedTableName: "files",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("professionalExperiences_files");
  }
}

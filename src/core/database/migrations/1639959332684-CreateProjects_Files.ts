import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProjectsFiles1639959332684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "projects_files",

        columns: [
          { name: "project_id", type: "uuid" },

          { name: "file_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "project_file_fk",
            columnNames: ["project_id"],
            referencedTableName: "projects",
            referencedColumnNames: ["id"],
          },
          {
            name: "file_project_fk",
            columnNames: ["file_id"],
            referencedTableName: "files",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("projects_files");
  }
}

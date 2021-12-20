import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSkillsFiles1639959351373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "skills_files",

        columns: [
          { name: "skill_id", type: "uuid" },

          { name: "file_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "skill_file_fk",
            columnNames: ["skill_id"],
            referencedTableName: "skills",
            referencedColumnNames: ["id"],
          },
          {
            name: "file_skill_fk",
            columnNames: ["file_id"],
            referencedTableName: "files",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("skills_files");
  }
}

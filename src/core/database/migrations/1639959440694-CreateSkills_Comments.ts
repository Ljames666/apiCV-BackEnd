import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSkillsComments1639959440694 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "skills_comments",

        columns: [
          { name: "skill_id", type: "uuid" },

          { name: "comments_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "skill_comments_fk",
            columnNames: ["skill_id"],
            referencedTableName: "skills",
            referencedColumnNames: ["id"],
          },
          {
            name: "comments_skill_fk",
            columnNames: ["comments_id"],
            referencedTableName: "comments",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("skills_comments");
  }
}

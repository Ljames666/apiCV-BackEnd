import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProjectsComments1639959453760 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "project_comments",

        columns: [
          { name: "project_id", type: "uuid" },

          { name: "comments_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "projects_comments_fk",
            columnNames: ["project_id"],
            referencedTableName: "projects",
            referencedColumnNames: ["id"],
          },
          {
            name: "comments_projects_fk",
            columnNames: ["comments_id"],
            referencedTableName: "comments",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("projects_comments");
  }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProjects1639946367233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "projects",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "title", type: "varchar" },

          { name: "description", type: "varchar" },

          { name: "Date", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "project_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("projects");
  }
}

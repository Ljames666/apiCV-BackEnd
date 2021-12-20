import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSkills1639946322580 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "skills",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "title", type: "varchar" },

          { name: "description", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "skill_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("skills");
  }
}

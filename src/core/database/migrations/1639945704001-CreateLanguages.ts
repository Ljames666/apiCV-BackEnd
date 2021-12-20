import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLanguages1639945704001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "languages",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "name", type: "varchar" },

          { name: "level", type: "varchar" },

          { name: "description", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "language_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("languages");
  }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1639944093325 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "name", type: "varchar", isUnique: true },

          { name: "title", type: "varchar" },

          { name: "abstract", type: "varchar" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}

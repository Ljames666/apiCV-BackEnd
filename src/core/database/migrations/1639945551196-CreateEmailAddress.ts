import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmailAddress1639945551196 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "emailAddress",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "type", type: "varchar" },

          { name: "email", type: "varchar", isUnique: true },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "email_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("emailAddress");
  }
}

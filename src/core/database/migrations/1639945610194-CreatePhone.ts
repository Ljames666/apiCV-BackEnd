import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePhone1639945610194 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "phone",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "type", type: "varchar" },

          { name: "phoneNumber", type: "numeric", isUnique: true },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "phone_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("phone");
  }
}

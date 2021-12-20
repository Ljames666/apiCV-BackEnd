import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1639945492783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "street", type: "varchar" },

          { name: "number", type: "numeric" },

          { name: "city", type: "varchar" },

          { name: "state", type: "varchar" },

          { name: "country", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "address_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address");
  }
}

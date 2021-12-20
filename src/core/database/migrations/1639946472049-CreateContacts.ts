import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateContacts1639946472049 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "contacts",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "name", type: "varchar" },

          { name: "email", type: "varchar" },

          { name: "phone", type: "numeric" },

          { name: "message", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "contacts_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("contacts");
  }
}

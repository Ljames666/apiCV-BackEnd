import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSocialNetworks1639945778714 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "socialNetworks",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "name", type: "varchar" },

          { name: "url", type: "numeric" },

          { name: "icon", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "socialNetworks_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("socialNetworks");
  }
}

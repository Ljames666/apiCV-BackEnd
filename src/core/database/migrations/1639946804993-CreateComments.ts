import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateComments1639946804993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comments",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "name_user", type: "varchar" },

          { name: "message", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "comments_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("comments");
  }
}

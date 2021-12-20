import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFiles1639947030289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "files",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "title", type: "varchar" },

          { name: "description", type: "varchar" },

          { name: "file_url", type: "varchar" },

          { name: "type", type: "varchar" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("files");
  }
}

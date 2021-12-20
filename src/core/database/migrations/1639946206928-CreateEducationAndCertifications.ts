import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEducationAndCertifications1639946206928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "educationAndCertifications",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "title", type: "varchar" },

          { name: "institute", type: "varchar" },

          { name: "city", type: "varchar" },

          { name: "country", type: "varchar" },

          { name: "description", type: "varchar" },

          { name: "Date", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "education_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("educationAndCertifications");
  }
}

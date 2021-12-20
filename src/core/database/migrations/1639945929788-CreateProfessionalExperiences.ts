import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfessionalExperiences1639945929788 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "professionalExperiences",

        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "company", type: "varchar" },

          { name: "position", type: "varchar" },

          { name: "description", type: "varchar" },

          { name: "city", type: "varchar" },

          { name: "country", type: "varchar" },

          { name: "Date", type: "varchar" },

          { name: "user_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "professinalExperiences_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("professionalExperiences");
  }
}

import { createConnection, getConnection as getConnectionTypeORM } from "typeorm";

export const initConnection = async () =>
  await createConnection({
    type: "postgres",
    host: "ec2-34-198-223-125.compute-1.amazonaws.com",
    port: 5432,
    username: "hrixcsbjefrpfk",
    password: "7029940c6a4e130de6442393f5523061af559f36f4b9f11e65625af861a84b5f",
    database: "d57dr2p40a3jtd",
    schema: "public",
    entities: ["src/core/models/*.ts"],
    migrations: ["src/core/database/migrations/*.ts"],

    cli: {
      entitiesDir: "src/core/models",
      migrationsDir: "src/core/database/migrations",
    },
    synchronize: false,
    logging: true,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });

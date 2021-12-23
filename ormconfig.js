require("dotenv/config");

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: ["./dist/core/models/*.js"],
  migrations: ["./dist/core/database/migrations/*.js"],
  cli: {
    entitiesDir: "./dist/core/data/database/entities",
    migrationsDir: "./dist/core/data/database/migrations",
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

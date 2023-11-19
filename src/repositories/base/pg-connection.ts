import { DataSource } from "typeorm";

export const db = new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  migrations: ['/path/to/your/migrations'],
  entities: ['/path/to/your/entities'],
  synchronize: false,
});

import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "dima123",
  host: "localhost",
  port: 5432,
  database: "football_app",
});

export { pool };

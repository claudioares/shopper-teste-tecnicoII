import { Pool } from "pg";

const pool = new Pool({
  host: 'postgres-db',
  port: 5432,
  user: 'user',
  password: 'password',
  database: 'mydb',
});

export default pool;

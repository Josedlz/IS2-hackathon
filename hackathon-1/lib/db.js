import { Pool } from "pg";

let conn;

if(!conn){
  conn = new Pool({
    user: "user",
    password: "pass",
    host: "database",
    port: "5432",
    database: "postgres"
  })
}

export default conn

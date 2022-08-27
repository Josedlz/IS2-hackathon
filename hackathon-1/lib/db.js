// db.js
import { Pool } from "pg";

// const sql = postgres({ /* options */ }) // will use psql environment variables

let conn;

if(!conn){
  conn = new Pool({
    user: "user",
    password: "pass",
    host: "database_postgres_image",
    port: "5431",
    database: "postgres"
  })
}

export default conn

// // db.js
// import postgres from 'postgres'

// const sql = postgres({ /* options */ }) // will use psql environment variables

// export default sql
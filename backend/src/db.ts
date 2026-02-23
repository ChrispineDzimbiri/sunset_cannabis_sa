import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cannabis_store",
  waitForConnections: true,
  connectionLimit: 10,
});

console.log("Connected to MySQL database");

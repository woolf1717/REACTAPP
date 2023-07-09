import mysql from "mysql2/promise";
import fs from "fs";
export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "mydb",
    user: "root",
    password: "haslo123",
  });
  try {
    const query = `SELECT product_id, name, starsprops FROM products`;
    const values = [];
    const [data] = await connection.execute(query, values);
    connection.end();
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

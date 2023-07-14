import { query } from "./../../lib/db"

export default async function handler(req, res) {
const id = req.body.id;
  try {
    const querySql = `SELECT product_id, src, photoOne, photoTwo, photoThree,  name, starsprops, price, count, alt, descr, fulldescr FROM products WHERE product_id = ?`;
    const valuesParams = [id];
    const data = await query({ query: querySql, values: valuesParams});
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// export const config = {
//   api: {
//     externalResolver: true,
//   },
// };
// Credentials to online DB. 
// https://www.phpmyadmin.co/import.php
// host: "sql8.freesqldatabase.com",
// database: "sql8631640",
// user: "sql8631640",
// password: "T6Ba8T564v",
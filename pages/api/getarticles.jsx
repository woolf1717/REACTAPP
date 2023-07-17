import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const querySql = `SELECT id, title, author, body, imgUrl FROM posts`;

    const data = await query({ query: querySql });

    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

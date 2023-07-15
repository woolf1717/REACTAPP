import { query } from "../../lib/db"

export default async function handler(req, res) {
  try {
    const querySql = `SELECT username, email, password, phonenumber, gender, birthyear, birthmonth, birthday, user_type FROM users`;

    const data = await query({ query: querySql});
            
    const products = data

    res.status(200).json({products:data});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
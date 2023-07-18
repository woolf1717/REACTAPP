import { query } from "../../lib/db";

export default async function handler(req, res) {
  let message;

  if (req.method === "POST") {
    const newNewsfeedUser = `("${req.body.name}", "${req.body.surname}", "${req.body.email}");`;
    const addUser = await query({
      query: `INSERT INTO newsfeed (name, surname, email) VALUES ${newNewsfeedUser}`,
      values: [newNewsfeedUser],
    });
    console.log(addUser);
    let user = [];

    if (newNewsfeedUser.insertId) {
      message = "success";
    } else {
      message = "error";
    }

    user = {
      // newsfeed_id: addUser.insertId,
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
    };

    res.status(200).json({ response: { message: message, product: user } });
  }
}

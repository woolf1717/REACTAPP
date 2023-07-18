import { query } from "../../lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {
    const querySql = `SELECT username, email, password, phonenumber, gender, birthyear, birthmonth, birthday, user_type FROM users`;

    const data = await query({ query: querySql });

    res.status(200).json({ products: data });
  }

  if (req.method === "POST") {
    console.log("sth");
    const userData = `"${req.body.username}", "${req.body.email}", "${req.body.password}", "${req.body.phonenumber}", "${req.body.gender}", "${req.body.birthyear}", "${req.body.birthmonth}", "${req.body.birthday}", "${req.body.user_type}"`;
    const addUser = await query({
      query: `INSERT INTO users ( username, email, password, phonenumber, gender, birthyear, birthmonth, birthday, user_type) VALUES (${userData});`,
      values: [userData],
    });

    console.log(addUser);
    let user = [];

    if (addUser.insertId) {
      message = "success";
    } else {
      message = "error";
    }

    user = {
      user_id: addUser.insertId,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      phonenumber: userData.phonenumber,
      gender: userData.gender,
      birthyear: userData.birthyear,
      birthmonth: userData.birthmonth,
      birthday: userData.birthday,
      user_type: "user",
    };

    res.status(200).json({ response: { message: message, products: user } });
  }
}

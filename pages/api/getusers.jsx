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
    const userName = req.body.username;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userPhonenumber = req.body.phonenumber;
    const userGender = req.body.gender;
    const userBirthyear = req.body.birthyear;
    const userBirthmonth = req.body.birthmonth;
    const userBirthday = req.body.birthday;
    const user_type = req.body.user_type;
    const addUser = await query({
      query:
        "INSERT INTO users (username, email, password, phonenumber, gender, birthyear, birthmonth, birthday, user_type) VALUES ?",
      values: [user],
    });
    console.log("działa");
    let user = [];

    if (addUser.insertId) {
      message = "success";
    } else {
      message = "error";
    }

    user = {
      username: userName,
      email: userEmail,
      password: userPassword,
      phonenumber: userPhonenumber,
      gender: userGender,
      birthyear: userBirthyear,
      birthmonth: userBirthmonth,
      birthday: userBirthday,
      user_type: user_type,
    };

    res.status(200).json({ response: { message: message, products: user } });
  }
}

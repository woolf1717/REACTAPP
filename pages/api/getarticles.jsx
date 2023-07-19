import { query } from "../../lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {
    const querySql = `SELECT id, title, author, body, imgUrl FROM posts`;

    const data = await query({ query: querySql });

    res.status(200).json({ products: data });
  }
  if (req.method === "POST") {
    const blogData = `("${req.body.title}", "${req.body.body}", "${req.body.imgUrl}", "${req.body.author}")`;
    const addArticle = await query({
      query: `INSERT INTO posts (title, body, imgUrl, author) VALUES ${blogData}`,
    });

    console.log(addArticle);

    let article = [];

    if (addArticle.insertId) {
      message = "success";
    } else {
      message = "error";
    }

    article = {
      idcrud: addArticle.insertId,
      title: req.body.title,
      body: req.body.body,
      imgUrl: req.body.imgUrl,
      author: req.body.author,
    };

    res.status(200).json({ response: { message: message, product: article } });
  }
}

import { query } from "../../lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {
    const products = await query({
      query: "SELECT * from crud",
      values: [],
    });
    res.status(200).json({ items: products });
  }

  if (req.method === "POST") {
    const productName = req.body.product_name;
    const addProduct = await query({
      query: "INSERT INTO crud (text) VALUES (?)",
      values: [productName],
    });
    console.log(addProduct);
    let product = [];

    if (addProduct.insertId) {
      message = "success";
    } else {
      message = "error";
    }

    product = {
      idcrud: addProduct.insertId,
      text: productName,
    };

    res.status(200).json({ response: { message: message, product: product } });
  }

  if (req.method === "PUT") {
    const productId = req.body.product_id;
    const productName = req.body.product_name;

    const updateProduct = await query({
      query: "UPDATE crud SET text = ? WHERE idcrud = ?",
      values: [productName, productId],
    });

    const result = updateProduct.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }

    const product = {
      idcrud: productId,
      text: productName,
    };

    res.status(200).json({ response: { message: message, product: product } });
  }

  if (req.method === "DELETE") {
    const productId = req.body.product_id;
    console.log(productId);
    const deleteProduct = await query({
      query: "DELETE FROM crud WHERE idcrud = ?",
      values: [productId],
    });

    const result = deleteProduct.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    res
      .status(200)
      .json({ response: { message: message, product_id: productId } });
  }
}

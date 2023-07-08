// import mysql from "mysql2";

// import itemsList from "../../components/shop/itemslist/itemslist.mjs";

// let number = 7;
// let currentItemsList = itemsList[number];

// let loginData = {
//   host: "localhost",
//   user: "root",
//   password: "woolfP111668617!",
//   database: "mydb",
// };

// let connection = mysql.createConnection(loginData);
// let sql = `UPDATE products

//            SET
//            starsprops = ${currentItemsList.starsprops},
//            name = "${currentItemsList.name}",
//            price = ${currentItemsList.price},
//            count = ${currentItemsList.count},
//            alt = "${currentItemsList.alt}",
//            descr = "${currentItemsList.descr}",
//            fulldescr = "${currentItemsList.fulldescr}"

//            WHERE
//            product_id = ${number + 1};`;

// let data = [false, 1];

// // execute the UPDATE statement
// connection.query(sql, data, (error, results, fields) => {
//   if (error) {
//     return console.error(error.message);
//   }
//   console.log("Rows affected:", results.affectedRows);
// });

// connection.end();
//  src = ${currentItemsList.src},
//  photoOne = ${currentItemsList.photoOne},
//  photoTwo = ${currentItemsList.photoTwo},
//  photoThree = ${currentItemsList.photoThree},

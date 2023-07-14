import mysql from "mysql2/promise";


export async function query({query, values = []}) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "mydb",
    user: "root",
    password: "haslo123",
  });
  try {

    const [results] = await connection.execute(query, values);
    connection.end();
    return results
  } catch (error) {
    throw Error(error.message);
  }
}
// Credentials to online DB. 
// https://www.phpmyadmin.co/import.php
// host: "sql8.freesqldatabase.com",
// database: "sql8631640",
// user: "sql8631640",
// password: "T6Ba8T564v",
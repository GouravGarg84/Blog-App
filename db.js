import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: 'sqltutorial',
  database:"blog",
  multipleStatements : true
})
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gamelab"
});

const sql = "DELETE FROM contacts where id = 3";

db.query(sql, (error, result) => {
    if (error) {
        throw error;
    }
    console.log(result);
});
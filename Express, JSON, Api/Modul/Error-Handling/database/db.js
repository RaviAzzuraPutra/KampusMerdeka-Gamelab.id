const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express_mysql",
});

db.connect((error) => {
    try {
        console.log("Berhasil Conect Ke Database!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    } catch (error) {
        console.log(error);
    }
});

module.exports = db;
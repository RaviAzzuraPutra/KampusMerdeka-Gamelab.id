const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gamelab",
});

db.connect((error) => {
    if (error) {
        throw error
    }

    console.log("Berhasil Terhubung Ke Database!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

});

module.exports = db;
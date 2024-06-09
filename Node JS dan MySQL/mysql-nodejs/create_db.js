const db = require('./db_config');

const sql = "CREATE DATABASE employees";

db.query(sql , (error, result) => {
    if (error) {
        throw error;
    }
    console.log("Database Berhasil Dibuat")
});


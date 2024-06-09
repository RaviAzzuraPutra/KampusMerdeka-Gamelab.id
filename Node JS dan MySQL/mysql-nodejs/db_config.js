const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'gamelab',
})

db.connect((error) => {
    if(error){
        throw error
    }
    console.log('Koneksi Ke Database Berhasil');
})

module.exports = db;
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gamelab'
});

db.connect((error) => {
    if (error) {
        throw error
    }else {
        console.log('Berhasil Terkoneksi Ke Database!!!!!!!')
    }
});

module.exports = db;
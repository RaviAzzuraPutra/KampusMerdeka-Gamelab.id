const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'data-sampel',
});

db.connect((error) => {
    if (error) {
        throw error;
    };
    console.log('Berhasil Connect Ke Database');
});

module.exports = db;
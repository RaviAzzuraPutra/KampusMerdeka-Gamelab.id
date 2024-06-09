let mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_mysql'
});

db.connect((error) => {
    if (error) {
        throw error
    }else {
        console.log('Berhasil Konek Ke Database!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
});

module.exports = db;
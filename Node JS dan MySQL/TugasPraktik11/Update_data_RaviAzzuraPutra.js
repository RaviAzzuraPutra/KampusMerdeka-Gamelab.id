const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gamelab',
});

const sql = "UPDATE contacts SET noTelepon ='081356832091' WHERE id=19";

db.query(sql, (error, result) => {
    if (error) {
        throw error
    }
    console.log(result);
})
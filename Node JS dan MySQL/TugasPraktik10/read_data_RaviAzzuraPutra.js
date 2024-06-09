const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gamelab',
});

const sql = "SELECT * FROM contacts";

db.query(sql, (error, result) => {
   if (error) {
    throw error
   } 
   console.log('ID | Nama | Email | NoTelepon');
   console.log('');
   result.forEach((hasil) => {
    console.log(`${hasil.id} | ${hasil.Nama} | ${hasil.Email} | ${hasil.NoTelepon}`)
   })

});
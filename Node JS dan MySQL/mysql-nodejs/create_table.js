const db = require('./db_config');

const sql = `CREATE TABLE member (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(225) NOT NULL,
    alamat VARCHAR(225)
)`;

db.query(sql, (error , result) => {
    if(error){
        throw error
    };
    console.log('Berhasil Membuat Table Member');
})
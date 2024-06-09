const db = require('./db_config');

const sql = `DELETE FROM customer WHERE CUST_CODE = 'C00013'`;

db.query(sql, (error, result) => {
    if (error) {
        throw error
    }
    console.log('Berhasil Menghapus Data');
    console.log(result);
})
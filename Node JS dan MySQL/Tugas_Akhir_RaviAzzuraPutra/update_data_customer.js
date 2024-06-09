const db = require('./db_config');

const sql = `UPDATE customer SET CUST_NAME = 'Sampono' WHERE CUST_CODE = 'C00001'`;

db.query(sql, (error, result) => {
    if (error) {
        throw error
    };
    console.log('Berhasil Mengubah Data')
    console.log(result)
});


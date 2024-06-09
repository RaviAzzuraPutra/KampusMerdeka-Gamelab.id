const db = require('./db_config');

const sql = `
            INSERT INTO customer (CUST_CODE, CUST_NAME, CUST_CITY, WORKING_AREA, CUST_COUNTRY, GRADE, OPENING_AMT, RECEIVE_AMT, PAYMENT_AMT, OUTSTANDING_AMT, PHONE_NO, AGENT_CODE)
            VALUES ?
            `;

const values = [
    ['C00026' , 'Ravi', 'Bandung', 'Bandung', 'Indonesia', '0', 9000, 8000, 4000, 9000, 'KKJVAOP', 'A011'],
    ['C00027' , 'Andhika', 'Bandung', 'Bandung', 'Indonesia', '3', 8000, 8000, 3000, 5000, 'QFBAMZX', 'A001'],
    ['C00028' , 'Leo', 'Rosario', 'Rosario', 'Argentina', '2', 6000, 7000, 5000, 9000, 'LPZXADH', 'A001'],
];

db.query(sql, [values], (error, result) => {
    if (error) {
        throw error
    };
    console.log('Berhasil Menambahkan Data');
    console.log(result);
})
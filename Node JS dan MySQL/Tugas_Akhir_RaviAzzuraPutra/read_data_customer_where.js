const db = require('./db_config');

const sql = `
            SELECT CUST_CODE , CUST_NAME, GRADE, WORKING_AREA , OPENING_AMT 
            FROM customer 
            WHERE WORKING_AREA = 'London' AND CUST_NAME = 'Karl
            `;

db.query(sql, (error, result) => {
    if (error) {
        throw error;
    };
    console.log('CUST_CODE | CUST_NAME | WORKING_AREA | OPENING_AMT');
    result.forEach(data => {
        console.log(`${data.CUST_CODE} | ${data.CUST_NAME} | ${data.WORKING_AREA} | ${data.OPENING_AMT}`);
    });
});            
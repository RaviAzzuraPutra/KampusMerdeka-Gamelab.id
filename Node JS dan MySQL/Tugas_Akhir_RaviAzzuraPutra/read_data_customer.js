const db = require('./db_config');

const sql = 'SELECT * FROM customer';

db.query(sql , (error , result) => {
    if (error) {
        throw error
    };
    console.log("CUST_CODE | CUST_NAME | CUST_CITY | WORKING_AREA | CUST_COUNTRY | GRADE | OPENING_AMT | RECEIVE_AMT | PAYMENT_AMT | OUTSTANDING_AMT | PHONE_NO | AGENT_CODE");
    result.forEach(data => {
        console.log(`${data.CUST_CODE} | ${data.CUST_NAME} | ${data.CUST_CITY} | ${data.WORKING_AREA} | ${data.CUST_COUNTRY} | ${data.GRADE} | ${data.OPENING_AMT} | ${data.RECEIVE_AMT} | ${data.PAYMENT_AMT} | ${data.OUTSTANDING_AMT} | ${data.PHONE_NO} | ${data.AGENT_CODE}`);
      });
});
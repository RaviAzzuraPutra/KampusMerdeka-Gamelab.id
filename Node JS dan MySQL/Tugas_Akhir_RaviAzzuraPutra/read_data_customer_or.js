const db = require('./db_config');

const sql = `
  SELECT CUST_NAME , AGENT_CODE, WORKING_AREA, CUST_COUNTRY 
  FROM customer 
  WHERE CUST_COUNTRY = 'UK' OR CUST_COUNTRY = 'India'
`;


db.query(sql, (error, result) => {
    if (error) {
        throw error;
    }
    console.log("CUST_NAME  | AGENT_CODE  | WORKING AREA  | CUST_COUNTRY");
    result.forEach(data => {
        console.log(`${data.CUST_NAME}  | ${data.AGENT_CODE}  | ${data.WORKING_AREA}  | ${data.CUST_COUNTRY}`);
    });
});
const db = require('./db_config');

// const sql = `INSERT INTO CONTACTS (id, Nama, Email, NoTelepon)
//     VALUES (null, 'Alan Walker', 'alan@yahoo.com', '081376397002');`;


const sql = `INSERT INTO CONTACTS (id, Nama, Email, NoTelepon) VALUES ?`;
const values = [ 
    [null, "Novaria", "novaria@gmail.com", "081386099217"],
    [null, "Rizal", "rizal@gmail.com", "081375332109"],
    [null, "Mikey", "mikey@yahoo.com", "081312300865 "],

];

db.query(sql, [values] ,(error, result) => {
    if (error) {
        throw error
    };
    console.log("Data berhasil di tambahkan");
})
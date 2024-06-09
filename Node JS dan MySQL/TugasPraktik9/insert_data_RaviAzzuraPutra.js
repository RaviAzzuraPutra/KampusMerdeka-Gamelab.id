const db = require('./connection');

const sql = `INSERT INTO contacts (id, Nama, Email, NoTelepon) VALUES ?`
const values = [
    [null, "Übel", "ubel@yahoo.com", "081399654021"],
    [null, "Fern", "fern@gmail.com", "081345278691"],
    [null, "Kana Ichikawa", "kana@yahoo.com", "081376214567"],
    [null, "Tenka Izumo", "tenka@gmail.com", "081382130987"],
    [null, "Takefusa Kubo", "takefusa@yahoo.com", "081313482003"],
];

db.query(sql, [values], (error, result) => {
    if (error) {
        throw error
    };
    console.log('Berhasil menambahkan data!!!')
})
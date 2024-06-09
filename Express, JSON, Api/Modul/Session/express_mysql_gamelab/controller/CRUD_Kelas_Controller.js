const db = require('../library/database');

const getALLKelas = (req,res) => {
    let sql = 'SELECT * FROM kelas';

    db.query(sql, (error, result) => {
        if (error) {
            res.send(error);
            res.json({
                data: ''
            });
        }else {
            res.json({
                data: result
            })
        }
    });
};

const getIDKelas = (req,res) => {

    let ID = req.params.ID;

    let sql = `SELECT * FROM kelas where ID = ${ID}`;

    db.query(sql, ID,(error, result) => {
        if (error) {
            res.send(error);
            res.json({
                data: ''
            });
        }else {
            res.json({
                data: result
            })
        }
    });
};

const insertKelas = (req,res) => {
    let Nama_Jurusan = req.body.Nama_Jurusan;
    let Deskripsi = req.body.Deskripsi;
    let errors = false;

    let formData = {
        Nama_Jurusan: Nama_Jurusan,
        Deskripsi: Deskripsi,
    }

    let sql = `INSERT INTO kelas SET ?`;

    db.query(sql, formData, (error, result) => {
        if (error) {
            throw error
        }else {
            res.send('Data Berhasil Disimpan!!');
        }
    });

};

const updateKelas = (req,res) => {

    let ID = req.params.ID;
    let Nama_Jurusan = req.body.Nama_Jurusan;
    let Deskripsi = req.body.Deskripsi;

    let formData = {
        ID: ID,
        Nama_Jurusan: Nama_Jurusan,
        Deskripsi: Deskripsi,
    }

    let sql = `UPDATE kelas SET ? WHERE ID = ${ID}`;

    db.query(sql, formData, (error, result) => {
        if (error) {
            throw error;
        }else {
            res.send('Data Berhasil Diubah!')
        }
    });

};

const deleteKelas =  (req, res) => {
    let ID = req.params.ID;

    let sql = `DELETE FROM kelas WHERE ID = ${ID}`;

    db.query(sql, ID , (error,result) => {
        if (error) {
            throw error
        }else {
            res.send('Data Berhasil Dihapus!!')
        }
    })
};

module.exports = {
    getALLKelas,
    getIDKelas,
    insertKelas,
    updateKelas,
    deleteKelas,
}
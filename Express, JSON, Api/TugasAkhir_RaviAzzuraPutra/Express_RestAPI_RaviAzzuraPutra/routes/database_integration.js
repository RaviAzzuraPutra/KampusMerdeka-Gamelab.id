const express = require('express');
const router = express.Router();
const db = require('../database/database');

router.get('/get', (req,res) => {
    try {
        let sql = `SELECT * FROM contacts`;

        db.query(sql, (error, result) => {
            res.json({
                data: result,
            })
        })
    } catch (error) {
        console.log('Terjadi Kesalahan di database_intergraion bagian /get');
    }

});

router.post('/post', (req,res) => {
    try {
        let Nama = req.body.Nama;
        let Email = req.body.Email;
        let NoTelepon = req.body.NoTelepon;

        let sql = `INSERT INTO contacts SET ? `

        let formData = {
            Nama: Nama,
            Email: Email,
            NoTelepon: NoTelepon,
        }

        db.query(sql, formData, (error, result) => {
            res.json({
                data: result
            }).send("Data Berhasil Ditambahkan");
        })  
    } catch (error) {
        console.log('Terjadi Kesalahan di database_intergraion bagian /post');
    }
    
});

router.put('/put/:id', (req,res) => {
    try {
        let id = req.params.id;
        let Nama = req.body.Nama;
        let Email = req.body.Email;
        let NoTelepon = req.body.NoTelepon;
        let formData = {
            Nama: Nama,
            Email: Email,
            NoTelepon: NoTelepon,
        }

        let sql = `UPDATE contacts set ? WHERE id = ${id}`;

        db.query(sql, formData, (error, result) => {
            res.json({
                data: result
            }).send("Data Berhasil Diubah")
        })
    } catch (error) {
        console.log('Terjadi Kesalahan di database_intergraion bagian /put');
    }
    
});

router.delete('/delete/:id', (req,res) => {
    try {
        let id = req.params.id;

        let sql = `DELETE FROM contacts WHERE id = ${id}`;

        db.query(sql, (error, result) => {
            res.json({
                data: result
            }).send("Data Berhasil Dihapus")
        })
    } catch (error) {
        console.log('Terjadi Kesalahan di database_intergraion bagian /delete');
    }
})

module.exports = router;
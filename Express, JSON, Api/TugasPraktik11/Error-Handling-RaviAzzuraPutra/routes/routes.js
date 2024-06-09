const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../database/db');
const {errorHandler} = require('../middleware/error');
const assert = require('assert');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(errorHandler);


//Try-Catch
router.get('/TryCatch', (req,res,error) => {
    try {
        let sql = `SELECT * FROM kelas`;

        db.queryyyyyy(sql, (error, result) => {
            res.json({
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            name: error.name,
            msg: error.message
        });
    }
});

//exception handling
router.get('/exceptionHandling', (req, res, next) => {
    let sql = `SELECT * error kelas`;

    db.query(sql, (error, result) => {
        if (error) {
            next(new Error('Gagal Mendapatkan Data Dari Database'));
        } else {
            res.json({
                data: result
            });
        }
    }); 
});

//error codes
router.get('/ErrorCodes/:id', (req,res) => {
    try {
        let id = req.params.id;
        
        let sql = `SELECT * FROM kelas WHERE id = ${id}`;
    
        db.query(sql, (error, result) => {
            if (error) {
                return res.status(500).json({
                    error: "INTERNAL_SERVER_ERROR",
                    msg: error.message,
                });
            }
            
            if (result.length === 0) {
                return res.status(404).json({
                    error: "NOT_FOUND",
                    msg: `Kelas dengan ID = ${id} tidak ditemukan`
                });
            }

            res.status(200).json({
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            msg: error.message,
        });
    }
   
});

//assertions
router.get('/assertions/:id', (req, res) => {
    let id = req.params.id;

    let sql = `SELECT * FROM kelas WHERE id = ${id}`;

    db.query(sql, id, (error, result) => {
        try {
            assert(result.length > 0, `ID Kelas ${id} Tidak Ditemukan!`);

            res.status(200).json({
                data: result
            });
        } catch (error) {
            if (error.name === 'AssertionError'){
                res.status(404).json({error: error.message});
            }else {
                res.status(500).json({error: error.message});
            }
        }
    });
});


module.exports = router;
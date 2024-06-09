//Definisitakn router dari express
const router = require('express').Router();

//Ambil index.js dari controller dan panggil variable di dalamnya
const registerController = require('../controller/register_controller').register;

//Definisikan middleware verify.js
const verifyUser = require('../library/verify');

//rute yang digunakan untuk menampilkan form register
router.get('/', verifyUser.isLogOUt, registerController.formRegister);

//rute yangdigunakan untuk menyimpan data user yang diinputkan
router.post('/save', verifyUser.isLogOUt, registerController.saveRegister);

//exports
module.exports = router;

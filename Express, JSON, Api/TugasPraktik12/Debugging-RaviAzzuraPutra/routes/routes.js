const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const debug = require('debug');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const users = [
    {
        id: 1,
        nama: "ラヴィ   アズラ   プトラ",
        universitas: "Universitas Komputer Indonesia"
    },
    {
        id: 2,
        nama: "Aventurine",
        universitas: "Universitas IPC"
    },
]

//debugging menggunakan console
router.get('/console', (req,res) => {
    console.log("INI ADALAH PERCOBAAN DBUGGING MENGGUNAKAN CONSOLE!!")
    res.send('Selamat Datang di Gamelab Indonesia')
});

//menggunakan express debugger
router.get('/debugger', (req,res) => {
    debugger;
    res.send('Selamat Datang di Gamelab Indonesia')
});

//menggubakan npm debug
router.get('/debug/:id', (req,res) => {
    let id = debug(req.params.id)
    const parsedID = parseInt(id);

    const findUserIndex = users.findIndex((user) => user.id === parsedID);

    req.findUserIndex = findUserIndex;

    console.log(`Ini Adalah Percobaan Menggunakan NPM Debug ${id}`);

    res.send(`Ini Adalah Halaman Untuk User ${id}`);

    
});




module.exports = router;
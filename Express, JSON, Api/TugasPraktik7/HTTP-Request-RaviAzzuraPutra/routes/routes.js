const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/method', (req, res) => {
    console.log(req.method);
    res.send('Hello World')
});

router.post('/body', (req,res) => {
    let nama = req.body.nama;
    let univ = req.body.universitas;

    const response = {
        nama: nama,
        universitas: univ
    };
    
    res.json({
        response
    });
});

router.get('/query', (req,res) => {
    let nama = req.query.nama;
    let univ = req.query.univ;
    console.log(nama, univ);
    res.json({
        nama: nama,
        universitas: univ
    });
});

router.post('/path/:id', (req,res) => {
    let id = req.params.id;
    let path = req.path;

    console.log(id, path);

    res.json({id, path})
});

router.post('/header', (req,res) => {
    let userAgent = req.headers['user-agent'];
    console.log(userAgent)
    res.send(userAgent)
})

module.exports = router;

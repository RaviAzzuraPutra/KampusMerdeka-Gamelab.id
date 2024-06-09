const express = require('express');

const router = express.Router();

router.get('/Kelas', (req, res) => {
    res.send(`Hey`)
})

router.post('/Kelas', (req,res) => {
    res.send('Ini Adalah POST');
});

router.put('/Kelas', (req,res) => {
    res.send('Ini Adalah PUT');
});

router.delete('/Kelas', (req,res) => {
    res.send('Ini Adalah DELETE');
});

module.exports = router;
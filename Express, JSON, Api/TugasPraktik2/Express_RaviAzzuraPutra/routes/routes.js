const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ini Adalah Method GET');
});

router.post('/post', (req, res) => {
    res.send('Ini Adalah Method POST');
});

router.put('/put', (req, res) => {
    res.send('Ini Adalah Method PUT');
});

router.delete('/delete', (req, res) => {
    res.send('Ini Adalah Method DELETE')
});

module.exports = router;
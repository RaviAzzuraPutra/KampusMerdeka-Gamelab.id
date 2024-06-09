const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


let data = [
    {
        id: 1,
        nama: "Rudeus Greyat",
        anime: "Mushoku Tensei"
    },
    {
        id: 2,
        nama: "Violet Evergarden",
        anime: "Violet Evergarden"
    },
    {
        id: 3,
        nama: "Kamado Tanjiro",
        anime: "Kimetsu no Yaiba"
    }
]


router.get('/anime', (req,res) => {
    res.json({anime: data});
});

router.get('/anime/:id', (req,res) => {
    const cariData = data.find(a => a.id === parseInt(req.params.id));

    if(!cariData) {
        res.status(400).send('DATA TIDAK DITEMUKAN!!!')
    }else{
        res.json({anime: cariData})
    }
});

router.post('/anime', (req,res) => {
    //konidi apabila body kosong
    if(!req.body.anime){
        res.status(400).send("DATA HARUS DIISI!!!")
        return;
    }

    const anime = {id: data.length + 1, anime: req.body.anime};
    data.push(anime);
    res.send(anime);
});

router.put('/anime/:id', (req,res) => {
    const cariData = data.find(a => a.id === parseInt(req.params.id));

    if(!cariData) {
        res.status(400).send("DATA TIDAK DITEMUKAN!!!");
    };

    //konidi apabila body kosong
    if(!req.body.anime){
        res.status(400).send("DATA HARUS DIISI!!!")
        return;
    };

    cariData.anime = req.body.anime;
    res.send({
        msg: "Data Berhasil Diubah!!",
        anime: cariData
    });
});

router.delete('/anime/:id', (req,res) => {
    const cariData = data.find(a => a.id === parseInt(req.params.id));

    if(!cariData) {
        res.status(400).send("DATA TIDAK DITEMUKAN!!!");
    };

    const index = data.indexOf(cariData);
    data.splice(index,1);
    res.send({
        msg: "Data Berhasil Dihapus!!",
        anime: cariData
    });
});

module.exports = router;
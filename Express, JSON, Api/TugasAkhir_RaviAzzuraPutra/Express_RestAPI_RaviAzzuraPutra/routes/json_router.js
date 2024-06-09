const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const product = {
    "digital_books": [
        {
            "judul_buku": "Bawang Merah dan Bawang Putih",
            "penerbit": "Pustaka RI"
        },
        {
            "judul_buku": "The Tell-Tale Heart",
            "penerbit": "Project Gutenberg"
        },
        {
            "judul_buku": "Malin Kundang",
            "penerbit": "Pustaka RI"
        },
        {
            "judul_buku": "Clean Code: A Handbook of Agile Software Craftsmanship",
            "penerbit": "Pearson Education"
        },
        {
            "judul_buku": "A Geek in Japan: Discovering the Land of Manga, Anime, Zen, and the Tea Ceremony",
            "penerbit": "Tuttle Publishing"
        },
    ],
    "educational_games": [
        {
            "judul_game": "Marbel Piano",
            "type": "Edukasi Anak"
        },
        {
            "judul_game": "Marbel Teliti Mencari Perbedaan",
            "type": "Edukasi Anak"
        },
        {
            "judul_game": "Marbel Belajar Bahasa Inggris",
            "type": "Edukasi Anak"
        },
    ]
}

router.get('/', (req,res) => {
    //postman
    res.json({
        data: product
    });
    //browser
    // res.send({
    //     data:product
    // });
});

module.exports = router;
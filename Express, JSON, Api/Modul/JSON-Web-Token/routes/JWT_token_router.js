const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {generateJWT} = require('../jwt/JSON_JWT_TOKEN');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/jwt', (req,res) => {
    const user = {
        id: 1,
        username: "カフカ",
        email: "user@example.com"
    };

    const token = generateJWT(user);

    res.json({
        JWT: token
    });

});

module.exports = router;
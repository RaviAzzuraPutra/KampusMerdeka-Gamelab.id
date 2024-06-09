const express = require('express');
const router = express.Router();
const {jwtMiddleware} = require('../middleware/jwt_middleware');

router.get('/token/:id', jwtMiddleware ,(req,res) => {
    const token = req.generatedToken;
    res.json({ token }); 
});


module.exports = router;
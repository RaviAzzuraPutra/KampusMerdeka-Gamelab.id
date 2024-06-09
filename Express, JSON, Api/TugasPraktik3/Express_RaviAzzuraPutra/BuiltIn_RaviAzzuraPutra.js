const express = require('express');
const path = require('path');
const app = express();
const port = 9002;

//Middleware
app.use(express.static(path.join(__dirname, 'public')))

//endpoint utama
app.get('/', (req,res) => {
    res.send('ラヴィ   アズラ   プトラ')
})


app.listen(port, () => {
    console.log(`Berjalan di port http://localhost:${port}`)
})
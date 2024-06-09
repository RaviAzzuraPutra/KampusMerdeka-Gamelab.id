const express = require('express');
const app = express();
const port = 3001;
const Router = require('./router/router');

app.use((req,res,next) => {
    console.log('Jumlah waktu yang berjalan adalah: ' , Date.now())
})

app.listen(port, () => {
    console.log(`Berjalan di port http://localhost:${port}`);
})
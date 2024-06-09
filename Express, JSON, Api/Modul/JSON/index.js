const express = require('express');
const app = express();
const port = 9000;
const router = require('./routes/routes');

app.use('/json', router)

app.listen(port, ()=>{
    console.log(`Berjalan di http://localhost:${port}`);
});
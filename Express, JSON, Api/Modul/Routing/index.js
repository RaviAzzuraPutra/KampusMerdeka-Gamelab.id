const express = require('express')
const router = require('./routes/routes')
const app = express();
const port = 3002;

app.use(router);






app.listen(port, ()=>{
    console.log(`Berjalan di port http://localhost:${port}`);
})
const express = require('express');
const app = express();
const router = require('./routes/routes.js');
const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log(`Berjalan di http://localhost:${port} .`)
})
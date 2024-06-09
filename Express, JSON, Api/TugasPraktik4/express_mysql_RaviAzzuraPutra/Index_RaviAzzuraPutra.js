const express = require('express');
const app = express();
const port = 3001;
const db = require('./db/connection');
const router = require('./routes/routes');
const bodyParser = require('body-parser');

app.use(router)


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
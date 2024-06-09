const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const router_Database = require('./routes/database_integration');
const jwt_router = require('./routes/jwt_router');
const json_router = require('./routes/json_router');

const app = express();
const port = 9001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/routing', router);
app.use('/database_integration', router_Database);
app.use('/jwt', jwt_router);
app.use('/json', json_router);

app.listen(port, () => {
    console.log(`Tugas Akhir Express, JSON dan RestAPI || http://localhost:${port}`);
});
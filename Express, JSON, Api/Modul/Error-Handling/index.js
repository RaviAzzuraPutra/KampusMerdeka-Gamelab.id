const express = require('express');
const app = express();
const port = 9000;
const router = require('./routes/routes');

app.use('/error', router);

app.listen(port, ()=>{
    console.log(`Berhalan Di http://localhost:${port}`);
});
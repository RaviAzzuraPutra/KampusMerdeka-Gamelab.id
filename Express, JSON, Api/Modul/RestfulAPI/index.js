const express = require('express');
const app = express();
const port = 9000;
const router = require('./routes/routes');

app.use('/api', router);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});
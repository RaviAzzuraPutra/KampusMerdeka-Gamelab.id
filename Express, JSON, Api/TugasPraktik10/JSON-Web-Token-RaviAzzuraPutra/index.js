const express = require('express');
const app = express();
const port = 9000;
const router = require('./routes/routes');
const JWT_router = require('./routes/JWT_token_router');

app.use('/api', router);
app.use('/token', JWT_router);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});
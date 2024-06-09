const express = require('express');
const morgan = require('morgan'); 
const app = express();
const port = 9003;

// middleware
app.use(morgan('dev'));

// Handler endpoint utama
app.get('/', (req, res) => {
  res.send('ラヴィ   アズラ   プトラ');
});

app.listen(port, () => {
    console.log(`Berjalan di port http://localhost:${port}`)
})

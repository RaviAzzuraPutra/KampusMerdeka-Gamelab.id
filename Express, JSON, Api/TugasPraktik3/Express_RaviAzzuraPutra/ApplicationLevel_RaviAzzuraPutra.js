const express = require('express');
const app = express();
const port = 9001;

//middleware
app.use((req,res,next) => {
    const perhitungan = (A , B) => {
        return A + B;
    };
    console.log(perhitungan(99, 1))
    next();
});

//endpoint utama
app.get('/', (req,res) => {
    res.send('ラヴィ   アズラ   プトラ')
})


app.listen(port, () => {
    console.log(`Berjalan di port http://localhost:${port}`)
})
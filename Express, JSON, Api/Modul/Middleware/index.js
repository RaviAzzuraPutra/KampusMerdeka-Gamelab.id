const express = require('express');
const app = express();
const port = 3001;
const Router = require('./router/router');

app.get('/', 
(req,res,next) => {
    console.log("Ini adalah middleware 1");
    next();
},
(req,res,next) => {
    console.log("Ini adalah middleware 2");
    req.name = "Yoasobi"
    next();
},
(req,res,next) => {
    console.log("Ini adalah middleware 3");
    const error = {
        status: "error",
        data: {
            name: req.name
        }
    };
    next(error);
},
(req,res,next) => {
    console.log("Ini adalah middleware 4");
},
)

app.use((error, req, res, next) => {
    res.json(error);
});

app.use(Router)

app.listen(port, () => {
    console.log(`Berjalan di port http://localhost:${port}`);
})
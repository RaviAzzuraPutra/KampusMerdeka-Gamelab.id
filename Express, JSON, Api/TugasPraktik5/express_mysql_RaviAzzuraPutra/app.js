var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Tambahkan pangil routes kelas
let kelasRouter = require('./routes/kelas');
let cobaSession = require('./routes/session');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware session
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60 * 60 * 1000}
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//tambahkan router kelas
app.use('/kelas', kelasRouter);
//session
app.use('/session', cobaSession);

module.exports = app;

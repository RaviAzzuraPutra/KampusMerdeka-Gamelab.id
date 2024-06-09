var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');
let bodyParser = require('body-parser');
let flash = require('req-flash')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let kelasRouter = require('./routes/kelas');
let sessionRouter = require('./routes/kelas');
//Definisi lokasi untuk auth
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');

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

app.use(flash());

//seting folder views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kelas', kelasRouter);
app.use('/session' ,sessionRouter);
//Gunakan routes yang telah di definisikan untuk auth
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);

module.exports = app;

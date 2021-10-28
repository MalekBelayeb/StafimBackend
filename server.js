require('./models/db');

var express = require('express');
app = express();

const path = require('path');
const http = require('http');
 var app =require('./routes');
 const exphbs = require('express-handlebars');
const ejs = require('ejs');

const bodyparser = require('body-parser');
const cors = require('cors');

const exhbs = require('express-handlebars');
var indexRouter = require('./routes/index');

const vehiculeController = require('./controllers/vehiculeController');
const chauffeurController= require('./controllers/chauffeurController');
const parcController = require('./controllers/parcController');
const usersController = require('./controllers/usersController');
const compteController = require('./controllers/compteController');
const missionController = require('./controllers/missionController');

//Flutter
const missionRoute = require('./routes/mobile_flutter/mission');
const authRoute = require('./routes/mobile_flutter/auth');


var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));


app.get('/login', function (req, res) {
    res.render('../views/login.ejs'); // load the login.ejs file
});

app.get('/index', function (req, res) {
    res.render('../views/index.ejs'); // load the login.ejs file
});

app.get('/user', function (req, res) {
    res.render('../views/users/index.js'); // load the login.ejs file
});
app.get('/user', function (req, res) {
    res.render('../views/Compte/addOrEdit.hbs'); // load the login.ejs file
});
app.get('/compte', function (req, res) {
    res.render('../views/Compte/addOrEdit.hbs'); // load the login.ejs file
});

app.get('/mission', function (req, res) {
    res.render('../views/mission/addOrEdit.hbs'); // load the login.ejs file
});

app.get('/vehicule', function (req, res) {
    res.render('../views/Vehicule/addOrEdit.hbs'); // load the login.ejs file
});

app.get('/signup', function (req, res) {
    res.render('../views/signup.ejs'); // load the index.ejs file
}); 
app.get('/validation', function (req, res) {
    res.render('../views/validation.ejs'); // load the index.ejs file
});

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});


// middlewares

app.use(express.json());
app.use(cors());
//router

//app.use('/', index);
/*
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));*/

app.use('/Vehicule',vehiculeController);
app.use('/chauffeur', chauffeurController);
app.use('/parc', parcController);
app.use('/users', usersController);
app.use('/compte', compteController);
app.use('/Mission', missionController);

//For Flutter
app.use('/missionFF', missionRoute);
app.use('/authFF', authRoute);

require('./models/Mission');
require('./models/Vehicule');
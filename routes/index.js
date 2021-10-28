const { Router } = require('express');
const router = Router();

const User = require('../models/User');
const Parc = require('../models/Parc');
const Mission = require('../models/Mission');
const Vehicule = require('../models/Vehicule');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('hello')
});
router.get('/index', function (req, res, next)  {
    res.render('index')
  });
  
  
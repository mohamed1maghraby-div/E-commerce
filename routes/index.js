var express = require('express');
var router = express.Router();
var medo = require('../models/Product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-commerc' });
});
medo;
module.exports = router;

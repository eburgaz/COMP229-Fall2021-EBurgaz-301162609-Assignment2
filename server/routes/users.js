/*
File Name:users.js
Author: Ece Irem Burgaz
Student ID:301162609
Date: 2021-10-01
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;

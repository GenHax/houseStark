var express = require('express');
var path = require('path');
var User = require('../model/user');
var Post = require('../model/post');


var router = express.Router();

router.get('/',function(req, res, next) {
  console.log("got instruction req")
  res.render('./pages/instruction');
});

//export our router
module.exports = router;

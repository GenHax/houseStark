//require express
var express = require('express');
var path = require('path');
var User = require('../model/user');
//create our router object
var router = express.Router();

//export our router
module.exports = router;

//route for our home
router.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'../index.html'));
});

router.get('/logout',function(req,res){
	req.session.destroy();
	res.sendFile(path.join(__dirname,'../logout.html'));
})
var express = require('express');
var userModel = require('../models/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = userModel.getUsers();
  res.send('respond with a resource');
});

/* POST user to add a new user */
router.post('/', function(req,res){
    res.send("endpoint for create user")
})

module.exports = router;

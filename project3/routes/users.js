var express = require('express');
var usersController = express.Router();
var User = require('../models/user.js');

usersController.get('/users', function (req, res){
	if(req.session && req.session.email){
		User.findOne({ email: req.session.email}).then(function(user, err){
			console.log(users.length)
			res.render('users.ejs', {
				users: users,
				curr_user: user.email
			});
		});
	}else{
		res.render('users.ejs', {
			curr_user: null,
			users: users
		});
	}
});

module.exports = usersController;

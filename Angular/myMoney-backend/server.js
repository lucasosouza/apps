(function(){

	//Require dependencies and setup express
	var express = require('express');
	var bodyParser = require('body-parser');
	var app = express();
	var q = require('q');

	//require local dependencies
	var expenseRoutes = require('./expenseRoutes')

	//Start server
	var server = app.listen(3000)

	//set cross origin 
	app.use(function (req, res, next) {
	    res.set('Access-Control-Allow-Origin', '*');
	    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept');
	    next();
	});

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));

	//load routes
	app.use(expenseRoutes)

	
}());
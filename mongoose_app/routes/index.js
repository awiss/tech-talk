
/*
 * GET home page.
 */

var mongoose = require('mongoose');
var models = require('../models');
// import the schema from models.js, and bind it to 'Cat'
var Cat = mongoose.model('Cat',models.cat)


exports.index = function(req, res){
	// find all of the Cat objects from the database
	Cat.find({},function(err,data){
		
		names = []
		// using the results from the database, build an array of names
		for(var i=0; i<data.length; i++){
			if(data[i].name){
				names.push(data[i].name);
			}
		}
		// Render the index.jade template, with the data
		res.render('index', { title: 'PennApps', cats:names});
	});

	console.log('foo');

};

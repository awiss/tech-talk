
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
var models = require('../models');
// import the schema from models.js, and bind it to 'Cat'
var Cat = mongoose.model('Cat',models.cat)



exports.submit = function(req, res){
  res.render('submit',{ title: 'PennApps'});
};


exports.add = function(req, res){
	var cat_name = req.body.cat_name;
	if(cat_name){
		
		// Create an entry in the database for this cat
		// Just set its name to the one from the POST request.
		Cat.create({name:cat_name},function(err){

			if (err){
				console.log(err);
			}

			// Once we made the entry, just go back to the home page
			res.redirect('/')
		});
	}
}
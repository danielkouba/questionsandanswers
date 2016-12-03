console.log("Server :: Controllers :: users");

////////////////////////////////////////
// User Server Side Controller
////////////////////////////////////////

var mongoose = require('mongoose');
var User = mongoose.model('User')

function usersController(){
	
	////////////////////////////////////////
	// Index Route
	this.index = function(req,res){
		console.log('//// User :: Index')
		User.find({}, function(err, users){
			req.session.userId = "";
			res.json(users);
		})
	};

	////////////////////////////////////////
	// Create Route
	this.create = function(req, res){
		console.log('//// User :: Create');
		console.log(req.body);
		console.log(User.create(req.body, function(err,result){
			console.log('We made it into the User Create')
			if(err){
				console.log('There were validation errors', err);
				res.json(err)
			} else {
				console.log('Successfully added a user!')
				res.json(result);
			}
		}));
	};

	////////////////////////////////////////
	// Login Route
	this.login = function(req,res){
		var errors = {
			errors:{
				general: 'Invalid Login Information'
			}
		}
		User.findOne({email:req.body.email}).exec(function(err,user){
			console.log("/////////////////DB USER")
			console.log(user)
			console.log("/////////////////FORM USER")
			console.log(req.body)
			if ( !req.body.password || !req.body.email || !user ){
				console.log(errors);
				res.json(errors);
			}else{
				if (user.password != req.body.password){
					console.log(errors);
					res.json(errors);
				} else {
					console.log("Sucessfully Logged In!")
					req.session.userId = user._id;
					res.status(200).send("Logged in user");
				}
			}
		});
	};

	////////////////////////////////////////
	// Home Route
	this.home = function(req,res){
		console.log("Made it to users.home")
		User.findOne({_id: req.session.userId}).exec(function(err,user){
			if(err){
				res.status(500).send("Failure")
			}else{
				res.json(user);
			}
		})
	};
};

module.exports = new usersController();
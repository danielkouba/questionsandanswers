console.log("Server :: Controllers :: questions");
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

function questionController(){
	this.index = function(req,res){
		console.log('//// Question :: Index')
		Question.find({}, function(err, questions){
			res.json(questions);
		})
	};

	this.create = function(req,res){
		console.log('//// Question :: Create');
		console.log(req.body);
		console.log(Question.create(req.body, function(err,result){
			console.log('We made it into the Question Create')
			if(err){
				console.log('There were validation errors', err);
				res.json(err)
			} else {
				console.log('Successfully added a question!')
				res.json(result);
			}
		}));
	};

	this.view = function(req,res){
		var errors = {
			errors:{
				general: 'No Question Found'
			}
		}
		Question.findOne({_id:req.params.questionid}).populate({path:'answers', model: 'Answer', populate: {path:'_user', model: 'User'}}).exec(function(err,question){
			console.log("/////////////////DB Question")
			console.log(question)
			if (err){
				console.log(errors);
				res.json(errors);
			}else{
				console.log("Sucessfully Got Question!")
				res.json(question);
			}
		});
	};


}


module.exports = new questionController();
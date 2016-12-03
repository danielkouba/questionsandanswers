console.log('Serverside :: Answer Controller');

var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

function answerController(){

	//this is called from server >> routes >> app.get('/message/:id/comments', comments.create);
	this.create = function(req,res){
		var newAnswer = new Answer(req.body); // request body
		newAnswer._user = req.session.userId;	// session user id
		newAnswer._question = req.params.id;	// url parameter
		newAnswer.save(function(err,results){
			if(err){
				res.json(err)
			}else{
				Question.findOne({_id: req.params.id}).exec(function(err,question){ //find the comment's parent
					if(err){
						res.json(err)
					}else{
						console.log(newAnswer)
						question.answers.push(newAnswer._id); //push the comment id
						question.save(function(err,results){
							if(err){
								res.json(err);
							}else{
								console.log('Successfully added Answer')
								res.sendStatus(200);
							}
						})
					}
				})
			}
		})
	};

	this.like = function(req,res){
		Answer.findOne({_id: req.params.id}).exec(function(err,answer){
			if(err){
				res.json(err)
			} else{
				answer.likes+=1
				answer.save(function(err,results){
					if(err){
						res.json(err)
					}else{
						res.json(results)
					}
				})
			}
		})
	}


};

module.exports = new answerController();
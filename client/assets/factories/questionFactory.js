console.log("//// Client Side :: Question Factory")

myApp.factory('questionFactory', ['$http', function($http){

	var factory = {};

	factory.getquestions = function(callback){
		$http.get('/question').then(function(returned_data){
			callback(returned_data.data);
		})
	}

	factory.addquestion = function(question, callback){
		$http.post('/question', question).then(function(returned_data){
			callback(returned_data.data);
		})
	}

	factory.viewquestion = function(questionId,callback){
		$http.get('/question/'+questionId+'/view').then(function(returned_data){
			console.log(returned_data.data)
			callback(returned_data.data);
		})
	}

	factory.addanswer = function(answer,questionId, callback){
		$http.post('/question/'+questionId+'/answers', answer).then(function(returned_data){
			callback(returned_data.data);
		})
	}

	factory.likeanswer = function(answerId, callback){
		$http.get('/answer/'+answerId+'/like').then(function(returned_data){
			callback(returned_data.data);
		})
	}

	return factory
}])
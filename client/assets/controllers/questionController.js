console.log('//// Client Side :: Question Controller')
myApp.controller('questionController', function($location, $scope, $routeParams, questionFactory){

$scope.questions = [];
	
	$scope.indexQuestions = function(){
		questionFactory.getquestions(function(data){
			console.log(data);
			$scope.allQuestions = data;
		})
	}


	$scope.addQuestion = function(){
		console.log('//////// Question Controller :: Add Question')
		console.log($scope.newQuestion)
		questionFactory.addquestion($scope.newQuestion, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.regErrors = data.errors;
				console.log(data.errors);
			} else {
				$location.path('/questions')
			}
		})
	};

	$scope.viewQuestion = function(questionId){
		questionFactory.viewquestion(questionId, function(data){
			console.log('//////// Question Controller :: View Question')
			console.log(questionId)
			if(data.hasOwnProperty('errors')){
				$scope.loginErrors = data.errors;
			} else {
				$scope.thisQuestion = data
				console.log($scope.thisQuestion.question)
				// $location.url('/questions/questionId/view')
			}
		})
	}

	$scope.answerQuestion = function(questionId){
		questionFactory.viewquestion(questionId, function(data){
			console.log('//////// Question Controller :: Answer Question')
			console.log(questionId)
			if(data.hasOwnProperty('errors')){
				$scope.loginErrors = data.errors;
			} else {
				$scope.thisQuestion = data
				console.log($scope.thisQuestion.question)
				// $location.url('/questions/questionId/view')
			}
		})
	}


	if ($routeParams.questionid){
		$scope.viewQuestion($routeParams.questionid);
	} else if ($routeParams.answerquestionid){
		$scope.viewQuestion($routeParams.answerquestionid);
	} else {
		console.log('Nah')
	}


	$scope.addAnswer = function(questionId){
		console.log('//////// Question Controller :: Add Answer')
		$scope.newAnswer._question = questionId;
		console.log($scope.newAnswer);
		questionFactory.addanswer($scope.newAnswer,questionId, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.regErrors = data.errors;
				console.log(data.errors);
			} else {
				$location.path('/questions/'+questionId+'/view')
			}
		})
	}

	$scope.likeAnswer = function(answerId,questionId){
		questionFactory.likeanswer(answerId, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.regErrors = data.errors;
				console.log(data.errors);
			} else {
				$scope.thisQuestion = data
				$location.path('/questions/'+questionId+'/view')
			}
		})
	}



});

	
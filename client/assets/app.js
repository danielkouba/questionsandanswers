////////////////////////////////////////
// Define Angular App
////////////////////////////////////////
var myApp = angular.module('myApp', ['ngRoute']);

console.log('//// Client Side :: App.js')

myApp.config(function($httpProvider, $routeProvider){
	$httpProvider.interceptors.push(function($q, $location){
		return {
			'responseError': function(rejection){
				if (rejection.status == 401){
					$location.url('/');
				}
				return $q.reject(rejection);
			}
		};
	});


	$routeProvider
	.when('/',{
		templateUrl: 'assets/partials/login.html',
		controller: 'userController',
		controllerAs: 'UC'
	})
	.when('/questions',{
		templateUrl: 'assets/partials/questions.html',
		controller: 'questionController'
	})
	.when('/questions/create',{
		templateUrl: 'assets/partials/questionForm.html',
		controller: 'questionController'
	})
	.when('/questions/:questionid/view',{
		templateUrl: 'assets/partials/questionView.html',
		controller: 'questionController'
	})
	.when('/questions/:answerquestionid/answer',{
		templateUrl: 'assets/partials/answerquestionView.html',
		controller: 'questionController'
	})
	// .when('/home',{
	// 	templateUrl: 'home.html',
	// 	controller: 'homeController',
	// })
	.otherwise({
		redirectTo: '/'
	})

})


	//.when('/addmessage',{
	// 	templateUrl: 'home.html',
	// 	controller: 'messageController',
	// 	controllerAs: 'MC'
	// })
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
	.when('/home',{
		templateUrl: 'home.html',
		controller: 'homeController',
	})
	.otherwise({
		redirectTo: '/'
	})

})


	//.when('/addmessage',{
	// 	templateUrl: 'home.html',
	// 	controller: 'messageController',
	// 	controllerAs: 'MC'
	// })
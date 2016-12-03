console.log('//// Client Side :: User Controller')
myApp.controller('userController', function($location, $scope, userFactory){

$scope.users = [];
	
	$scope.adduser = function(){
		console.log('//////// Client Side :: User Controller :: Add User')
		console.log($scope.newUser)
		userFactory.adduser($scope.newUser, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.regErrors = data.errors;
				console.log(data.errors);
			} else {
				$location.path('/')
			}
		})
	};

	$scope.loginuser = function(){
		userFactory.loginuser($scope.user, function(data){
			console.log('//////// Client Side :: User Controller :: Login User')
			if(data.hasOwnProperty('errors')){
				$scope.loginErrors = data.errors;
			} else {
				$location.url('/questions')
			}
		})
	}

});

	
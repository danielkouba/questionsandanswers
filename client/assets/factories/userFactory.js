console.log("//// Client Side :: User Factory")

myApp.factory('userFactory', ['$http', function($http){
	var factory = {};
	factory.getusers = function(callback){
		$http.get('/').then(function(returned_data){
			callback(returned_data.data);
		})
	}

	factory.adduser = function(user, callback){
		console.log("Step 05: adduser in client >> userFactory")
		$http.post('/create', user).then(function(returned_data){
			callback(returned_data.data);
		})
	}

	factory.loginuser = function(user,callback){
		$http.post('/login',user).then(function(returned_data){
			callback(returned_data.data);
		})
	}

	factory.home = function(callback){
		$http.get('/home').then(function(data){
			callback(data.data);
		})
	}

	return factory
}])
////////////////////////////////////////
// Server Config
////////////////////////////////////////
var path  = require('path'),
	users = require('../controllers/users.js');

////////////////////////////////////////
// Log In Middleware
////////////////////////////////////////
function loginAuthentication(req,res,next){
	if (req.session.userId){
		next();
	}else{
		res.status(401).send("User not found");
	}
}

module.exports = function(app){
	app.get('/', users.index); 				//server >> controllers >> users.js >> index()
	app.post('/create', users.create); 		//server >> controllers >> users.js >> create()
	app.post('/login', users.login); 		//server >> controllers >> users.js >> login()
	// app.use(loginAuthentication); 			//server >> app
	app.get('/home', users.home); 			//server >> controllers >> users.js >> home()
};
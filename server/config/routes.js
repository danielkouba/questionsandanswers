////////////////////////////////////////
// Server Config
////////////////////////////////////////
var path  = require('path'),
	users = require('../controllers/users.js'),
	questions = require('../controllers/questions.js');
	answers = require('../controllers/answers.js');

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
	app.use(loginAuthentication); 			//server >> app
	// app.get('/home', users.home); 			//server >> controllers >> users.js >> home()
	app.post('/question/:id/answers', answers.create);
	app.get('/question', questions.index);	//Get all Questions
	app.post('/question', questions.create);//Create a new Question
	app.get('/question/:questionid/view', questions.view);// Look up just one question
	app.get('/answer/:id/like', answers.like);// Look up just one question
};
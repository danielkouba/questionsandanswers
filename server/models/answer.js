var mongoose = require('mongoose');
var Schema = mongoose.Schema
////////////////////////////////////////
// Question Model
////////////////////////////////////////

var answerSchema = new mongoose.Schema({
	answer: {
		type: String,
		required: true,
		minlength: 8,
		trim: true
	},
	details: {
		type: String,
		trim: true
	},
	_question: {
		type: Schema.Types.ObjectId, 
		ref: 'Question'
	},
	_user: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	likes: {
		type: Number,
		default: 0
	}
},{
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

mongoose.model('Answer', answerSchema);
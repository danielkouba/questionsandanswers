var mongoose = require('mongoose');
var Schema = mongoose.Schema
////////////////////////////////////////
// Question Model
////////////////////////////////////////

var answerSchema = new mongoose.Schema({
	answer: {
		type: String,
		required: true,
		minlength: 10,
		trim: true
	},
	_user: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	likes: {
		type: Number
	}
},{
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

mongoose.model('Answer', answerSchema);
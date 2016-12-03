var mongoose = require('mongoose');

////////////////////////////////////////
// Question Model
////////////////////////////////////////

var questionSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
		minlength: 10,
		trim: true
	},
	description: {
		type: String,
		required: true,
		trim: true
	},
	comments: {
		type: String,
		required: true,
		trim: true
	}
},{
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

mongoose.model('Question', questionSchema);
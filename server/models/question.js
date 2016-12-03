var mongoose = require('mongoose');
var Schema = mongoose.Schema
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
	answers: [{
		type: Schema.Types.ObjectId, 
		ref: 'Answer',
		default: []
	}],
},{
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

mongoose.model('Question', questionSchema);
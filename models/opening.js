var mongoose = require('mongoose'); 

var OpeningSchema = new mongoose.Schema({

	name: String, 
	moves: Array, 
	annotations: Array, 
	starting_move: Number, 
	details: String, 
	groupname: String
});

mongoose.model('Opening', OpeningSchema);
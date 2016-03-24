var mongoose = require('mongoose'); 

var GameSchema = new mongoose.Schema({

	groupname: String, 
	score: Number,
	user: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	} 
});

GameSchema.statics.topGames = function (callback) {

	this.find().sort('-score').select('-__v').limit(5).exec(callback);
}

mongoose.model('Game', GameSchema);
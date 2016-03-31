var mongoose = require('mongoose'); 

var GameSchema = new mongoose.Schema({

	groupname: String, 
	score: Number,
	user: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	} 
});

GameSchema.statics.topGame = function (userID, groupname, callback) {

	this.findOne({user: userID, groupname: groupname}).sort('-score').select('-__v').exec(callback);
}

GameSchema.statics.topGames = function (callback) {

	this.find().sort('-score').select('-__v').limit(5).populate("user", 'name').exec(callback);
}

mongoose.model('Game', GameSchema);
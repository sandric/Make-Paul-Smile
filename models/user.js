var mongoose = require('mongoose'); 
require('./game.js');

var Game = mongoose.model('Game');


var UserSchema = new mongoose.Schema({

	name: String, 
	email: String,
	games: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Game'
	}] 
});

UserSchema.methods.bestGame = function (callback) {
	
	Game.findOne({user: this}).sort('-score').exec(callback);
}

UserSchema.methods.bestGamesByGroup = function (callback) {
	
	Game.aggregate(
    	[
    		{
    			"$match": {
    				user: new mongoose.Types.ObjectId(this._id)
    			}
    		},
       		{
       			"$group": {
       				
       				"score": {
       					"$max": "$score"
       				},
                	"_id": "$groupname"
                }
            } 
    	],
      	callback
	);
}

mongoose.model('User', UserSchema);
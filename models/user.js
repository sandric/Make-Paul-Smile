var mongoose = require('mongoose'); 

require('./game.js');

var Game = mongoose.model('Game');


var UserSchema = new mongoose.Schema({

	name: { 
    type: String, 
    unique: true 
  },
  password: String, 
	games: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Game'
	}] 
});

UserSchema.methods.bestGame = function (callback) {
	
	Game.findOne({user: this}, '-__v -user -_id').sort('-score').exec(callback);
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

UserSchema.statics.profile = function (userID, callback) {
  this.findById(userID).exec(function (err, user) {

    var result;

    if (err) 
      console.log(err);

    else {

      result = {
        id: user._id,
        name: user.name
      }

      user.bestGame(function (err, bestGame) {
          if (err) 
            console.log(err);
          
          else 
            if (bestGame) {

              result.best_game = bestGame;

              result.best_games = [];

              user.bestGamesByGroup(function (err, bestGames) {
                if (err)
                  console.log(err);

                else {

                  if (bestGames)
                    bestGames.forEach(function (bestGame) {
                      result.best_games.push({
                        "groupname": bestGame._id,
                        "score": bestGame.score
                      })
                    });

                  callback(result);
                }
              });
            } else {

              result.best_game = {};
              result.best_games = [];
              
              callback(result);
            }
      });
    }
  });
}

mongoose.model('User', UserSchema);
var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var bcrypt = require('bcrypt');


var mongoose = require('mongoose');

require('./models/opening.js');
require('./models/user.js');
require('./models/game.js');

connection = mongoose.connect('mongodb://localhost/makepaulsmile');

var Opening = mongoose.model('Opening');
var User = mongoose.model('User');
var Game = mongoose.model('Game');


var app = express();

app.use(express.static(__dirname + '/public'));                
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.set('json spaces', 4);


app.post('/api/sessions/', function(req, res) {

	User.findOne({name: req.body.username}, function(err, user) {

		if (err)
			res.status(500).json("Internal server error");
		else if (!user)
			res.status(403).json("Unknown username");
		else
			bcrypt.compare(req.body.password, user.password, function(err, compared) {
		    	if (err)
					res.status(500).json("Internal server error");
				else 
					if (compared)
						User.profile(user._id, function(result) {
							res.json(result);
						});
					else
						res.status(403).json("Password not matches");
			});
	});
});

app.post('/api/users', function(req, res) {

	var user = new User({
		name: req.body.username,
		games: []
	});

	bcrypt.hash(req.body.password, 10, function(err, hash) {
		if (err)
			res.status(500).json("Internal server error");
		else {
		
			user.password = hash;

			user.save(function(err, user){
				if (err)
					res.status(403).json("User name already taken")
				else
					User.profile(user._id, function(result) {
						res.json(result);
					});
			});
		}
	});
});


app.get('/api/users', function(req, res) {

	User.find().select('-__password -__v -games').exec(function (err, users) {
  		if (err) {
  			console.log(err);

  			res.status(500).json({
				error: "Internal server error"
			});
  		}
  		else
  			res.json(users);
	});
});


app.get('/api/users/:user_id', function(req, res) {

	User.profile(req.params.user_id, function(result) {
		res.json(result);
	});
});



app.patch('/api/users/:user_id', function(req, res) {

	setTimeout(function() {
    	res.end();
	}, 1000);

	User.findById(req.params.user_id).exec(function (err, user) {

		if (err) {
			console.log(err);
		} else {

			if (user) {

				if (req.body.best_games)

					req.body.best_games.forEach(function(best_game) {

						if (best_game.groupname && best_game.score) {
							
							Game.find({user: user, groupname: best_game.groupname, score: best_game.score}, function(err, bestGame) {
								
								if (err) {
									console.log("ERROR:")
									console.log(err);
								} else {
									if (bestGame.length > 0) {
										console.log("best game " + best_game.groupname + " exists")
									} else {

										new_best_game = new Game();

										new_best_game.groupname = best_game.groupname
										new_best_game.score = best_game.score
										new_best_game.user = user

										new_best_game.save(function(err, res) {

											if (err) {
												console.log(err)
											} else {
												console.log(res)
											}
										})
									}
								}
							})	
						}
					})
				
			}
		}
	});
});


app.get('/api/games', function(req, res) {

	Game.find().populate("user", '-password -__v -games').select('-__v').exec(function (err, games) {
  		if (err) {
  			console.log(err);

  			res.status(500).json({
				error: "Internal server error"
			});
  		}
  		else
  			res.json(games);
	});
});

app.get('/api/games/:game_id', function(req, res) {
	
	Game.findById(req.params.game_id).select('-_id -__v').exec(function (err, game) {
  		if (err) {
  			console.log(err);

  			res.status(500).json({
				error: "Internal server error"
			});
  		}
  		else
  			res.json(game);
	});
});


app.post('/api/games', function(req, res) {
	
	User.findById(req.body.user_id).exec(function (err, user) {

		if (err) {
			console.log(err);

			res.status(500).json({
				error: "Internal server error"
			});

		} else {

			if (user) {

				var newGame = new Game({
					groupname: req.body.groupname,
					score: req.body.score,
					user: user
				});

				newGame.save();

				Game.topGame(user, newGame.groupname, function(err, game) {

					if (err) {
						console.log(err);
					} else {
						if (game) {
							res.json({
								groupname: newGame.groupname,
								score: newGame.score,
								best_score: game.score,
							});
						}
					}
				});

			} else {
				res.status(404).json({
					error: "User with such ID not found"
				});
			}
		}
	});
});


app.get('/api/top', function(req, res) {

	Game.topGames(function (err, games) {
  		if (err) {
  			console.log(err);

  			res.status(500).json({
				error: "Internal server error"
			});
  		}
  		else {

  			results = [];
  			
  			games.forEach(function(game) {
  				results.push({
  					groupname: game.groupname,
  					score: game.score,
  					username: game.user.name
  				})
  			});

  			res.json(results);
  		}
	});
});


app.get('/api/openings', function(req, res) {

	Opening.find().select('-_id -__v').exec(function (err, openings) {
  		if (err) {
  			console.log(err);

  			res.status(500).json({
				error: "Internal server error"
			});
  		}
  		else
  			res.json(openings);
	});
});



app.use('/scripts', express.static(__dirname + '/node_modules'));

 
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});


app.listen(8080);
console.log("App listening on port 8080");

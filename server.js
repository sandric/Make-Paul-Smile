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
						res.json({
							name: user.name,
							id: user._id
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
					res.json({
						name: user.name,
						id: user._id
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

	User.findById(req.params.user_id).exec(function (err, user) {

  		if (err) {
  			console.log(err);

  			res.status(500).json({
				error: "Internal server error"
			});
  		}
  		else {
 			user.bestGame(function (err, bestGame) {
		  		if (err) {
		  			console.log(err);

		  			res.status(500).json({
						error: "Internal server error"
					});
		  		}
		  		else
				  	user.bestGamesByGroup(function (err, bestGames) {
				  		if (err) {
				  			console.log(err);

				  			res.status(500).json({
								error: "Internal server error"
							});
				  		}
				  		else {

				  			result = {
				  				name: user.name,
				  				best_games: []
				  			};

				  			if (bestGame) {
				  				result.bestGame = bestGame;
				  			}

				  			bestGames.forEach(function (bestGame) {
				  				result.best_games.push({
				  					"groupname": bestGame._id,
				  					"score": bestGame.score
				  				})
				  			});

				  			res.json(result);
				  		}
					});
			});
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

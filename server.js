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

	console.log("SIGNING IN:");

	console.log(req.body);

	User.findOne({name: req.body.username}, function(err, user) {
		
		if (err)
			console.log(err);
		else {

			console.log("Found user:");

			console.log(user);

			bcrypt.compare(req.body.password, user.password, function(err, compared) {
		    	if (err)
					console.log(err);
				else 
					if (compared) {
						console.log("LOGGED!");

						res.json({
							name: user.name,
							id: user._id
						});
					} else {
						res.json({
							err: "Niet ty nye dlya menya"
						});
					}
			});
		}
	});
});

app.post('/api/users', function(req, res) {

	console.log("SIGNING UP:");

	console.log(req.body);

	var user = new User({
		name: req.body.username,
		games: []
	});

	bcrypt.hash(req.body.password, 10, function(err, hash) {
		if (err) {
			console.log(err);
		} else {
			user.password = hash;

			user.save(function(err, user){
				if (err) {

					console.log(err);

					res.json({
						error: "User name already taken"
					});
				}
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
  		if (err) 
  			res.json(err);
  		else
  			res.json(users);
	});
});

app.get('/api/users/:user_id', function(req, res) {

	User.findById(req.params.user_id).exec(function (err, user) {

		console.log(user);

  		if (err) 
  			res.json(err);
  		else {
 			user.bestGame(function (err, bestGame) {
		  		if (err) 
		  			res.json(err);
		  		else
				  	user.bestGamesByGroup(function (err, bestGames) {
				  		if (err) 
				  			res.json(err);
				  		else {

				  			console.log("hhhereL");

				  			console.log(bestGame);

				  			console.log("hhhereLs");

				  			console.log(bestGames);

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
  		if (err) 
  			res.json(err);
  		else
  			res.json(games);
	});
});

app.get('/api/games/:game_id', function(req, res) {
	
	Game.findById(req.params.game_id).select('-_id -__v').exec(function (err, game) {
  		if (err) 
  			res.json(err);
  		else
  			res.json(game);
	});
});


app.get('/api/top', function(req, res) {

	Game.topGames(function (err, games) {
  		if (err) 
  			res.json(err);
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
  		if (err) 
  			res.json(err);
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

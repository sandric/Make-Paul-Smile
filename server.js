var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


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


app.get('/api/current_user', function(req, res) {

	User.findOne({}, function(err, user) {
		if (err)
			res.json(err);
		else	
			res.redirect(`/api/users/${user._id}`);
	});
});

app.get('/api/users', function(req, res) {

	User.find().select('-__v -games').exec(function (err, users) {
  		if (err) 
  			res.json(err);
  		else
  			res.json(users);
	});
});

app.get('/api/users/:user_id', function(req, res) {

	User.findById(req.params.user_id).exec(function (err, user) {
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
				  			result = {
				  				name: user.name,
				  				email: user.email,
				  				best_game: {
				  					groupname: bestGame.groupname,
				  					score: bestGame.score,
				  				},
				  				best_games: []
				  			};

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

	Game.find().populate("user", '-__v -games').select('-__v').exec(function (err, games) {
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
  		else
  			res.json(games);
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

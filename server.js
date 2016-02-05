var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var mongoose = require('mongoose');
require('./models/groups.js');

mongoose.connect('mongodb://localhost/mysuperapp');


var app = express();

app.use(express.static(__dirname + '/public'));                
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());



app.get('/api/users/:user_id', function(req, res) {
	var user =  {
		name: "Tosha",
		best_game: {
			group: "Flank",
			score: 54
		},
		best_games_by_group: [
			{
				group: "Semi-open",
				score: 14
			},
			{
				group: "Semi-closed",
				score: 12
			},
			{
				group: "Flank",
				score: 17
			}
		]
	};

	res.json(user);
});


app.get('/api/top', function(req, res) {
	var top =  [
		{
			username: "Soso 1",
			group: "Open",
			score: 17
		},

		{
			username: "Soso 2",
			group: "Open",
			score: 18
		},

		{
			username: "Soso 3",
			group: "Semi-closed",
			score: 19
		},

		{
			username: "Soso 4",
			group: "Flank",
			score: 20
		},

		{
			username: "Soso 5",
			group: "Semi-open",
			score: 21
		},

	];

	res.json(top);
});


app.get('/api/users/:user_id/games/:game_id', function(req, res) {
	var results =  {
		group: "Open",
		score: 17,
		previous_score: 6,
		best_username: "Soso",
		best_score: 19
	};

	res.json(results);
});


app.get('/api/openings', function(req, res) {

	var openings = [
		{ name: "Portuguese Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Lopez Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Vienna Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Bishop's Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Danish Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Center Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Alapin's Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Ruy Lopez", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Ponziani Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Three Knights Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Four Knights Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Italian Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Giuoco Piano", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Evans Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Hungarian Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Two Knights Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Scotch Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Inverted Hungarian Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Konstantinopolsky Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Elephant Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Philidor Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Latvian Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Damiano Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Petrov's Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Greco Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Napoleon Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "King's Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },
		{ name: "Parham Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Open" },

		{ name: "Corn Stalk Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "St. George Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Lemming Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Polish Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Owen's Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Sicilian Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Caro-Kann Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Nimzowitsch Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Scandinavian Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Balogh Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Czech Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Pirc Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "French Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Fred Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Barnes Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Alekhine's Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Borg Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Modern Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Goldsmith Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Carr Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },
		{ name: "Adams Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-open" },

		{ name: "Richter-Veresov Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Queen's Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Queen's Gambit Accepted (QGA)", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Queen's Gambit Declined (QGD)", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Symmetrical Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Slav Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Chigorin Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Albin Countergambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Baltic Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Marshall Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Stonewall Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Blackmar-Diemer Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "Colle System", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },
		{ name: "London System", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Closed" },

		{ name: "Polish Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-closed" },
		{ name: "Benoni Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-closed" },
		{ name: "Queen's Knight Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-closed" },
		{ name: "Wade Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-closed" },
		{ name: "Englund Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-closed" },
		{ name: "English Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-closed" },
		{ name: "Keres Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-closed" },
		{ name: "Dutch Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Semi-closed" },

		{ name: "Accelerated Queen's Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Benoni Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Benko Gambit (or Volga Gambit)", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Slav-Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Black Knights' Tango", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Old Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Janowski Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Döry Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Budapest Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Nimzo-Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Modern Benoni", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Bogo-Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Polish Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Queen's Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Blumenfeld Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Catalan Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Neo-Indian Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Australian Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Grünfeld Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "King's Indian defence (KID)", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Nadanian Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Torre Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "East Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Barry Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },
		{ name: "Trompowsky Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Indian-defence" },

		{ name: "Zukertort Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Flank" },
		{ name: "English Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Flank" },
		{ name: "Benko Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Flank" },
		{ name: "Dunst Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Flank" },
		{ name: "Bird's Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Flank" },
		{ name: "Larsen's Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Flank" },
		{ name: "Sokolsky Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Flank" },
		{ name: "Grob's Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", group: "Flank" },
	];

	res.json(openings);
})


app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});


app.listen(8080);
console.log("App listening on port 8080");

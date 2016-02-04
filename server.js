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




app.get('/api/groups', function(req, res) {

	var groups = [
		{
			name: "Open"
		},
		{
			name: "Semi-open"
		},
		{
			name: "Closed"
		},
		{
			name: "Semi-closed"
		},
		{
			name: "Indian-defence"
		},
		{
			name: "Flank"
		}
	]

    res.json(groups);
});





app.get('/api/openings', function(req, res) {

	var openings = [
		{ name: "Portuguese Opening", group: "Open" },
		{ name: "Lopez Opening", group: "Open" },
		{ name: "Vienna Game", group: "Open" },
		{ name: "Bishop's Opening", group: "Open" },
		{ name: "Danish Gambit", group: "Open" },
		{ name: "Center Game", group: "Open" },
		{ name: "Alapin's Opening", group: "Open" },
		{ name: "Ruy Lopez", group: "Open" },
		{ name: "Ponziani Opening", group: "Open" },
		{ name: "Three Knights Game", group: "Open" },
		{ name: "Four Knights Game", group: "Open" },
		{ name: "Italian Game", group: "Open" },
		{ name: "Giuoco Piano", group: "Open" },
		{ name: "Evans Gambit", group: "Open" },
		{ name: "Hungarian Defense", group: "Open" },
		{ name: "Two Knights Defense", group: "Open" },
		{ name: "Scotch Game", group: "Open" },
		{ name: "Inverted Hungarian Opening", group: "Open" },
		{ name: "Konstantinopolsky Opening", group: "Open" },
		{ name: "Elephant Gambit", group: "Open" },
		{ name: "Philidor Defence", group: "Open" },
		{ name: "Latvian Gambit", group: "Open" },
		{ name: "Damiano Defense", group: "Open" },
		{ name: "Petrov's Defence", group: "Open" },
		{ name: "Greco Defense", group: "Open" },
		{ name: "Napoleon Opening", group: "Open" },
		{ name: "King's Gambit", group: "Open" },
		{ name: "Parham Attack", group: "Open" },

		{ name: "Corn Stalk Defence", group: "Semi-open" },
		{ name: "St. George Defence", group: "Semi-open" },
		{ name: "Lemming Defense", group: "Semi-open" },
		{ name: "Polish Gambit", group: "Semi-open" },
		{ name: "Owen's Defence", group: "Semi-open" },
		{ name: "Sicilian Defence", group: "Semi-open" },
		{ name: "Caro-Kann Defence", group: "Semi-open" },
		{ name: "Nimzowitsch Defence", group: "Semi-open" },
		{ name: "Scandinavian Defence", group: "Semi-open" },
		{ name: "Balogh Defence", group: "Semi-open" },
		{ name: "Czech Defence", group: "Semi-open" },
		{ name: "Pirc Defence", group: "Semi-open" },
		{ name: "French Defence", group: "Semi-open" },
		{ name: "Fred Defence", group: "Semi-open" },
		{ name: "Barnes Defence", group: "Semi-open" },
		{ name: "Alekhine's Defence", group: "Semi-open" },
		{ name: "Borg Opening", group: "Semi-open" },
		{ name: "Modern Defence", group: "Semi-open" },
		{ name: "Goldsmith Defence", group: "Semi-open" },
		{ name: "Carr Defense", group: "Semi-open" },
		{ name: "Adams Defence", group: "Semi-open" },

		{ name: "Richter-Veresov Attack", group: "Closed" },
		{ name: "Queen's Gambit", group: "Closed" },
		{ name: "Queen's Gambit Accepted (QGA)", group: "Closed" },
		{ name: "Queen's Gambit Declined (QGD)", group: "Closed" },
		{ name: "Symmetrical Defense", group: "Closed" },
		{ name: "Slav Defense", group: "Closed" },
		{ name: "Chigorin Defense", group: "Closed" },
		{ name: "Albin Countergambit", group: "Closed" },
		{ name: "Baltic Defense", group: "Closed" },
		{ name: "Marshall Defense", group: "Closed" },
		{ name: "Stonewall Attack", group: "Closed" },
		{ name: "Blackmar-Diemer Gambit", group: "Closed" },
		{ name: "Colle System", group: "Closed" },
		{ name: "London System", group: "Closed" },

		{ name: "Polish Defense", group: "Semi-closed" },
		{ name: "Benoni Defense", group: "Semi-closed" },
		{ name: "Queen's Knight Defense", group: "Semi-closed" },
		{ name: "Wade Defense", group: "Semi-closed" },
		{ name: "Englund Gambit", group: "Semi-closed" },
		{ name: "English Defense", group: "Semi-closed" },
		{ name: "Keres Defence", group: "Semi-closed" },
		{ name: "Dutch Defense", group: "Semi-closed" },

		{ name: "Accelerated Queen's Indian defence", group: "Indian-defence" },
		{ name: "Benoni Defence", group: "Indian-defence" },
		{ name: "Benko Gambit (or Volga Gambit)", group: "Indian-defence" },
		{ name: "Slav-Indian defence", group: "Indian-defence" },
		{ name: "Black Knights' Tango", group: "Indian-defence" },
		{ name: "Old Indian defence", group: "Indian-defence" },
		{ name: "Janowski Indian defence", group: "Indian-defence" },
		{ name: "Döry Defence", group: "Indian-defence" },
		{ name: "Budapest Gambit", group: "Indian-defence" },
		{ name: "Nimzo-Indian defence", group: "Indian-defence" },
		{ name: "Modern Benoni", group: "Indian-defence" },
		{ name: "Bogo-Indian defence", group: "Indian-defence" },
		{ name: "Polish Defence", group: "Indian-defence" },
		{ name: "Queen's Indian defence", group: "Indian-defence" },
		{ name: "Blumenfeld Gambit", group: "Indian-defence" },
		{ name: "Catalan Opening", group: "Indian-defence" },
		{ name: "Neo-Indian Attack", group: "Indian-defence" },
		{ name: "Australian Attack", group: "Indian-defence" },
		{ name: "Grünfeld Defence", group: "Indian-defence" },
		{ name: "King's Indian defence (KID)", group: "Indian-defence" },
		{ name: "Nadanian Attack", group: "Indian-defence" },
		{ name: "Torre Attack", group: "Indian-defence" },
		{ name: "East Indian defence", group: "Indian-defence" },
		{ name: "Barry Attack", group: "Indian-defence" },
		{ name: "Trompowsky Attack", group: "Indian-defence" },

		{ name: "Zukertort Opening", group: "Flank" },
		{ name: "English Opening", group: "Flank" },
		{ name: "Benko Opening", group: "Flank" },
		{ name: "Dunst Opening", group: "Flank" },
		{ name: "Bird's Opening", group: "Flank" },
		{ name: "Larsen's Opening", group: "Flank" },
		{ name: "Sokolsky Opening", group: "Flank" },
		{ name: "Grob's Attack", group: "Flank" },
	];

	res.json(openings);
})







app.get('/api/groups/:group_name', function(req, res) {

	var openings;

	var groupName = req.params.group_name;

	console.log(groupName);

	if (groupName == 'Open') {
		openings = [
			"Portuguese Opening",
			"Lopez Opening",
			"Vienna Game",
			"Bishop's Opening",
			"Danish Gambit",
			"Center Game",
			"Alapin's Opening",
			"Ruy Lopez",
			"Ponziani Opening",
			"Three Knights Game",
			"Four Knights Game",
			"Italian Game",
			"Giuoco Piano",
			"Evans Gambit",
			"Hungarian Defense",
			"Two Knights Defense",
			"Scotch Game",
			"Inverted Hungarian Opening",
			"Konstantinopolsky Opening",
			"Elephant Gambit",
			"Philidor Defence",
			"Latvian Gambit",
			"Damiano Defense",
			"Petrov's Defence",
			"Greco Defense",
			"Napoleon Opening",
			"King's Gambit",
			"Parham Attack",
		]
	}

	if (groupName == 'Semi-open') {
		openings = [
			"Corn Stalk Defence",
			"St. George Defence",
			"Lemming Defense",
			"Polish Gambit",
			"Owen's Defence",
			"Sicilian Defence",
			"Caro-Kann Defence",
			"Nimzowitsch Defence",
			"Scandinavian Defence",
			"Balogh Defence",
			"Czech Defence",
			"Pirc Defence",
			"French Defence",
			"Fred Defence",
			"Barnes Defence",
			"Alekhine's Defence",
			"Borg Opening",
			"Modern Defence",
			"Goldsmith Defence",
			"Carr Defense",
			"Adams Defence",
		]
	}

	if (groupName == 'Closed') {
		openings = [
			"Richter-Veresov Attack",
			"Queen's Gambit",
			"Queen's Gambit Accepted (QGA)",
			"Queen's Gambit Declined (QGD)",
			"Symmetrical Defense",
			"Slav Defense",
			"Chigorin Defense",
			"Albin Countergambit",
			"Baltic Defense",
			"Marshall Defense",
			"Stonewall Attack",
			"Blackmar-Diemer Gambit",
			"Colle System",
			"London System",
		]
	}

	if (groupName == 'Semi-closed') {
		openings = [
			"Polish Defense",
			"Benoni Defense",
			"Queen's Knight Defense",
			"Wade Defense",
			"Englund Gambit",
			"English Defense",
			"Keres Defence",
			"Dutch Defense",
		]
	}

	if (groupName == 'Indian-defence') {
		openings = [
			"Accelerated Queen's Indian defence",
			"Benoni Defence",
			"Benko Gambit (or Volga Gambit)",
			"Slav-Indian defence",
			"Black Knights' Tango",
			"Old Indian defence",
			"Janowski Indian defence",
			"Döry Defence",
			"Budapest Gambit",
			"Nimzo-Indian defence",
			"Modern Benoni",
			"Bogo-Indian defence",
			"Polish Defence",
			"Queen's Indian defence",
			"Blumenfeld Gambit",
			"Catalan Opening",
			"Neo-Indian Attack",
			"Australian Attack",
			"Grünfeld Defence",
			"King's Indian defence (KID)",
			"Nadanian Attack",
			"Torre Attack",
			"East Indian defence",
			"Barry Attack",
			"Trompowsky Attack",
		]
	}

	if (groupName == 'Flank') {
		openings = [
			"Zukertort Opening",
			"English Opening",
			"Benko Opening",
			"Dunst Opening",
			"Bird's Opening",
			"Larsen's Opening",
			"Sokolsky Opening",
			"Grob's Attack",
		]
	}

	res.json(openings);
})


app.get('/api/:group_name/:opening_name', function(req, res) {

	var opening = {
		
		name: "My awesome opening",
		
		moves: [
			"e2 - e4",
			"e3 - e5",
			"g1 - f3"
		],
		
		annotations: [
			"first",
			"second",
			"third"
		],
		
		starting_move: 1
	}

    res.json(opening);
});



app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});


app.listen(8080);
console.log("App listening on port 8080");

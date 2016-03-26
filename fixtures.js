var async = require('async');

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Opening = mongoose.model('Opening');
var User = mongoose.model('User');
var Game = mongoose.model('Game');



function populateOpenings (callback) {

	var openingObjects = [
		{ name: "Portuguese Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Lopez Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Vienna Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Bishop's Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Danish Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Center Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Alapin's Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Ruy Lopez", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Ponziani Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Three Knights Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Four Knights Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Italian Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Giuoco Piano", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Evans Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Hungarian Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Two Knights Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Scotch Game", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Inverted Hungarian Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Konstantinopolsky Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Elephant Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Philidor Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Latvian Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Damiano Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Petrov's Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Greco Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Napoleon Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "King's Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },
		{ name: "Parham Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Open" },

		{ name: "Corn Stalk Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "St. George Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Lemming Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Polish Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Owen's Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Sicilian Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Caro-Kann Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Nimzowitsch Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Scandinavian Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Balogh Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Czech Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Pirc Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "French Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Fred Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Barnes Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Alekhine's Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Borg Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Modern Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Goldsmith Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Carr Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },
		{ name: "Adams Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-open" },

		{ name: "Richter-Veresov Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Queen's Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Queen's Gambit Accepted (QGA)", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Queen's Gambit Declined (QGD)", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Symmetrical Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Slav Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Chigorin Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Albin Countergambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Baltic Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Marshall Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Stonewall Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Blackmar-Diemer Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "Colle System", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },
		{ name: "London System", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Closed" },

		{ name: "Polish Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-closed" },
		{ name: "Benoni Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-closed" },
		{ name: "Queen's Knight Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-closed" },
		{ name: "Wade Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-closed" },
		{ name: "Englund Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-closed" },
		{ name: "English Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-closed" },
		{ name: "Keres Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-closed" },
		{ name: "Dutch Defense", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Semi-closed" },

		{ name: "Accelerated Queen's Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Benoni Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Benko Gambit (or Volga Gambit)", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Slav-Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Black Knights' Tango", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Old Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Janowski Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Döry Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Budapest Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Nimzo-Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Modern Benoni", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Bogo-Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Polish Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Queen's Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Blumenfeld Gambit", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Catalan Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Neo-Indian Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Australian Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Grünfeld Defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "King's Indian defence (KID)", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Nadanian Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Torre Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "East Indian defence", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Barry Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },
		{ name: "Trompowsky Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Indian-defence" },

		{ name: "Zukertort Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Flank" },
		{ name: "English Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Flank" },
		{ name: "Benko Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Flank" },
		{ name: "Dunst Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Flank" },
		{ name: "Bird's Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Flank" },
		{ name: "Larsen's Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Flank" },
		{ name: "Sokolsky Opening", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Flank" },
		{ name: "Grob's Attack", moves: ["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], annotations: ["first", "second", "third", "fourth", "fifth", "sixth"], starting_move: 1, details: "trulala", groupname: "Flank" },
	];

	for (var openingObject of openingObjects) {
		var opening = new Opening(openingObject);
		opening.save(function(err, post){});
	}

	callback();
}




function populateUser (index, callback) {
	var user = new User({
		name: `user_${index}`,
		games: []
	});

	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(`user_${index}`, salt);

	user.password = hash;
	user.save(function(err, user){

		console.log(`saved_${user.name}`);
		
		if (err) {
			console.log("DAS ERR")
			console.log(err);
		} else {

			populateGames(user, index, callback)
		}
	});
}

function populateUsers (callback) {

	async.eachSeries(
		[1, 2, 3, 4, 5], 
		function(index, callback) {
	  		populateUser(index, callback);
		},
		callback);
}

function populateGames (user, index, callback) {

	console.log(`populating games for user: ${user.name}`);

	async.eachSeries(
		[
			new Game({
				groupname: "Open",
				score: index,
				user: user
			}),

			new Game({
				groupname: "Flank",
				score: index + 1,
				user: user
			}),

			new Game({
				groupname: "Semi-closed",
				score: 33,
				user: user
			}),

			new Game({
				groupname: "Semi-open",
				score: 77 + index,
				user: user
			}),

			new Game({
				groupname: "Semi-open",
				score: 34 + index,
				user: user
			})
		],
		function(game, callback) {
	  		game.save(function(err, game) {

	  			console.log(`populating game groupname: ${game.groupname} for user: ${user.name}`);
	  			
	  			if (err)
	  				console.log(err)
	  			else
	  				callback();
	  		});
		},
		callback
	);
}


exports.seed = function () {

	async.series([
		populateOpenings,
		populateUsers
	], function () {
		mongoose.connection.close();
	});
}
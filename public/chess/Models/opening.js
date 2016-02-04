class Opening {
    constructor(name, movesNotations, movesAnnotations, startingMove, details) {
		this._name = name;
		this._movesNotations = movesNotations;
		this._movesAnnotations = movesAnnotations;
		this._startingMove = startingMove;
		this._details = details;

		this._movesCount = this._movesNotations.length;
		this._movesToPlay = this._movesCount - this._startingMove;
	}

	get name() {
		return this._name;
	}

	get movesCount() {
		return this._movesCount;
	}

	isValid(move) {
		console.log("check: " + move.getNotation() + " --> " + this._movesNotations[move.number - 1]);
		return (move.getNotation() == this._movesNotations[move.number - 1]) ? true : false;
	}

	getHint() {
		return Move.getCellPositionsFromNotation(this._movesNotations[Board.currentMoveNumber - 1]);
	}

	static getOpeningsStringRepresentation() {
		return [
			{"name" : "Portuguese Opening", "type" : "Open"},
			{"name" : "Lopez Opening", "type" : "Open"},
			{"name" : "Vienna Game", "type" : "Open"},
			{"name" : "Bishop's Opening", "type" : "Open"},
			{"name" : "Danish Gambit", "type" : "Open"},
			{"name" : "Center Game", "type" : "Open"},
			{"name" : "Alapin's Opening", "type" : "Open"},
			{"name" : "Ruy Lopez", "type" : "Open"},
			{"name" : "Ponziani Opening", "type" : "Open"},
			{"name" : "Three Knights Game", "type" : "Open"},
			{"name" : "Four Knights Game", "type" : "Open"},
			{"name" : "Italian Game", "type" : "Open"},
			{"name" : "Giuoco Piano", "type" : "Open"},
			{"name" : "Evans Gambit", "type" : "Open"},
			{"name" : "Hungarian Defense", "type" : "Open"},
			{"name" : "Two Knights Defense", "type" : "Open"},
			{"name" : "Scotch Game", "type" : "Open"},
			{"name" : "Inverted Hungarian Opening", "type" : "Open"},
			{"name" : "Konstantinopolsky Opening", "type" : "Open"},
			{"name" : "Elephant Gambit", "type" : "Open"},
			{"name" : "Philidor Defence", "type" : "Open"},
			{"name" : "Latvian Gambit", "type" : "Open"},
			{"name" : "Damiano Defense", "type" : "Open"},
			{"name" : "Petrov's Defence", "type" : "Open"},
			{"name" : "Greco Defense", "type" : "Open"},
			{"name" : "Napoleon Opening", "type" : "Open"},
			{"name" : "King's Gambit", "type" : "Open"},
			{"name" : "Parham Attack", "type" : "Open"},
			{"name" : "Corn Stalk Defence", "type" : "Semi-open"},
			{"name" : "St. George Defence", "type" : "Semi-open"},
			{"name" : "Lemming Defense", "type" : "Semi-open"},
			{"name" : "Polish Gambit", "type" : "Semi-open"},
			{"name" : "Owen's Defence", "type" : "Semi-open"},
			{"name" : "Sicilian Defence", "type" : "Semi-open"},
			{"name" : "Caro-Kann Defence", "type" : "Semi-open"},
			{"name" : "Nimzowitsch Defence", "type" : "Semi-open"},
			{"name" : "Scandinavian Defence", "type" : "Semi-open"},
			{"name" : "Balogh Defence", "type" : "Semi-open"},
			{"name" : "Czech Defence", "type" : "Semi-open"},
			{"name" : "Pirc Defence", "type" : "Semi-open"},
			{"name" : "French Defence", "type" : "Semi-open"},
			{"name" : "Fred Defence", "type" : "Semi-open"},
			{"name" : "Barnes Defence", "type" : "Semi-open"},
			{"name" : "Alekhine's Defence", "type" : "Semi-open"},
			{"name" : "Borg Opening", "type" : "Semi-open"},
			{"name" : "Modern Defence", "type" : "Semi-open"},
			{"name" : "Goldsmith Defence", "type" : "Semi-open"},
			{"name" : "Carr Defense", "type" : "Semi-open"},
			{"name" : "Adams Defence", "type" : "Semi-open"},
			{"name" : "Richter-Veresov Attack", "type" : "Closed"},
			{"name" : "Queen's Gambit", "type" : "Closed"},
			{"name" : "Queen's Gambit Accepted (QGA)", "type" : "Closed"},
			{"name" : "Queen's Gambit Declined (QGD)", "type" : "Closed"},
			{"name" : "Symmetrical Defense", "type" : "Closed"},
			{"name" : "Slav Defense", "type" : "Closed"},
			{"name" : "Chigorin Defense", "type" : "Closed"},
			{"name" : "Albin Countergambit", "type" : "Closed"},
			{"name" : "Baltic Defense", "type" : "Closed"},
			{"name" : "Marshall Defense", "type" : "Closed"},
			{"name" : "Stonewall Attack", "type" : "Closed"},
			{"name" : "Blackmar-Diemer Gambit", "type" : "Closed"},
			{"name" : "Colle System", "type" : "Closed"},
			{"name" : "London System", "type" : "Closed"},
			{"name" : "Polish Defense", "type" : "Semi-closed"},
			{"name" : "Benoni Defense", "type" : "Semi-closed"},
			{"name" : "Queen's Knight Defense", "type" : "Semi-closed"},
			{"name" : "Wade Defense", "type" : "Semi-closed"},
			{"name" : "Englund Gambit", "type" : "Semi-closed"},
			{"name" : "English Defense", "type" : "Semi-closed"},
			{"name" : "Keres Defence", "type" : "Semi-closed"},
			{"name" : "Dutch Defense", "type" : "Semi-closed"},
			{"name" : "Accelerated Queen's Indian defence", "type" : "Indian defence"},
			{"name" : "Benoni Defence", "type" : "Indian defence"},
			{"name" : "Benko Gambit (or Volga Gambit)", "type" : "Indian defence"},
			{"name" : "Slav-Indian defence", "type" : "Indian defence"},
			{"name" : "Black Knights' Tango", "type" : "Indian defence"},
			{"name" : "Old Indian defence", "type" : "Indian defence"},
			{"name" : "Janowski Indian defence", "type" : "Indian defence"},
			{"name" : "Döry Defence", "type" : "Indian defence"},
			{"name" : "Budapest Gambit", "type" : "Indian defence"},
			{"name" : "Nimzo-Indian defence", "type" : "Indian defence"},
			{"name" : "Modern Benoni", "type" : "Indian defence"},
			{"name" : "Bogo-Indian defence", "type" : "Indian defence"},
			{"name" : "Polish Defence", "type" : "Indian defence"},
			{"name" : "Queen's Indian defence", "type" : "indiandefence"},
			{"name" : "Blumenfeld Gambit", "type" : "Indian defence"},
			{"name" : "Catalan Opening", "type" : "Indian defence"},
			{"name" : "Neo-Indian Attack", "type" : "Indian defence"},
			{"name" : "Australian Attack", "type" : "Indian defence"},
			{"name" : "Grünfeld Defence", "type" : "Indian defence"},
			{"name" : "King's Indian defence (KID)", "type" : "Indian defence"},
			{"name" : "Nadanian Attack", "type" : "Indian defence"},
			{"name" : "Torre Attack", "type" : "Indian defence"},
			{"name" : "East Indian defence", "type" : "Indian defence"},
			{"name" : "Barry Attack", "type" : "Indian defence"},
			{"name" : "Trompowsky Attack", "type" : "Indian defence"},
			{"name" : "Zukertort Opening", "type" : "Flank"},
			{"name" : "English Opening", "type" : "Flank"},
			{"name" : "Benko Opening", "type" : "Flank"},
			{"name" : "Dunst Opening", "type" : "Flank"},
			{"name" : "Bird's Opening", "type" : "Flank"},
			{"name" : "Larsen's Opening", "type" : "Flank"},
			{"name" : "Sokolsky Opening", "type" : "Flank"},
			{"name" : "Grob's Attack", "type" : "Flank"}
        ];
	}


	static getOpeningNamesByGroupName(openingGroup) {
		var openingsNamesArray = [];
		for (var opening of Opening.getOpeningsStringRepresentation())
			if (opening.type == openingGroup) 
				openingsNamesArray.push(opening.name);

		return openingsNamesArray;
	}

	static getOpeningByName(openingName) {
		return new Opening(openingName, 
					["e2 - e4", "c7 - c5", "Ng1 - f3", "c5 - c4", "d2 - d4", "c4 - c3"], 
					["first", "second", "third", "fourth", "fifth", "sixth"], 
					1, 
					"Some details here, thats all.");
	}

}
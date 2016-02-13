class Opening {
    constructor(name, moves, annotations, startingMove, details) {
		this._name = name;
		this._moves = moves;
		this._annotations = annotations;
		this._startingMove = startingMove;
		this._details = details;

		this._movesCount = this._moves.length;
		this._movesToPlay = this._movesCount - this._startingMove;
	}

	get name() {
		return this._name;
	}

	get movesCount() {
		return this._movesCount;
	}

	isValid(move) {
		return (move.getNotation() == this._moves[move.number - 1]) ? true : false;
	}

	getHint() {
		return Move.getCellPositionsFromNotation(this._moves[Board.currentMoveNumber - 1]);
	}


	static getOpeningNamesByGroupName(openingGroup) {
		var openingsNamesArray = [];
		for (var opening of Opening.getOpeningsStringRepresentation())
			if (opening.type == openingGroup) 
				openingsNamesArray.push(opening.name);

		return openingsNamesArray;
	}

}
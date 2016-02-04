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
		return (move.getNotation() == this._movesNotations[move.number - 1]) ? true : false;
	}

	getHint() {
		return Move.getCellPositionsFromNotation(this._movesNotations[Board.currentMoveNumber - 1]);
	}


	static getOpeningNamesByGroupName(openingGroup) {
		var openingsNamesArray = [];
		for (var opening of Opening.getOpeningsStringRepresentation())
			if (opening.type == openingGroup) 
				openingsNamesArray.push(opening.name);

		return openingsNamesArray;
	}

}
class Move {
	constructor(moveFrom, moveTo, number) {
		this._moveFrom = moveFrom;
		this._moveTo = moveTo;
		this._number = number;
		this._side = moveFrom.piece.side;
	}

	get number() {
		return this._number;
	}

	getNotation() {
		return  this._moveFrom.piece.getNotation() + 
				this._moveFrom.getNotation() + 
				(this._moveTo.isEmpty() ? ' - ' : ' x ') + 
				this._moveTo.getNotation();
	}

	getRelativeNotation() {
		if (this._number % 2 == 1)
		        return Math.floor(this._number / 2) + 1 + ". " + this.getNotation() + "; ";
		    else
		        return this.getNotation() + ". ";
	}

	static getCellPositionsFromNotation(notation) {
		var cellsNotationsWithPiece = notation.split(" - ");
		var fromNotation = cellsNotationsWithPiece[0].substring(cellsNotationsWithPiece[0].length - 2);
		var toNotation   = cellsNotationsWithPiece[1].substring(cellsNotationsWithPiece[1].length - 2);

		return [fromNotation, toNotation];
	}
}
class Cell {
	constructor(color, position, piece) {
		this._color = color;
		this._piece = piece;
		this._row = parseInt(position.toString()[0]);
		this._column = parseInt(position.toString()[1]);

		this._isSelected = false;
		this._isValid = false;
		this._isExpected = false;
	}

	get color() {
		return this._color;
	}

	get row() {
		return this._row;
	}

	get column() {
		return this._column;
	}

	get piece() {
		return this._piece;
	}

	set piece(newPiece) {
		this._piece = newPiece;
	}

	getNotation() {
		var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		return letters[this.column - 1] + this.row;
	}


	isEmpty() {
		return !this._piece;
	}

	isFriend(cell) {
		return (!cell.isEmpty() && !this.isEmpty() && (cell.piece.side == this._piece.side));
	}

	isEnemy(cell) {
		return (!cell.isEmpty() && !this.isEmpty() && (cell.piece.side != this._piece.side));
	}



	isSelected() {
		return this._isSelected;
	}

	isValid() {
		return this._isValid;	
	}

	isExpected() {
		return this._isExpected;
	}


	validate() {
		this._isValid = true;
	}

	unvalidate() {
		this._isValid = false;
	}


	select() {		
		this._isSelected = true;
	}

	deselect() {
		this._isSelected = false;
	}

	expect() {
		this._isExpected = true;
	}

	unexpect() {
		this._isExpected = false;
	}
}

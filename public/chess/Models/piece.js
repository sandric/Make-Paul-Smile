class Piece {
	constructor(side, type) {
		this._side = side;
		this._type = type;
		this._moved = false;
	}	

	get side() {
		return this._side;
	}

	get type() {
		return this._type;
	}

	isMoved() {
		return this._moved;
	}

	move() {
		this._moved = true;
	}

	imagePath() {
		return "/images/pieces/" + this._side + "/" + this._type + ".svg"
	}

	urlPath() {
		return "url('" + this.imagePath() + "')";
	}

	getNotation() {		
		var pieceNotation;

		switch(this._type) {
			case 'pawn':   pieceNotation = '';  break;
			case 'knight': pieceNotation = 'N'; break;
			case 'bishop': pieceNotation = 'B'; break;
			case 'rock':   pieceNotation = 'R'; break;
			case 'quine':  pieceNotation = 'Q'; break;
			case 'king':   pieceNotation = 'K'; break;
		}

		return pieceNotation; 
	}
}
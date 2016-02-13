class Board {
    constructor(opening, type, delegate) {

	    Board.currentMoveNumber = 1;
	    Board.delay = 1000;

        this._opening = opening;

	    this._type = type;

	    this._delegate = delegate;

	    this.generate();

	    this._delegate.displayInfoMessage("you playing " + this._type + " game.");
    }

    get cells() {
		return this._cells;
	}

	generateCells() {
	    this._cells = [];

		for (var i = 0; i <= 7; i++) {
			if (i % 2 == 0) {
				var firstCell = "black"
				var secondCell = "white"
			} else {
				var firstCell = "white"
				var secondCell = "black"
			}
			
			for (var j = 0; j <= 7; j++) {
				var position = ((8 - i) * 10) + (j + 1)
				if(j % 2 == 0)
					this._cells[position] = new Cell(firstCell, position);
				else
					this._cells[position] = new Cell(secondCell, position);
			}
		}
	}

  	generatePieces() {
	  	this._cells[11].piece = new Piece('white', 'rock');
	  	this._cells[12].piece = new Piece('white', 'knight');
	  	this._cells[13].piece = new Piece('white', 'bishop');
	  	this._cells[14].piece = new Piece('white', 'quine');
	  	this._cells[15].piece = new Piece('white', 'king');
	  	this._cells[16].piece = new Piece('white', 'bishop');
	  	this._cells[17].piece = new Piece('white', 'knight');
	  	this._cells[18].piece = new Piece('white', 'rock');

	  	this._cells[21].piece = new Piece('white', 'pawn');
	  	this._cells[22].piece = new Piece('white', 'pawn');
	  	this._cells[23].piece = new Piece('white', 'pawn');
	  	this._cells[24].piece = new Piece('white', 'pawn');
	  	this._cells[25].piece = new Piece('white', 'pawn');
	  	this._cells[26].piece = new Piece('white', 'pawn');
	  	this._cells[27].piece = new Piece('white', 'pawn');
	  	this._cells[28].piece = new Piece('white', 'pawn');


	  	this._cells[81].piece = new Piece('black', 'rock');
	  	this._cells[82].piece = new Piece('black', 'knight');
	  	this._cells[83].piece = new Piece('black', 'bishop');
	  	this._cells[84].piece = new Piece('black', 'quine');
	  	this._cells[85].piece = new Piece('black', 'king');
	  	this._cells[86].piece = new Piece('black', 'bishop');
	  	this._cells[87].piece = new Piece('black', 'knight');
	  	this._cells[88].piece = new Piece('black', 'rock');

	  	this._cells[71].piece = new Piece('black', 'pawn');
	  	this._cells[72].piece = new Piece('black', 'pawn');
	  	this._cells[73].piece = new Piece('black', 'pawn');
	  	this._cells[74].piece = new Piece('black', 'pawn');
	  	this._cells[75].piece = new Piece('black', 'pawn');
	  	this._cells[76].piece = new Piece('black', 'pawn');
	  	this._cells[77].piece = new Piece('black', 'pawn');
	  	this._cells[78].piece = new Piece('black', 'pawn');
  	}

	generate() {
	  	this.generateCells();
	  	this.generatePieces();

	  	this._ruler = new Ruler(this);

	  	this._delegate.onBoardGenerated();
	}

	simulateMove() {
		if (!this.isEnded()) {
			var expectation = this._opening.getHint();
			this.move(this.cellFromPosition(expectation[0]), this.cellFromPosition(expectation[1]));
		}
	}

	startMovesSimulation() {
		var self = this;
		this._timer = setInterval(function() { self.simulateMove() }, Board.delay);
	}

	stopMovesSimulation() {
  		clearInterval(this._timer);
	}


 	selectCell(cell) {
		if (this.moveFrom)
			this.moveTo = cell;
		else
			this.moveFrom = cell;
	}


    get moveFrom() {
  	    return this._moveFrom;
    }

    set moveFrom(moveFrom) {
		this.removeSelection();
		this.removeValidation();
		this.removeHint();

	    if (!moveFrom) {
	    	this._moveFrom = moveFrom;
	    } else {
	    	if (!moveFrom.isEmpty()) {
	    		if (this.isTurnsPiece(moveFrom.piece)) {
	    			this._moveFrom = moveFrom;
	    			this._moveFrom.select();
	    			this._ruler.check(this._moveFrom);
	    		}
	    		else {
					this._delegate.displayInfoMessage("Its other's side turn now");
	    		}
	    	} else {
				this._delegate.displayInfoMessage("You need to select piece, silly!");
	    	}
	    }
    }


    get moveTo() {
  	    return this._moveTo;
    }

    set moveTo(moveTo) {
    	this.removeHint();

    	if (this.moveFrom == moveTo)
    		this.moveFrom = undefined;
    	else {
    		if (this.moveFrom.isFriend(moveTo))
    			this.moveFrom = moveTo;
    		else
    			if (moveTo.isValid()) {
    				this._moveTo = moveTo;
    				this.move(this.moveFrom, this._moveTo);
    				this.moveFrom = undefined;
    				this._moveTo = undefined;
    			} else
    				this._delegate.displayInfoMessage("Those are cant move that way baby");
		}
    }



    move(moveFrom, moveTo) {
    	var move = new Move(moveFrom, moveTo, Board.currentMoveNumber);

    	if (this._opening.isValid(move)) {

    		this._delegate.displayMoveNotation(move.getRelativeNotation());
    		this.movePieces(moveFrom, moveTo);

    		Board.currentMoveNumber++;

    		if (this.isTrainingGame()) {
    			this._delegate.displayInfoMessage("Yep, good job!");
    			this._delegate.onPlayerMadeMove();
    		} else {
       			this._delegate.onComputerMadeMove();
       			this._delegate.displayInfoMessage(this._opening._annotations[Board.currentMoveNumber - 2]);

    		}

       		if (this.isEnded())
       			this._delegate.onGameEnded();
    	} else {
			this._delegate.displayInfoMessage("Nope, its not that.");
			this._delegate.onPlayerMadeMistake();    		
    	}
	}



	movePieces(fromCell, toCell) {
		toCell.piece = fromCell.piece;
		fromCell.piece.move();
		fromCell.piece = undefined;
	}



	removeSelection() {
		for(var cell in this._cells)
			this._cells[cell].deselect();
	}

	removeValidation() {
		for(var cell in this._cells)
			this._cells[cell].unvalidate();
	}


	highlightHint(cells) {
		var expectation = this._opening.getHint();

		this.cellFromPosition(expectation[0]).expect();
		this.cellFromPosition(expectation[1]).expect();
	}

	removeHint() {
		for(var cell in this._cells)
			this._cells[cell].unexpect();
	}



	cell(row, column) {
    	return this.cells[(row * 10) + column];
    }

    cellFromPosition(position) {
    	var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

    	var columnLetter = position[position.length - 2];

    	var row = position[position.length - 1];
    	var column = 1;

    	for (var letter of letters) {
    		if (letter == columnLetter)
    			break;
    		column++;
    	}

    	return this.cell(row, column);
    }




    isLearningGame() {
    	return (this._type == "learning");
    }

	isTrainingGame() {
    	return (this._type == "training");
    }

    isEnded() {
    	console.log("CurrentNumber: " + Board.currentMoveNumber + " TotalMoves: " + this._opening.movesCount);
    	return (Board.currentMoveNumber > this._opening.movesCount);
    }



    isTurnsPiece(piece) {
    	return (Board.currentMoveNumber % 2 == 0 && piece.side == "black" ||
    			Board.currentMoveNumber % 2 == 1 && piece.side == "white")
    }
}

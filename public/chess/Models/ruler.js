class Ruler {
	constructor(board) {
		this._board = board;
	}

	validOnVerticalUp(length) {
		var validCellsLength = 0;

		for (var row = this._selected.row + 1; row < 9; row++) {

			if (length && (validCellsLength >= length)) break;

			var cell = this._board.cell(row, this._selected.column);

			if (this._selected.isFriend(cell)) break;

			cell.validate();
			validCellsLength++;

			if (this._selected.isEnemy(cell)) break;
		}
	}

	validOnVerticalDown(length) {
		var validCellsLength = 0;

		for (var row = this._selected.row - 1; row > 0; row--) {

			if (length && validCellsLength >= length) break;

			var cell = this._board.cell(row, this._selected.column);

			if (this._selected.isFriend(cell)) break;

			cell.validate();
			validCellsLength++;

			if (this._selected.isEnemy(cell)) break;
		}
	}

	validOnHorizontalLeft(length) {
		var validCellsLength = 0;

		for (var column = this._selected.column - 1; column > 0; column--) {

			if (length && (validCellsLength >= length)) break;

			var cell = this._board.cell(this._selected.row, column);

			if (this._selected.isFriend(cell)) break;

			cell.validate();
			validCellsLength++;

			if (this._selected.isEnemy(cell)) break;
		}
	}

	validOnHorizontalRight(length) {
		var validCellsLength = 0;

		for (var column = this._selected.column + 1; column < 9; column++) {

			if (length && (validCellsLength >= length)) break;

			var cell = this._board.cell(this._selected.row, column);

			if (this._selected.isFriend(cell)) break;

			cell.validate();
			validCellsLength++;

			if (this._selected.isEnemy(cell)) break;
		}
	}



	validOnDiagonalTopLeft(length) {
		var validCellsLength = 0;

		for (var i = 1, row = this._selected.row + 1; row < 9; row++, i++) {

			if (length && validCellsLength >= length) break;
			if (this._selected.column - i < 1) break;
			
			var cell = this._board.cell(row, this._selected.column - i);

			if (this._selected.isFriend(cell)) break;

			cell.validate();
			validCellsLength++;

			if (this._selected.isEnemy(cell)) break;
		}
	}

	validOnDiagonalTopRight(length) {
		var validCellsLength = 0;

		for (var i = 1, row = this._selected.row + 1; row < 9; row++, i++) {

			if (length && validCellsLength >= length) break;
			if (this._selected.column + i > 8) break;
			
			var cell = this._board.cell(row, this._selected.column + i);

			if (this._selected.isFriend(cell)) break;

			cell.validate();
			validCellsLength++;

			if (this._selected.isEnemy(cell)) break;
		}
	}


	validOnDiagonalBottomLeft(length) {
		var validCellsLength = 0;

		for (var i = 1, row = this._selected.row - 1; row > 0; row--, i++) {

			if (length && validCellsLength >= length) break;
			if (this._selected.column - i < 1) break;
			
			var cell = this._board.cell(row, this._selected.column - i);

			if (this._selected.isFriend(cell)) break;

			cell.validate();
			validCellsLength++;

			if (this._selected.isEnemy(cell)) break;
		}
	}

	validOnDiagonalBottomRight(length) {
		var validCellsLength = 0;

		for (var i = 1, row = this._selected.row - 1; row > 0; row--, i++) {

			if (length && validCellsLength >= length) break;
			if (this._selected.column + i > 8) break;
			
			var cell = this._board.cell(row, this._selected.column + i);

			if (this._selected.isFriend(cell)) break;

			cell.validate();
			validCellsLength++;

			if (this._selected.isEnemy(cell)) break;
		}
	}

	validOnKnight(mainDirection, secondaryDirection) {
		var mainVector, secondaryVector;

		switch (mainDirection) {
			case 'top':    mainVector = [1, 0]; break;
			case 'bottom': mainVector = [-1, 0]; break;
			case 'left':   mainVector = [0, -1]; break;
			case 'right':  mainVector = [0, 1]; break;
		}

		switch (secondaryDirection) {
			case 'top':    secondaryVector = [1, 0]; break;
			case 'bottom': secondaryVector = [-1, 0]; break;
			case 'left':   secondaryVector = [0, -1]; break;
			case 'right':  secondaryVector = [0, 1]; break;
		}
		
		var first = this._board.cell(this._selected.row + mainVector[0], this._selected.column + mainVector[1]);
		
		if (first) {
			var second = this._board.cell(first.row + mainVector[0], first.column + mainVector[1]);
			if (second) {
				var third = this._board.cell(second.row + secondaryVector[0], second.column + secondaryVector[1]);
				if (third && (third.isEmpty() || third.isEnemy(this._selected)))
					third.validate();
			}
		}		
	}


	validStraight(length) {
		this.validOnVerticalUp(length);
		this.validOnVerticalDown(length);
		this.validOnHorizontalLeft(length);
		this.validOnHorizontalRight(length);
	}

	validDiagonal(length) {
		this.validOnDiagonalTopLeft(length);
		this.validOnDiagonalTopRight(length);
		this.validOnDiagonalBottomLeft(length);
		this.validOnDiagonalBottomRight(length);
	}


	checkPawn() {
		if (this._selected.piece.side == 'white') {
			if (!this._selected.piece.isMoved())
				var superTopCell = this._board.cell(this._selected.row + 2, this._selected.column);
			var topCell = this._board.cell(this._selected.row + 1, this._selected.column);
			var leftCell = this._board.cell(this._selected.row + 1, this._selected.column - 1);
			var rightCell = this._board.cell(this._selected.row + 1, this._selected.column + 1);
		} else {
			if (!this._selected.piece.isMoved())
				var superTopCell = this._board.cell(this._selected.row - 2, this._selected.column);
			var topCell = this._board.cell(this._selected.row - 1, this._selected.column);
			var leftCell = this._board.cell(this._selected.row - 1, this._selected.column - 1);
			var rightCell = this._board.cell(this._selected.row - 1, this._selected.column + 1);
		}

		if (superTopCell && superTopCell.isEmpty())
			superTopCell.validate();

		if (topCell && topCell.isEmpty())
			topCell.validate();

		if (leftCell && leftCell.isEnemy(this._selected))
			leftCell.validate();
		
		if (rightCell && rightCell.isEnemy(this._selected))
			rightCell.validate();
	}

	checkKnight(length) {		
		this.validOnKnight('top', 'left');
		this.validOnKnight('top', 'right');
		this.validOnKnight('bottom', 'left');
		this.validOnKnight('bottom', 'right');
		this.validOnKnight('left', 'top');
		this.validOnKnight('left', 'bottom');
		this.validOnKnight('right', 'top');
		this.validOnKnight('right', 'bottom');
	}


	checkBishop(length) {
		this.validDiagonal();
	}

	checkRock(length) {
		this.validStraight();
	}

	checkQuine() {
		this.validStraight().concat(this.validDiagonal());
	}

	checkKing() {
		this.validStraight(1).concat(this.validDiagonal(1));
	}

	check(selected) {
		this._selected = selected;

		switch (this._selected.piece.type) {
			case 'pawn': this.checkPawn(); break;
			case 'knight': this.checkKnight(); break;
			case 'bishop': this.checkBishop(); break;
			case 'rock': this.checkRock(); break;
			case 'quine': this.checkQuine(); break;
			case 'king': this.checkKing(); break;
		}
	}
}

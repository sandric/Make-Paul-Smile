class BoardView {
	constructor(opening, type, delegate) {

		this._opening = opening;
		this._type = type;
		this._delegate = delegate;

		this._board = new Board(this._opening, this._type, this._delegate);

		this._htmlElement = $("#board");

		this._htmlElement.html("");

		this._cellViews = [];

		for (var row = 8; row > 0; row--)
			for (var column = 1; column < 9; column++) {

			var cellView = new CellView(this._board.cells[row * 10 + column], this._htmlElement);
			
			(function(cellView, self) {
				cellView.htmlElement.click(function() {
					self.cellViewPressed(cellView);
				});})(cellView, this);

			this._cellViews.push(cellView);
		}

		this.draw();
	}

	cellViewPressed(cellView) {
		this._board.selectCell(cellView.cell);
		this.draw();
	}


	draw() {
		for (var cellView in this._cellViews)
			this._cellViews[cellView].draw();
	}


	highlightHint() {
		this._board.highlightHint();
		this.draw();
	}

	step() {
		this._board.simulateMove();
		this.draw();
	}

	play() {
		this._board.startMovesSimulation();
		this.draw();
	}

	stop() {
		this._board.stopMovesSimulation();
		this.draw();
	}

}
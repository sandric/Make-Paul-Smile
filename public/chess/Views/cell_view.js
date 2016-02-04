class CellView {

	constructor(cell, parentElement) {
		this._cell = cell;
		this._parentElement = parentElement;

		this.create();
	}

	get cell() {
		return this._cell;
	}

	tag() {
		return (this._cell.row * 10) + this._cell.column;
	}

	create() {
		var htmlString = "<div id='" + this.tag() + "'></div>";
		this._parentElement.append(htmlString);
		this._htmlElement = $("#" + this.tag());

		this.draw();		
	}

	draw() {		
		this._htmlElement.removeClass().addClass("cell " + this.getCellClass() + "-cell");

		if(this._cell.isEmpty())
			this._htmlElement.removeAttr('style');
		else
			this._htmlElement.css("background-image", "url('" + this._cell.piece.imagePath() + "')");
	}

	getCellClass() {
		var cellClass;

		if (this._cell.isSelected())
			cellClass = "selected";
		else 
			if (this._cell.isExpected())
				cellClass = "expected";
			else 
				if (this._cell.isValid())
					cellClass = "valid";
					else 
						if (this._cell.color == "white")
							cellClass = "white";
						else 
							cellClass = "black";

		return cellClass;
	}

	get htmlElement() {
		return this._htmlElement;
	}


	
}
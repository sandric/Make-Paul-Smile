class TrainingController {


	constructor(selectedOpeningGroup) {
		this._score = 0;
		this._selectedOpeningGroup = selectedOpeningGroup;

		this.generate();
	}

	generate() {
		this._openingNames = Opening.getOpeningNamesByGroupName(this._selectedOpeningGroup);
		$("#moves").html("");
		this.movesMade = 0;
		this.getRandomOpening();
		this.displayOpeningsName();

		this._board_view = new BoardView(this._opening, "training", this);

		this.registerOnClickListeners();
	}


	registerOnClickListeners() {
		$(".button").off();

		$(".button-end").on("click", {self: this}, this.onEndButtonPressed);
		$(".button-skip").on("click", {self: this}, this.onSkipButtonPressed);
		$(".button-hint").on("click", {self: this}, this.onHintButtonPressed);
	}


	
	getRandomOpening(){
		var randomIndex = Math.floor((Math.random() * this._openingNames.length));
		this._opening = Opening.getOpeningByName(this._openingNames[randomIndex]);
	}



	increaseScore() {
		this._score++;
		$("#ratingLabel").html(this._score);
	}

	decreaseScore() {
		this._score--;
		$("#ratingLabel").html(this._score);
	}

	clearScore() {
		this._score = 0;
		$("#ratingLabel").html(this._score);
	}



	displayOpeningsName() {
		$("#main h1").html("Training " + this._opening.name)
	}


	displayInfoMessage(string) {
		$("#info").html(string);
	}

	displayMoveNotation(string) {
		if (this.movesMade % 2 == 0)
			$("#moves").append("<div class='move'><div class='white'>" + string +"</div></div>");
		else
			$(".move").last().append("<div class='black'>" + string +"</div>");

		this.movesMade++;
	}

	onBoardGenerated() {
		console.log("generated");
	}


	onPlayerMadeMove() {
		console.log("PlayerMadeMove");
		this.increaseScore();
	}


	onPlayerMadeMistake() {
		console.log("Mistake");
		this.decreaseScore();
	}


	onComputerMadeMove() {
		console.log("comp made move");
		this._board_view.draw();
	}

	onGameEnded() {
		this._board_view.stop();
		$(".button-hint").removeClass('enabled');
	}		



	onEndButtonPressed(event) {
		
	}

	onSkipButtonPressed(event) {
		event.data.self.generate();	
	}

	onHintButtonPressed(event) {
		event.data.self._board_view.highlightHint();
		event.data.self.decreaseScore();
	}
}
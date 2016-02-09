class TrainingController {


	constructor(openings) {
		this._score = 0;
		this._openings = openings;

		this.generate();
	}

	generate() {
		if (this._openings.length < 1) 
			this.endGame();
		else {
			$("#moves").html("");
			this.movesMade = 0;
			this.getRandomOpening();

			this.displayOpeningsName();
			this.displayOpeningsLeftLabel();

			this._board_view = new BoardView(this._opening, "training", this);

			this.registerOnClickListeners();
		}
	}

	endGame() {
		window.location.href = "#/results/7/7";
	}


	registerOnClickListeners() {
		$(".button").off();

		$(".button-end").on("click", {self: this}, this.onEndButtonPressed);
		$(".button-skip").on("click", {self: this}, this.onSkipButtonPressed);
		$(".button-hint").on("click", {self: this}, this.onHintButtonPressed);
	}


	
	getRandomOpening(){

		var randomIndex = Math.floor((Math.random() * this._openings.length));

		this._opening = new Opening(this._openings[randomIndex].name,
                                    this._openings[randomIndex].moves,
                                    this._openings[randomIndex].annotations,
                                    this._openings[randomIndex].startingMove,
                                    this._openings[randomIndex].details);
		
		this._openings.splice(randomIndex, 1);

		if ($('.openingLeft')[randomIndex])
			$('.openingLeft')[randomIndex].remove();
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



	displayOpeningsLeftLabel() {
		$("#openingsLeftLabel").html(this._openings.length);
	}



	displayOpeningsName() {
		$(".game h2").html(this._opening.name)
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
		$(".button-hint").addClass('enabled');
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
		this.generate();
	}		



	onEndButtonPressed(event) {
		event.data.self.endGame();	
	}


	onSkipButtonPressed(event) {
		event.data.self.generate();	
	}

	onHintButtonPressed(event) {
		if ($(this).hasClass("enabled")) {
			event.data.self._board_view.highlightHint();
			event.data.self.decreaseScore();

			$(".button-hint").removeClass('enabled');
		}
	}
}
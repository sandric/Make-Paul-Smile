class LearningController {

	constructor(name, movesNotations, movesAnnotations, startingMove, details) {

		this._name = name;
		this._movesNotations = movesNotations;
		this._movesAnnotations = movesAnnotations;
		this._startingMove = startingMove;
		this._details = details;
		
		this.generate();
	}

	generate() {
		
        $(".button-play").addClass('enabled');
        $(".button-step").addClass('enabled');
        $(".button-play").html("Play");

        $("#moves").html("");

        this._isPlaying = false;

        this.movesMade = 0;

        this._opening = new Opening(this._name, this._movesNotations, this._movesAnnotations, this._startingMove, this._details);

        this.displayOpeningsName();

        this._board_view = new BoardView(this._opening, "learning", this);

        this.registerOnClickListeners();
	}

	registerOnClickListeners() {
		$(".button").off();

		$(".button-reload").on("click", {self: this}, this.onReloadButtonPressed);
		$(".button-play").on("click", {self: this}, this.onPlayButtonPressed);
		$(".button-step").on("click", {self: this}, this.onStepButtonPressed);

		$(".cell").off('click');
	}


	displayOpeningsName() {
		$("#main h1").html("Learning " + this._opening.name)
	}


	displayInfoMessage(string) {
		console.log(string);
		$("#info").html(string);
	}

	displayMoveNotation(string) {
		console.log(string);

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
	}


	onPlayerMadeMistake() {
		console.log("Mistake");
	}


	onComputerMadeMove() {
		console.log("comp made move");
		this._board_view.draw();
	}

	onGameEnded() {
		this._board_view.stop();
		$(".button-step").removeClass('enabled');
		$(".button-play").removeClass('enabled');
	}		



	onReloadButtonPressed(event) {
		event.data.self._board_view.stop();
		event.data.self.generate();
	}

	onPlayButtonPressed(event) {
		if ($(this).hasClass('enabled')) {
			if (event.data.self._isPlaying) {
				event.data.self._board_view.stop();
				$(this).html("Play");
				$(".button-step").addClass('enabled');
			} else {
				event.data.self._board_view.play();
				$(this).html("Stop");
				$(".button-step").removeClass('enabled');
			}

			event.data.self._isPlaying = !event.data.self._isPlaying;
		}
	}

	onStepButtonPressed(event) {
		if ($(this).hasClass('enabled')) {
			event.data.self._board_view.step();
		}
	}
}
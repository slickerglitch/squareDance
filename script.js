// Creating a game object to track curr player & board state
const game = {
	currPlayer: "x", // <- Track current player
	boardState: Array(12).fill(null), // Initialize to null so ready to add player inputs (either X || O)
	gameOver: false,
	// Initialize the gameboard

	gameBoard() {
		const board = document.getElementById("board");

		for (i = 0; i < 12; i++) {
			const square = document.createElement("div");
			board.appendChild(square);
			square.classList.add("square");
		}
	},
	
	init() {
		this.gameBoard();

		document.getElementById("reset"); // Useful later
		//document.addEventListener("click", () => this.reset());

	}
};

game.init();


// So,  I'll need to create a game board
// Then, I'll need to create an event handler to allow the user to click on a square
// Two player game, so we will need to switch between player 1 & player 2
// Before that, we need to have logic for the game



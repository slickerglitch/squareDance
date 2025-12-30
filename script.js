// Creating a game object to track curr player & board state
const ticTacToe = {
	currPlayer: "x", // <- Track current player
	boardState: Array(9).fill(null), // Initialize to null so ready to add player inputs (either X || O)
	gameOver: false,
	// Initialize the gameboard

	gameBoard() {
		const board = document.getElementById("board");
		// Issues: 
		// Gameboard was not being called, because Init was not being called in the first place
		// Naming issues: CSS not taking effect because names were incorrect
		
		// const square = document.createElement("div");
		// square.classList.add("square");
		//square.classList.add("")
		//board.appendChild(square); 
		for (i = 0; i < 9; i++) {
			const square = document.createElement("div");
			board.appendChild(square);
			square.classList.add("square");
		}
		
	},
	
	init() {
		this.gameBoard();

		document.getElementById("reset"); // Useful later
		document.addEventListener("click", () => this.reset());

	}
	
	

};

ticTacToe.init();


// So,  I'll need to create a game board
// Then, I'll need to create an event handler to allow the user to click on a square
// Two player game, so we will need to switch between player 1 & player 2
// Before that, we need to have logic for the game



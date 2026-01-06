// Creating a game object to track curr player & board state
const dancer1 = "𓆏";
const dancer2 = "𐂂"; 



const game = {
	gameBoard() {
		const board = document.getElementById("board");

		// for (let i = 0; i < 12; i++) { // <-For 2*6 matrix
		for (let i = 0; i < 4; i++) {
			// let i = 0; i <= array.length - 1; i++
			const square = document.createElement("div");
			board.appendChild(square);
			square.classList.add("square");
				
			// for (let j = 1; j < 3; j+=2) { 
			if (i === 1) {
			square.innerHTML += dancer1;
			}
			if (i === 2) {
		   square.innerHTML += dancer2;
			}
		}
	
		

		// document.square.innerHTML += dancer;
	}, 

	// fillBoard() { 
	// 	let addDancers = () => {

	// 	};
	// },

	init() {
		this.gameBoard();
		// this.fillBoard(); 

		document.getElementById("reset"); // Useful later
		//document.addEventListener("click", () => this.reset());

	}
};

game.init();

// const appendEl = () => {
// 	let testDiv = document.getElementById()

// };



// So,  I'll need to create a game board
// Then, I'll need to create an event handler to allow the user to click on a square
// Two player game, so we will need to switch between player 1 & player 2
// Before that, we need to have logic for the game



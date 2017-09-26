const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for(let i = 0; i < numberOfRows; i++) {
		let row = [];
		for (let j = 0; j < numberOfColumns; j++) {
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for(let i = 0; i < numberOfRows; i++) {
		let row = [];
		for (let j = 0; j < numberOfColumns; j++) {
			row.push(null);
		}
		board.push(row);
	}
	
	let numberOfBombsPlaced = 0;
	while(numberOfBombsPlaced < numberOfBombs) {
		let randomRowIndex = Math.floor( Math.random() * numberOfRows );
		let randomColumnIndex = Math.floor( Math.random() * numberOfColumns );
		//Must use control flow to take into account bombs that are already placed and roll again
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++;
	}

	return board;
};

const printBoard = board => {
	board.map(row => {
		row.join(' | ');
	});
};
// console.log(generatePlayerBoard(3,4));
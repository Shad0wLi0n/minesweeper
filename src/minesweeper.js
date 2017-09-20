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
		let randomRowIndex = Math.floor( Math.random() );
		let randomColumnIndex = Math.floor( Math.random() );
	}

	return board;
};
// console.log(generatePlayerBoard(3,4));
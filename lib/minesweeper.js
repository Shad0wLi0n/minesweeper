'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
	var board = [];
	for (var i = 0; i < numberOfRows; i++) {
		var row = [];
		for (var j = 0; j < numberOfColumns; j++) {
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
	var board = [];
	for (var i = 0; i < numberOfRows; i++) {
		var row = [];
		for (var j = 0; j < numberOfColumns; j++) {
			row.push(null);
		}
		board.push(row);
	}

	var numberOfBombsPlaced = 0;
	while (numberOfBombsPlaced < numberOfBombs) {
		var randomRowIndex = Math.floor(Math.random() * numberOfRows);
		var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		//Must use control flow to take into account bombs that are already placed and roll again
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++;
	}

	return board;
};

var printBoard = function printBoard(board) {
	board.map(function (row) {
		row.join(' | ');
	});
};
// console.log(generatePlayerBoard(3,4));
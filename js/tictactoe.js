let numOfTurns = 0;
let gameEnding = false;
let currentPlayer = 'X';
let currentPlays = { X: [], O: [] }

const winningOutcomes = [
	[1, 2, 3], [4, 5, 6], [7, 8, 9],
	[1, 4, 7], [2, 5, 8], [3, 6, 9],
	[1, 5, 9], [3, 5, 7]
]

$(document).ready(function () {
	$('.cell').on('click', function () {
		if (!gameEnding) {


			numOfTurns++;
			$(this).text(currentPlayer);
			currentPlays[currentPlayer].push(parseInt($(this).attr('data-index')));

			if (winner()) {
				gameOutcome("Win");
			}
			if (!gameEnding && draw()) {
				gameOutcome("Draw");
			}
			currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
		}
	});

});
function winner() {
	if (numOfTurns < 5)
		return;

	for (let i = 0; i < winningOutcomes.length; i++) {
		let winner = true;
		for (let j = 0; j < winningOutcomes[i].length; j++) {
			if ($.inArray(winningOutcomes[i][j], currentPlays[currentPlayer]) < 0) {
				winner = false;
				break;
			}
		}
		if (winner)
			return true;
	}
	return false;
}
function draw() {
	return numOfTurns === 9;
}

function gameOutcome(type) {
	gameEnding = true;
	if (type === "Win") {
		$("#gameResult").text("Winner is " + currentPlayer);
	} else {
		$("#gameResult").text("Draw!");
	}
}

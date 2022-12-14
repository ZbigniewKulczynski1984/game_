//


const gameSummary = {
	numbers: 0,
	wins: 0,
	losses: 0,
	draws: 0,
};

$(function () {});
const hand = ['rock', 'paper', 'scissors'];
function rock() {
	$('#player').html("<i class='symbol far fa-hand-rock'></i>");
	rockPaperScissors();
}

function paper() {
	$('#player').html("<i class='symbol far fa-newspaper'></i>");
	rockPaperScissors();
}

function scissors() {
	$('#player').html("<i class='symbol far fa-hand-scissors'></i>");
	rockPaperScissors();
}

function rockPaperScissors() {
	var symbol = arguments.callee.caller.name;
	var cpuSymbol = hand[Math.floor(Math.random() * 3)];
	switch (cpuSymbol) {
		case 'rock':
			$('#computer').html("<i class='symbol far fa-hand-rock'></i>");
			console.log(
				symbol == 'scissors'
					? denoteLoser()
					: symbol == 'paper'
					? denoteWinner()
					: denoteDraw()
			);
			break;
		case 'paper':
			$('#computer').html("<i class='symbol far fa-newspaper'></i>");
			console.log(
				symbol == 'rock'
					? denoteLoser()
					: symbol == 'scissors'
					? denoteWinner()
					: denoteDraw()
			);
			break;
		case 'scissors':
			$('#computer').html("<i class='symbol far fa-hand-scissors'></i>");
			console.log(
				symbol == 'paper'
					? denoteLoser()
					: symbol == 'rock'
					? denoteWinner()
					: denoteDraw()
			);
			break;
	}
}

function denoteWinner() {
	$('#result').html("<h1 class='alert alert-success'>You Win!</h1>");
	document.querySelector('p.wins span').textContent = ++gameSummary.wins;
	document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
}

function denoteLoser() {
	$('#result').html("<h1 class='alert alert-danger'>You Lose!</h1>");
	document.querySelector('p.losses span').textContent = ++gameSummary.losses;
	document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
}

function denoteDraw() {
	$('#result').html("<h1 class='alert alert-info'>You Draw!</h1>");
	document.querySelector('p.draws span').textContent = ++gameSummary.draws;
	document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
}

// const gameSummary = {
// 	numbers: 0,
// 	wins: 0,
// 	losses: 0,
// 	draws: 0,
// };

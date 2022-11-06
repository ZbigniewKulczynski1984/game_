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

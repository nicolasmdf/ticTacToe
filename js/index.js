$(document).ready(function() {
	let circle = "O";
	let cross = "X";	
	let player, computer, turn;
	let board = {
		s1: "",
		s2: "",
		s3: "",
		s4: "",
		s5: "",
		s6: "",
		s7: "",
		s8: "",
		s9: ""
	};
	let winningConditions = [
		["s1", "s2", "s3"], 
		["s4", "s5", "s6"],
		["s7", "s8", "s9"],
		["s1", "s4", "s7"], 
		["s2", "s5", "s8"], 
		["s3", "s6", "s9"], 
		["s1", "s5", "s9"], 
		["s3", "s5", "s7"]
	];

	let computerMove = (square) => {
		$("#" + square).html(computer);
		$("#" + square).addClass("animate");
		board[square] = computer;
		winCheck(computer);
	};
	
	let winCheck = (input) => {
		winningConditions.forEach(condition => {
			let checked = condition.filter((square) => board[square] == input);
			if (checked.length === 3) {
				if (input === player) {
					reset();
					window.alert("You won!");
				} else {
					reset();
					window.alert("You lost!");
				}
			}
		});
	};
	
	let checkToWin = () => {
		winningConditions.forEach(condition => {
			let checked = condition.filter(square => board[square] == computer);
			if (checked.length === 2) {
				condition.forEach(s => {
					if (board[s] === "") {
						computerMove(s);
						//break;
					}
				});
			}
		});
	};
	
	let checkToBlock = () => {
		winningConditions.forEach(condition => {
			let checked = condition.filter(square => board[square] == player);
			if (checked.length === 2) {
				condition.forEach((s) => {
					if (board[s] === "") {
						computerMove(s);
						//break;
					} else {
						 checkToWin();
					}
				});
			}
		});
	};
	
	let ai = () => board.s5 === "" ? computerMove("s5") : checkToBlock();
	
	//take everything back to 0
	let reset = () => {
		$("#circleInput").removeClass("animate");
		$("#crossInput").removeClass("animate");
		$(".square").html("&nbsp");
		$(".square").removeClass("animate");
		$("#circleInput").removeClass("animate");
		$("#crossInput").removeClass("animate");
		$(".modal").css("display", "initial");
		board.s1 = "";
		board.s2 = "";
		board.s3 = "";
		board.s4 = "";
		board.s5 = "";
		board.s6 = "";
		board.s7 = "";
		board.s8 = "";
		board.s9 = "";
	};

	$(".square").click(function() {
		if (board[event.target.id] === "") {
			$("#" + event.target.id).html(player);
			$("#" + event.target.id).addClass("animate");
			board[event.target.id] = player;
			winCheck(player);
			ai();
		}
	});
	
	$("#crossInput").click(function() {
		player = cross;
		computer = circle;
		$("#crossInput").addClass("animate");
		$(".modal").fadeOut(1000);
	});	
	
	$("#circleInput").click(function() {
		player = circle;
		computer = cross;
		$("#circleInput").addClass("animate");
		$(".modal").fadeOut(1000);
	});	
	
	$("#reset").click(reset);
});
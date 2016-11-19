$(document).ready(function() {
	let circle = "O";
	let cross = "X";	

	$("#s5").click(function() {
		$("#e").html(circle);
		$("#s5").addClass("animate");
	});	
		$("#s6").click(function() {
		$("#e").html("");	
		$("#s5").removeClass("animate");
	});	
	$("#crossInput").click(function() {
		$("#crossInput").addClass("animate");
		$(".modal").fadeOut(1000);
	});	
	$("#circleInput").click(function() {
		$("#circleInput").addClass("animate");
		$(".modal").fadeOut(1000);
	});	
	$("#reset").click(function() {
		$("#e").html("");
		$(".modal").css("display", "initial");
		$("#s5").removeClass("animate");
	});
});

/*As far as front goes what is left is:
-the modal box to choose x or o.
-final animation for loosing/drawing/restarting ???
-finishing touches on color, font, etc.

Modal is working, though not done. I can now start working on the js part of this o.O
*/
$(window).ready(function() {
	var canvas = $("<canvas />");
	canvas.attr({ width: 220, height: $(document).height() });
	$("#dna").append(canvas);
	canvas.DoubleHelix();
});
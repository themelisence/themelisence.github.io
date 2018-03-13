/*------------------------------------------------------------------

[Master Script]

Template Name : Flamecore - Personal Background Pro
Version       : 1.0
Framework     : iCore For Developer // getcore.github.io
Author        : Andika Chamberlin // andikachamberlin.github.io

-------------------------------------------------------------------*/


// load
$(window).on("load", function () {
	$(".loader").fadeOut(1000);
});

// page
$(function(){

	// box 1
	$("#box1").click(function(){
		$(this).addClass("box-active");
		$("#profil").fadeIn(2000);
		$(".position-middle").fadeOut();
		$("#remove").fadeIn();
	});

	// box 2
	$("#box2").click(function(){
		$(this).addClass("box-active");
		$("#resume").fadeIn(2000);
		$(".position-middle").fadeOut();
		$("#remove").fadeIn();
	});

	// box 3
	$("#box3").click(function(){
		$(this).addClass("box-active");
		$("#portfolio").fadeIn(2000);
		$(".position-middle").fadeOut();
		$("#remove").fadeIn();
	});

	// box 4
	$("#box4").click(function(){
		$(this).addClass("box-active");
		$("#contact").fadeIn(2000);
		$(".position-middle").fadeOut();
		$("#remove").fadeIn();
	});

	// close box
	$("#remove").click(function(){
		$("#box1, #box2, #box3, #box4").removeClass("box-active");
		$(".position-middle").fadeIn();
		$(".content").fadeOut(100);
		$("#remove").fadeOut();
	});
});
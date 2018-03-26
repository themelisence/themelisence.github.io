"use strict";
$(document).ready(function(){
	$("#iNavList").onePageNav();

	// mobile nav
	$("#iToggle").click(function(){
		$("#iNav").toggleClass("i-nav-active")
		$("#iNavItems").toggleClass("i-nav-items-active");
		$(this).toggleClass("i-nav-toggle-active");
		$("body").toggleClass("i-overflow");
	});
});

// close nav on click window
$(document).on("click", function(event){
	var iNavBasicToggle = $("#iToggle");

    if(iNavBasicToggle !== event.target && !iNavBasicToggle.has(event.target).length){
        $("#iNav").removeClass("i-nav-active");
        $("#iNavItems").removeClass("i-nav-items-active");
        $("#iToggle").removeClass("i-nav-toggle-active");
        $("body").removeClass("i-overflow");
    }       
});

// sticky
$(window).scroll(function(){

    var scroll = $(this).scrollTop();

    if($(document).scrollTop() > 0){
        $(".i-nav").addClass("i-sticky-hide");
    }else{
        $(".i-nav").removeClass("i-sticky-hide");
    }

    if($(document).scrollTop() > 300){
        $(".i-nav").addClass("i-sticky");
    }else{
        $(".i-nav").removeClass("i-sticky");
    }
});
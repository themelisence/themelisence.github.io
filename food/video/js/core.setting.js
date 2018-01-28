"use strict";
$(document).ready(function(){

	// scroll

	$(window).scroll(function(){

		var scroll = $(this).scrollTop();

		// to top

		if(scroll > $("#toTopActive").offset().top - 0){
			$(".totop").addClass("totop-active");
		}else{
			$(".totop").removeClass("totop-active");
		}		   

		// end to top

	});
	// end scroll

});
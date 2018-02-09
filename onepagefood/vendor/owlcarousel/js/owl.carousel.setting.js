/*------------------------------------------------------------------
[Master Script]

Project           : Flamecore Organization
Vendor            : owlCarousel
Code License      : MIT
-------------------------------------------------------------------*/

"use strict"
$(document).ready(function(){

	// Slideshow
	var slideShow = $('#slideShow');
	  	slideShow.owlCarousel({
	    loop: true,
	    smartSpeed: 1500,
	    lazyLoad:true,
	    autoplay: true,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	    }
	});

	// Menu Grid
	var menuGrid = $('#menuGrid');
	  	menuGrid.owlCarousel({
	    margin: 16,
	    loop: true,
	    smartSpeed: 1500,
	    lazyLoad:true,
	    autoplay: true,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:true
	        },
	        993:{
	            items:3,
	            nav:true,
	        }
	    }
	});

	// testimonial

	var testi = $('#testimonial');
	  	testi.owlCarousel({
	    margin: 16,
	    loop: true,
	    smartSpeed: 1500,
	    lazyLoad:true,
	    autoplay: true,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        }
	    }
	});

});



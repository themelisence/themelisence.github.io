"use strict";
$(document).ready(function() {
	try {
		$('.ripples').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
});
$(function() {
	if ($.fn.reflect) {
		$('#preview-coverflow .coverflow').reflect();	// only possible in very specific situations
	}

	$('#preview-coverflow').coverflow({
		index:			6,
		density:		2,
		innerOffset:	50,
		innerScale:		.7,
		animateStep:	function(event, cover, offset, isVisible, isMiddle, sin, cos) {
			if (isVisible) {
				if (isMiddle) {
					$(cover).css({
						'filter':			'none',
						'-webkit-filter':	'none'
					});
				} else {
					var brightness	= 1 + Math.abs(sin),
						contrast	= 1 - Math.abs(sin),
						filter		= 'contrast('+contrast+') brightness('+brightness+')';
					$(cover).css({
						'filter':			filter,
						'-webkit-filter':	filter
					});
				}
			}
		}
	});
});


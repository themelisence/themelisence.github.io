$(window).on("load", function () {
	show_hex();
});

function show_hex(){
  $(".hex_ani").hex({show: true, direction: "left", background: "rgba(255,255,255,0.1)", duration: 100, delay: 100, callback: function(){setTimeout("hide_hex()",5000);}});
  
}
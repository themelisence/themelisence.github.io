$(document).ready(function(){  
  show_hex();
});

function show_hex(){
  $(".hex_ani").hex({show: true, direction: "left", background: "rgba(255,255,255,0.2)", duration: 5, delay: 0, callback: function(){setTimeout("hide_hex()",5000);}});
  
}

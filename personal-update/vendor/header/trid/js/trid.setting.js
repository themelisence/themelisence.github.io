$(function() {
	$('#tridview').tridView({useMouse: true});
	$('#trid').trid({z:-1000});
	$('#trid1').trid({rx:90,y:-600});
	$('#trid2').trid({rx:-90,y:600});
	$('#trid3').trid({ry:90,x:600});
	$('#trid4').trid({ry:-90,x:-600});
	$('#trid5').trid({rz:180,z:-600});
	$('#trid6').trid({rz:0,z:600});
	a = 0;
	window.setInterval(function() {
		$('#trid').trid({rz:a+=0.1,rx:a*0.77,ry:a*1.13});
		$.tridTick();
	},1);
});
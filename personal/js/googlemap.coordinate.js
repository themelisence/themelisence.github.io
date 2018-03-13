function myMap() {
    var mapProp= {
    	// your map coordinate
        center:new google.maps.LatLng(3.632246, 98.875532),
        zoom:17,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
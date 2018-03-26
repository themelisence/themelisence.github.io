function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center:new google.maps.LatLng(3.632246, 98.875532),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(mapCanvas,mapOptions);

}
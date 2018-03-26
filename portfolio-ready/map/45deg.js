function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 3.632246, lng: 98.875532},
      zoom: 16,
      mapTypeId: 'satellite'
    });
    map.setTilt(45);
}
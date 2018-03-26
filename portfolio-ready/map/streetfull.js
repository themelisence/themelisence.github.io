var panorama;
  function initialize() {
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('map'),
        {
          position: {lat: 37.869260, lng: -122.254811},
          pov: {heading: 165, pitch: 0},
          zoom: 1
        });
  }

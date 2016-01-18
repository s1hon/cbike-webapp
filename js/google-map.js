var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 22.6156856, lng: 120.3367604},
    zoom: 14,
    streetViewControl: false
  });
}

$(window).resize(function(){
    var center = new google.maps.LatLng(22.6156856, 120.3367604);
    map.panTo(center);
});
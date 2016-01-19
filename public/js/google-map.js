var map;
var stations={};
var markers={};
var listener={};

function initMap() {

    var customMapType = new google.maps.StyledMapType([
    {
    stylers: [
        {hue: '#26EBC5'},
        {visibility: 'simplified'},
        {gamma: 0.5},
        {weight: 0.5}
    ]
    },
    {
        featureType: 'water',
        stylers: [{color: '#00BFB3'}]
    }
    ], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 22.6395185, lng: 120.2989792},
        zoom: 13,
        streetViewControl: false,
        mapTypeControl: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);  

    initCbikeData();
    initMarkers();
    initInfoWindow();

    setInterval(function(){
        initCbikeData();
    }, 3000)

}

$(window).resize(function(){
    var center = new google.maps.LatLng(22.6156856, 120.3367604);
    map.panTo(center);
});

function initCbikeData(){

    $.ajax({
        url: '/getcbike',
        type: 'GET',
        async: false,
        success: function(result){
            $.each(result,function( index, StationInfo){
                var id =StationInfo.StationID

                stations[id] = { 
                    "name": StationInfo.StationName,
                    "lat": Number(StationInfo.StationLat),
                    "lon": Number(StationInfo.StationLon),
                    "bikes": Number(StationInfo.StationNums1),
                    "empty": Number(StationInfo.StationNums2),
                }                
            })
        }
    })
        
}

function initMarkers(){
    $.each(stations,function(index,s){
        markers[index] = new google.maps.Marker({
            position: {lat: Number(s.lat), lng: Number(s.lon)},
            map: map
        })
    })
}

function isInfoWindowOpen(infoWindow){
    var map = infoWindow.getMap();
    return (map !== null && typeof map !== "undefined");
}

function initInfoWindow(){

    var infoWindow = new google.maps.InfoWindow();

    $.each(markers,function(index, marker){
        listener[index] = marker.addListener( 'click', function(e) {
            infoWindow.setContent(stations[index].name+' 車輛:' + stations[index].bikes + ' 空位:' +stations[index].empty);
            infoWindow.open(map, this);
            map.panTo(marker.getPosition());
            map.setZoom(15);
        });
    })
    
    google.maps.event.addListener(map, 'click', function(e) {
        if(isInfoWindowOpen(infoWindow)){
            infoWindow.close();
        }
    });
}
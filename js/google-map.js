var map;
var x2js = new X2JS();

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 22.6156856, lng: 120.3367604},
        zoom: 13,
        streetViewControl: false,
        mapTypeControl: false
    });
    initCbike();
}

$(window).resize(function(){
    var center = new google.maps.LatLng(22.6156856, 120.3367604);
    map.panTo(center);
});

$("#map").click(function(){
    initCbike();
})

function initCbike() {
    
    var stations={};


    $.get("http://www.c-bike.com.tw/xml/stationlistopendata.aspx",function(result){
            var OriginalStations = x2js.xml_str2json(result);
            OriginalStations = OriginalStations.BIKEStationData.BIKEStation.Station;

            $.each(OriginalStations,function( index, StationInfo){
                var maker = new google.maps.Marker({
                    position: {lat: Number(StationInfo.StationLat), lng: Number(StationInfo.StationLon)},
                    map: map
                })
                stations[StationInfo.StationID] = { 
                    "name": StationInfo.StationName,
                    "lat": Number(StationInfo.StationLat),
                    "lon": Number(StationInfo.StationLon),
                    "bikes": Number(StationInfo.StationNums1),
                    "empty": Number(StationInfo.StationNums2),
                    "maker": maker
                }

            })
            // console.log(stations);
    })
}

function GetCbikePosition(){

}
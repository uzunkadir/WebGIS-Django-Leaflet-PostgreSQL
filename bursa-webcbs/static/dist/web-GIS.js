
//tam ekran gösterme fonksiyonu
var mapId = document.getElementById('map');
function fullScreenView(){
    if(document.fullscreenElement){
        document.exitFullscreen();
    } else {
        mapId.requestFullscreen();
    }

}



//GEOCODING EKLEME
L.Control.geocoder().addTo(map);




//uzaklık hesaplama
L.control.measure( {
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    activeColor: '#e67e22',
    completedColor: '#e67e22',
}).addTo(map);



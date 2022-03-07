

var map = L.map('map').setView([ 40.253298, 29.074202], 11);
map.zoomControl.setPosition('topright');



//BASEMAPleri tanımlama
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
})

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');


var googleMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});





// ölçek ekleme
L.control.scale().addTo(map);



//koordinatları gösterme fonksiyonu 
map.on('mousemove',function (e) {
    $('.coordinate').html(`Enlem: ${e.latlng.lat.toFixed(6)} Boylam: ${e.latlng.lng.toFixed(6)}`);
})




var icons = {
    "saglikmerkezicon": L.icon({iconUrl: '/static/icons/hospital.webp',iconSize: [40]}),
    "metroicon"       : L.icon({iconUrl: '/static/icons/metroicon.png',iconSize: [50]}),
    "tarihiyerlericon": L.icon({iconUrl: '/static/icons/tarihiyerler.png',iconSize: [40]}),
    "taksiicon"       : L.icon({iconUrl: '/static/icons/taksiicon.png',iconSize: [50]}),
    "kartdolumicon"   : L.icon({iconUrl: '/static/icons/kartdolum.png',iconSize: [40]}),
    "eczaneicon"      : L.icon({iconUrl: '/static/icons/eczaneicon.png',iconSize: [40]}),
    "camiicon"        : L.icon({iconUrl: '/static/icons/camiicon.png',iconSize: [40]}),
    "otobusicon"      : L.icon({iconUrl: '/static/icons/otobus.png',iconSize: [40]}),
};

var saglikMerkezleri = L.markerClusterGroup();
L.geoJSON(saglikmerkez, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.saglikmerkezicon}).bindPopup(features.properties.ad);
    }
}).addTo(saglikMerkezleri);



var metroDuraklariLayer =   L.geoJSON(metrodurak, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.metroicon}).bindPopup(features.properties.ad);
    }
});


var tarihiYerlerLayer = L.markerClusterGroup();
L.geoJSON(tarihiyerler, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.tarihiyerlericon}).bindPopup(features.properties.ad);
    }
}).addTo(tarihiYerlerLayer);


var taksiDurakLayer = L.markerClusterGroup();
L.geoJSON(taksidurak, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.taksiicon}).bindPopup(features.properties.ad);
    }
}).addTo(taksiDurakLayer);


var kartDolumMerkezLayer = L.markerClusterGroup();
L.geoJSON(kartdolum, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng, {icon:icons.kartdolumicon}).bindPopup(features.properties.ad);
    }
}).addTo(kartDolumMerkezLayer);


var nobetciEczaneLayer = L.markerClusterGroup();
L.geoJSON(nobetcieczane, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.eczaneicon}).bindPopup(features.properties.ad);
    }
}).addTo(nobetciEczaneLayer);


var tumEczaneLayer = L.markerClusterGroup();
L.geoJSON(tumeczane, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.eczaneicon}).bindPopup(features.properties.ad);
    }
}).addTo(tumEczaneLayer);


var camiLayer = L.markerClusterGroup();
L.geoJSON(camiler, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.camiicon}).bindPopup(features.properties.ad);
    }
}).addTo(camiLayer);


var otobusLayer = L.markerClusterGroup();
L.geoJSON(otobusdurak, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.otobusicon}).bindPopup(features.properties.durakadi);
    }
}).addTo(otobusLayer);



var ilceSinirlariLayer = L.layerGroup();
for (var i=0; i<ilcesinir.features.length; i++){
    ilcesinir.features[i].geometry.coordinates=ilcesinir.features[i].geometry.coordinates.map(row=>row.reverse())
    var temp = L.polygon(ilcesinir.features[i].geometry.coordinates,{color:"black",  fillOpacity:0.01, weight:5}).bindPopup(ilcesinir.features[i].properties.ilceadi);
    ilceSinirlariLayer.addLayer(temp);
}



var mahalleSinirlariLayer = L.layerGroup();
for (var i=0; i<mahallesinir.features.length; i++){
    mahallesinir.features[i].geometry.coordinates=mahallesinir.features[i].geometry.coordinates.map(row=>row.reverse())
    var temp = L.polygon(mahallesinir.features[i].geometry.coordinates,{color:"red",  fillOpacity:0.001}).bindPopup(mahallesinir.features[i].properties.mahalleadi);
    mahalleSinirlariLayer.addLayer(temp);
}


// var mahalleSinirlariLayer =  L.geoJSON(mahallesinir, {color:"red", fillOpacity:0.01, 
//                                                 onEachFeature: function (features, layer) {
//                                                     layer.bindPopup(features.properties.mahalleadi);
//                                                 } });


var akarsuLayer =  L.geoJSON(akarsular, {color:"blue", fillOpacity:0.01, 
                                                onEachFeature: function (features, layer) {
                                                    layer.bindPopup(features.properties.ad);
                                                } });                          

var golLayer =  L.geoJSON(goller, {color:"blue", fillOpacity:0.5, 
                                                onEachFeature: function (features, layer) {
                                                    layer.bindPopup(features.properties.ad);
                                                } });     

                                                


var heatmapdata = [];
for (var i=0; i<mahallenufus.features.length; i++){
    var temp = mahallenufus.features[i].geometry.coordinates.reverse();
    temp.push(mahallenufus.features[i].properties.nufusdensity);
    heatmapdata.push(temp);
}

var heat = L.heatLayer(heatmapdata, 
    {radius: 25,
    blur:20,
    minOpacity: 0.5});

                                                


//Layer Control
var baseMaps = {
    "OpenStreetMap"  : osm, 
    "Topoğrafik "    : OpenTopoMap ,
    "Uydu Görüntüsü" : Esri_WorldImagery,
    "Google Map"     : googleMap};



var overlayMaps = {
    "Tarihi Yerler"        : tarihiYerlerLayer,
    "Camiler"              : camiLayer,
    "Taksi Durakları"      : taksiDurakLayer,
    "Metro Durakları"      : metroDuraklariLayer,
    "Otobüs Durakları"     : otobusLayer,
    "Kart Dolum Merkezleri": kartDolumMerkezLayer,
    "Nöbetçi Eczane"       : nobetciEczaneLayer,
    "Tüm Eczaeler"         : tumEczaneLayer,
    "Sağlık Merkezleri"    : saglikMerkezleri,
    "Akarsular"            : akarsuLayer,
    "Göller"               : golLayer,
    "İlçe Sınırları"       : ilceSinirlariLayer,
    "Mahalle Sınırları"    : mahalleSinirlariLayer,
    "Nüfus Yoğunluk Haritası": heat,
};




// NOKTALARI VE BASEMAPLARI KATMAN ŞEKLİNDE GÖSTERME 
L.control.layers(baseMaps,overlayMaps, {collapsed: false, position: 'topleft'} ).addTo(map);


L.control.shapefile({ position: 'topright' }).addTo(map);


// file upload 
/*
L.Control.fileLayerLoad({
    layer: L.geoJson,
    layerOptions: {style: {color:'red'}},
    addToMap: true,
    fileSizeLimit: 4000,
    formats: [
        '.geojson',
        '.json',
    ]
}).addTo(map);
*/

/*
var control = L.Control.fileLayerLoad;
control.loader.on('data:loaded', function (event) {
    layerswitcher.addOverlay(event.layer, event.filename);
});

control.loader.on('data:error', function (error) {
    // Do something usefull with the error!
    console.log(error);
});

*/







var map = L.map('map').setView([ 41.053207, 29.053345],10);
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
    "saglikmerkezicon": L.icon({iconUrl: '/static/icons/hospital.webp',   iconSize: [40]}),
    "metroicon"       : L.icon({iconUrl: '/static/icons/metroicon.png',   iconSize: [30]}),
    "tarihiyerlericon": L.icon({iconUrl: '/static/icons/tarihiyerler.png',iconSize: [40]}),
    "taksiicon"       : L.icon({iconUrl: '/static/icons/taksiicon.png',   iconSize: [50]}),
    "kartdolumicon"   : L.icon({iconUrl: '/static/icons/kartdolum.png',   iconSize: [40]}),
    "eczaneicon"      : L.icon({iconUrl: '/static/icons/eczaneicon.png',  iconSize: [40]}),
    "camiicon"        : L.icon({iconUrl: '/static/icons/camiicon.png',    iconSize: [40]}),
    "otobusicon"      : L.icon({iconUrl: '/static/icons/otobus.png',      iconSize: [40]}),
    "yakiticon"       : L.icon({iconUrl: '/static/icons/yakiticon.png',   iconSize: [40]}),
    "parkicon"        : L.icon({iconUrl: '/static/icons/parkicon.png',   iconSize: [40]}),
    "denizdurakicon"   : L.icon({iconUrl: '/static/icons/denizdurakicon.png',   iconSize: [50]}),
};

var akaryakitLayer = L.markerClusterGroup();
L.geoJSON(akaryakitistasyon, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.yakiticon}).bindPopup(features.properties.ad);
    }
}).addTo(akaryakitLayer);


var halkekmekLayer = L.markerClusterGroup();
L.geoJSON(halkekmek, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng).bindPopup(features.properties.ad);
    }
}).addTo(halkekmekLayer);


var isparkLayer = L.markerClusterGroup();
L.geoJSON(ispark, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.parkicon}).bindPopup(features.properties.ad+"<br>Çalışma Saatleri: "+features.properties.calismasaatleri+"<br>Kapasite: "+features.properties.kapasite+"<br>Park Tipi: "+features.properties.parktipi);
    }
}).addTo(isparkLayer);


var istanbulkartLayer = L.markerClusterGroup();
L.geoJSON(istanbulkart, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.kartdolumicon}).bindPopup(features.properties.ad);
    }
}).addTo(istanbulkartLayer);


var parklarLayer = L.markerClusterGroup();
L.geoJSON(parklar, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng).bindPopup(features.properties.ad);
    }
}).addTo(parklarLayer);

var saglikmerkezleriLayer = L.markerClusterGroup();
L.geoJSON(saglikmerkezleri, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.saglikmerkezicon}).bindPopup(features.properties.ad+"<br> Kategori: "+features.properties.kategori);
    }
}).addTo(saglikmerkezleriLayer);






var denizdurakLayer =   L.geoJSON(denizdurak, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.denizdurakicon}).bindPopup(features.properties.ad);
    }
});



var denizhatLayer =  L.geoJSON(denizhat, {color:"blue", fillOpacity:0.01, weight:3,
                                                onEachFeature: function (features, layer) {
                                                    layer.bindPopup(features.properties.ad);
} });          
                                                

var metroDuraklariLayer =   L.geoJSON(metrodurak, {
    pointToLayer: function(features,latlng){
      return L.marker(latlng,{icon: icons.metroicon}).bindPopup(features.properties.ad);
    }
});


var metrohatLayer =  L.geoJSON(metrohat, {color:"blue", fillOpacity:0.01, weight:7,
                                                onEachFeature: function (features, layer) {
                                                    layer.bindPopup(features.properties.ad);
} });          
                                                
                                                

var mahalleSinirlariLayer = L.layerGroup();
for (var i=0; i<mahallesinir.features.length; i++){
    mahallesinir.features[i].geometry.coordinates=mahallesinir.features[i].geometry.coordinates.map(row=>row.reverse())
    var temp = L.polygon(mahallesinir.features[i].geometry.coordinates,{color:"red",  fillOpacity:0.001}).bindPopup(mahallesinir.features[i].properties.ad);
    mahalleSinirlariLayer.addLayer(temp);
}

                                    


var heatmapdata = [];
for (var i=0; i<mahallenufus.features.length; i++){
    var temp = mahallenufus.features[i].geometry.coordinates.reverse();
    temp.push(mahallenufus.features[i].properties.nufusdensity);
    heatmapdata.push(temp);
}

var heat = L.heatLayer(heatmapdata, 
    {radius: 50,
    blur   : 30,
    minOpacity: 0.4,});



var baseTree = [                                                        
    {                                                                   
        label: 'Base Map',                                          
        children: [                                                     
        {label: 'OpenStreetMap',  layer: osm},           
        {label: 'Topoğrafik',     layer: OpenTopoMap },
        {label: 'Uydu Görüntüsü', layer: Esri_WorldImagery},
        {label: 'Google Map',     layer: googleMap},
        ]                                                               
    }
    ];  


var overlayTree = [      
    {                                                     
        label: 'Ulaşım',                                               
        children: [  
        {label: ' Metro Hattı', layer: metrohatLayer},    
        {label: ' Metro Durak', layer: metroDuraklariLayer},                                                 
        {label: ' İstanbulkart Dolum Yerleri', layer: istanbulkartLayer},            
        {label: ' İspark Otoparkları', layer: isparkLayer}, 
        {label: ' Akaryakıt İstasyonları', layer: akaryakitLayer}, 
        {label: ' Deniz Hatları', layer: denizhatLayer}, 
        {label: ' Deniz Hatları Durakları', layer: denizdurakLayer}, 
        ]                                                               
    }, 

    {                                                     
        label: 'Katmanlar',                                               
        children: [               
                                                  
        {label: ' Park Bahçeler', layer: parklarLayer},                             
        {label: ' Mahalle Sınırları', layer: mahalleSinirlariLayer},            
        {label: ' Halk Ekmek Büfeleri', layer: halkekmekLayer}, 
        {label: ' Nüfus Yoğunluk Haritası', layer: heat}, 
        {label: ' Sağlık Merkezleri', layer: saglikmerkezleriLayer}, 
        ]                                                               
    }, 
    
    ];  


L.control.layers.tree(baseTree, overlayTree, {collapsed:false, position: 'topleft'}).addTo(map);       



L.control.shapefile({ position: 'topright' }).addTo(map);





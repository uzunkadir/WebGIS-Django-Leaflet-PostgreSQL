L.Control.Shapefile = L.Control.extend({

    onAdd: function(map) {
        var thisControl = this;

        var controlDiv = L.DomUtil.create('div', 'leaflet-control-command');

        // Create the leaflet control.
        var controlUI = L.DomUtil.create('div', 'leaflet-control-command-interior', controlDiv);

        // Create the form inside of the leaflet control.
        var form = L.DomUtil.create('form', 'leaflet-control-command-form', controlUI);
        form.action = '';
        form.method = 'post';
        form.enctype='multipart/form-data';

        // Create the input file element.
        var input = L.DomUtil.create('input', 'leaflet-control-command-form-input', form);
        input.id = 'file';
        input.type = 'file';
        input.name = 'uploadFile';
        input.style.display = 'none';

        L.DomEvent
            .addListener(form, 'click', function () {
                document.getElementById("file").click();
            })
            .addListener(input, 'change', function(){
                thisControl.fileToArrayBuffer(this.files[0])
            });

        controlUI.title = 'Upload a Shapefile';

        return controlDiv;
    },

    // When the user uploads a file, convert the file to an array buffer.
    fileToArrayBuffer: function(file) {
        var thisControl = this;

        var reader = new FileReader();

        reader.onloadend = function (e) {
            console.log(e.target.result);
            console.log(e.target.result.byteLength);

            // Pass the array buffer to the shapfile-js function
            thisControl.loadArrayBuffer(e.target.result);
        };

        reader.readAsArrayBuffer(file);

    },

    // Convert the array buffer to geojson and add it to the map as a layer
    loadArrayBuffer: function(buffer) {

        shp(buffer).then(function (geojson) {
            var layer = L.geoJSON(geojson);
            var layers = layer._layers;
            Object.keys(layers).forEach(function(key) {
                var layer = (layers[key]);
                layer.addTo(map);
            });
        });
    }
});

L.control.shapefile = function(opts) {
    return new L.Control.Shapefile(opts);
};



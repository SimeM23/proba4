var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Hollywoodska_ruta_1 = new ol.format.GeoJSON();
var features_Hollywoodska_ruta_1 = format_Hollywoodska_ruta_1.readFeatures(json_Hollywoodska_ruta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hollywoodska_ruta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hollywoodska_ruta_1.addFeatures(features_Hollywoodska_ruta_1);
var lyr_Hollywoodska_ruta_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hollywoodska_ruta_1, 
                style: style_Hollywoodska_ruta_1,
                interactive: true,
                title: '<img src="styles/legend/Hollywoodska_ruta_1.png" /> Hollywoodska_ruta'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Hollywoodska_ruta_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Hollywoodska_ruta_1];
lyr_Hollywoodska_ruta_1.set('fieldAliases', {'Napomena': 'Napomena', 'Lokacija': 'Lokacija', 'Opis': 'Opis', });
lyr_Hollywoodska_ruta_1.set('fieldImages', {'Napomena': 'TextEdit', 'Lokacija': 'TextEdit', 'Opis': 'TextEdit', });
lyr_Hollywoodska_ruta_1.set('fieldLabels', {'Napomena': 'no label', 'Lokacija': 'no label', 'Opis': 'no label', });
lyr_Hollywoodska_ruta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
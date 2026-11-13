ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([111.440195, -7.170056, 112.336577, -6.740123]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATAS_DESA_KELURAHAN_1 = new ol.format.GeoJSON();
var features_BATAS_DESA_KELURAHAN_1 = format_BATAS_DESA_KELURAHAN_1.readFeatures(json_BATAS_DESA_KELURAHAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BATAS_DESA_KELURAHAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_DESA_KELURAHAN_1.addFeatures(features_BATAS_DESA_KELURAHAN_1);
var lyr_BATAS_DESA_KELURAHAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_DESA_KELURAHAN_1, 
                style: style_BATAS_DESA_KELURAHAN_1,
                popuplayertitle: 'BATAS_DESA_KELURAHAN',
                interactive: true,
                title: '<img src="styles/legend/BATAS_DESA_KELURAHAN_1.png" /> BATAS_DESA_KELURAHAN'
            });
var format_TITIK_KIBKIB_2 = new ol.format.GeoJSON();
var features_TITIK_KIBKIB_2 = format_TITIK_KIBKIB_2.readFeatures(json_TITIK_KIBKIB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TITIK_KIBKIB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_KIBKIB_2.addFeatures(features_TITIK_KIBKIB_2);
var lyr_TITIK_KIBKIB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIK_KIBKIB_2, 
                style: style_TITIK_KIBKIB_2,
                popuplayertitle: 'TITIK_KIB — KIB',
                interactive: true,
                title: '<img src="styles/legend/TITIK_KIBKIB_2.png" /> TITIK_KIB — KIB'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BATAS_DESA_KELURAHAN_1.setVisible(true);lyr_TITIK_KIBKIB_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BATAS_DESA_KELURAHAN_1,lyr_TITIK_KIBKIB_2];
lyr_BATAS_DESA_KELURAHAN_1.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TITIK_KIBKIB_2.set('fieldAliases', {'fid': 'fid', 'DESA/KELURAHAN': 'DESA/KELURAHAN', 'RW': 'RW', 'RT': 'RT', 'TAHUN KIB': 'TAHUN KIB', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_BATAS_DESA_KELURAHAN_1.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TITIK_KIBKIB_2.set('fieldImages', {'fid': 'TextEdit', 'DESA/KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'TAHUN KIB': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_BATAS_DESA_KELURAHAN_1.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'UUPP': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_TITIK_KIBKIB_2.set('fieldLabels', {'fid': 'hidden field', 'DESA/KELURAHAN': 'inline label - always visible', 'RW': 'inline label - always visible', 'RT': 'inline label - always visible', 'TAHUN KIB': 'inline label - always visible', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_TITIK_KIBKIB_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
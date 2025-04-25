var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PlanInfo_2 = new ol.format.GeoJSON();
var features_PlanInfo_2 = format_PlanInfo_2.readFeatures(json_PlanInfo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanInfo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanInfo_2.addFeatures(features_PlanInfo_2);
var lyr_PlanInfo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanInfo_2, 
                style: style_PlanInfo_2,
                popuplayertitle: "Plan Info",
                interactive: true,
                title: '<img src="styles/legend/PlanInfo_2.png" /> Plan Info'
            });
var format_Boundary_3 = new ol.format.GeoJSON();
var features_Boundary_3 = format_Boundary_3.readFeatures(json_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_3.addFeatures(features_Boundary_3);
var lyr_Boundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_3, 
                style: style_Boundary_3,
                popuplayertitle: "Boundary",
                interactive: true,
                title: '<img src="styles/legend/Boundary_3.png" /> Boundary'
            });
var format_Beacon_4 = new ol.format.GeoJSON();
var features_Beacon_4 = format_Beacon_4.readFeatures(json_Beacon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beacon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beacon_4.addFeatures(features_Beacon_4);
var lyr_Beacon_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beacon_4, 
                style: style_Beacon_4,
                popuplayertitle: "Beacon",
                interactive: true,
                title: '<img src="styles/legend/Beacon_4.png" /> Beacon'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_PlanInfo_2.setVisible(true);lyr_Boundary_3.setVisible(true);lyr_Beacon_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_PlanInfo_2,lyr_Boundary_3,lyr_Beacon_4];
lyr_PlanInfo_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'locality': 'locality', 'area-acres': 'area-acres', 'Area-Ha': 'Area-Ha', 'Region': 'Region', 'District': 'District', });
lyr_Boundary_3.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'Area(Acre)': 'Area(Acre)', });
lyr_Beacon_4.set('fieldAliases', {'ID': 'ID', 'Reg Number': 'Reg Number', 'X': 'X', 'Y': 'Y', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_PlanInfo_2.set('fieldImages', {'id': '', 'Name': '', 'locality': '', 'area-acres': '', 'Area-Ha': '', 'Region': '', 'District': '', });
lyr_Boundary_3.set('fieldImages', {'begin': 'Range', 'end': 'Range', 'Area(Acre)': '', });
lyr_Beacon_4.set('fieldImages', {'ID': 'Range', 'Reg Number': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_PlanInfo_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'locality': 'inline label - visible with data', 'area-acres': 'inline label - visible with data', 'Area-Ha': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'District': 'inline label - visible with data', });
lyr_Boundary_3.set('fieldLabels', {'begin': 'hidden field', 'end': 'hidden field', 'Area(Acre)': 'header label - always visible', });
lyr_Beacon_4.set('fieldLabels', {'ID': 'hidden field', 'Reg Number': 'header label - always visible', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', });
lyr_Beacon_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
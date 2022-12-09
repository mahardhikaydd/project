var wms_layers = [];

var format_landuse_0 = new ol.format.GeoJSON();
var features_landuse_0 = format_landuse_0.readFeatures(json_landuse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_0.addFeatures(features_landuse_0);
var lyr_landuse_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_landuse_0, 
                style: style_landuse_0,
                interactive: true,
                title: '<img src="styles/legend/landuse_0.png" /> landuse'
            });
var format_bukanalternatif_1 = new ol.format.GeoJSON();
var features_bukanalternatif_1 = format_bukanalternatif_1.readFeatures(json_bukanalternatif_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bukanalternatif_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bukanalternatif_1.addFeatures(features_bukanalternatif_1);
var lyr_bukanalternatif_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bukanalternatif_1, 
                style: style_bukanalternatif_1,
                interactive: true,
                title: '<img src="styles/legend/bukanalternatif_1.png" /> bukan alternatif'
            });
var format_alternatif3_2 = new ol.format.GeoJSON();
var features_alternatif3_2 = format_alternatif3_2.readFeatures(json_alternatif3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alternatif3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alternatif3_2.addFeatures(features_alternatif3_2);
var lyr_alternatif3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alternatif3_2, 
                style: style_alternatif3_2,
                interactive: true,
                title: '<img src="styles/legend/alternatif3_2.png" /> alternatif3'
            });
var format_alternatif2_3 = new ol.format.GeoJSON();
var features_alternatif2_3 = format_alternatif2_3.readFeatures(json_alternatif2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alternatif2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alternatif2_3.addFeatures(features_alternatif2_3);
var lyr_alternatif2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alternatif2_3, 
                style: style_alternatif2_3,
                interactive: true,
                title: '<img src="styles/legend/alternatif2_3.png" /> alternatif2'
            });
var format_alternatif_4 = new ol.format.GeoJSON();
var features_alternatif_4 = format_alternatif_4.readFeatures(json_alternatif_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alternatif_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alternatif_4.addFeatures(features_alternatif_4);
var lyr_alternatif_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alternatif_4, 
                style: style_alternatif_4,
                interactive: true,
                title: '<img src="styles/legend/alternatif_4.png" /> alternatif'
            });

lyr_landuse_0.setVisible(true);lyr_bukanalternatif_1.setVisible(true);lyr_alternatif3_2.setVisible(true);lyr_alternatif2_3.setVisible(true);lyr_alternatif_4.setVisible(true);
var layersList = [lyr_landuse_0,lyr_bukanalternatif_1,lyr_alternatif3_2,lyr_alternatif2_3,lyr_alternatif_4];
lyr_landuse_0.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'AREA': 'AREA', 'CLAS1_NAM': 'CLAS1_NAM', 'FID_': 'FID_', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'PERIMETER': 'PERIMETER', 'skor_ahp': 'skor_ahp', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'reklas': 'reklas', 'skor-ahp': 'skor-ahp', 'fid': 'fid', 'DN': 'DN', 'Entity_2': 'Entity_2', 'Layer_2': 'Layer_2', 'Color_2': 'Color_2', 'Linetype_2': 'Linetype_2', 'Elevation_': 'Elevation_', 'LineWt_2': 'LineWt_2', 'RefName_2': 'RefName_2', 'Shape_Le_1': 'Shape_Le_1', 'ringId': 'ringId', 'distance': 'distance', 'bobot': 'bobot', 'totalbobot': 'totalbobot', 'Alterative': 'Alterative', 'luas': 'luas', 'Lokasi': 'Lokasi', 'ALTRNF_OK': 'ALTRNF_OK', });
lyr_bukanalternatif_1.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'AREA': 'AREA', 'CLAS1_NAM': 'CLAS1_NAM', 'FID_': 'FID_', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'PERIMETER': 'PERIMETER', 'skor_ahp': 'skor_ahp', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'reklas': 'reklas', 'skor-ahp': 'skor-ahp', 'fid': 'fid', 'DN': 'DN', 'Entity_2': 'Entity_2', 'Layer_2': 'Layer_2', 'Color_2': 'Color_2', 'Linetype_2': 'Linetype_2', 'Elevation_': 'Elevation_', 'LineWt_2': 'LineWt_2', 'RefName_2': 'RefName_2', 'Shape_Le_1': 'Shape_Le_1', 'ringId': 'ringId', 'distance': 'distance', 'bobot': 'bobot', 'totalbobot': 'totalbobot', 'Alternatif': 'Alternatif', 'luas': 'luas', });
lyr_alternatif3_2.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'AREA': 'AREA', 'CLAS1_NAM': 'CLAS1_NAM', 'FID_': 'FID_', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'PERIMETER': 'PERIMETER', 'skor_ahp': 'skor_ahp', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'reklas': 'reklas', 'skor-ahp': 'skor-ahp', 'fid': 'fid', 'DN': 'DN', 'Entity_2': 'Entity_2', 'Layer_2': 'Layer_2', 'Color_2': 'Color_2', 'Linetype_2': 'Linetype_2', 'Elevation_': 'Elevation_', 'LineWt_2': 'LineWt_2', 'RefName_2': 'RefName_2', 'Shape_Le_1': 'Shape_Le_1', 'ringId': 'ringId', 'distance': 'distance', 'bobot': 'bobot', 'totalbobot': 'totalbobot', 'Alternatif': 'Alternatif', 'luas': 'luas', });
lyr_alternatif2_3.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'AREA': 'AREA', 'CLAS1_NAM': 'CLAS1_NAM', 'FID_': 'FID_', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'PERIMETER': 'PERIMETER', 'skor_ahp': 'skor_ahp', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'reklas': 'reklas', 'skor-ahp': 'skor-ahp', 'fid': 'fid', 'DN': 'DN', 'Entity_2': 'Entity_2', 'Layer_2': 'Layer_2', 'Color_2': 'Color_2', 'Linetype_2': 'Linetype_2', 'Elevation_': 'Elevation_', 'LineWt_2': 'LineWt_2', 'RefName_2': 'RefName_2', 'Shape_Le_1': 'Shape_Le_1', 'ringId': 'ringId', 'distance': 'distance', 'bobot': 'bobot', 'totalbobot': 'totalbobot', 'Alternatif': 'Alternatif', 'luas': 'luas', });
lyr_alternatif_4.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'AREA': 'AREA', 'CLAS1_NAM': 'CLAS1_NAM', 'FID_': 'FID_', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'PERIMETER': 'PERIMETER', 'skor_ahp': 'skor_ahp', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'reklas': 'reklas', 'skor-ahp': 'skor-ahp', 'fid': 'fid', 'DN': 'DN', 'Entity_2': 'Entity_2', 'Layer_2': 'Layer_2', 'Color_2': 'Color_2', 'Linetype_2': 'Linetype_2', 'Elevation_': 'Elevation_', 'LineWt_2': 'LineWt_2', 'RefName_2': 'RefName_2', 'Shape_Le_1': 'Shape_Le_1', 'ringId': 'ringId', 'distance': 'distance', 'bobot': 'bobot', 'totalbobot': 'totalbobot', 'Alternatif': 'Alternatif', 'luas': 'luas', });
lyr_landuse_0.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'AREA': 'TextEdit', 'CLAS1_NAM': 'TextEdit', 'FID_': 'Range', 'LANDUSE_': 'TextEdit', 'LANDUSE_ID': 'TextEdit', 'PERIMETER': 'TextEdit', 'skor_ahp': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'reklas': 'TextEdit', 'skor-ahp': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', 'Entity_2': 'TextEdit', 'Layer_2': 'TextEdit', 'Color_2': 'Range', 'Linetype_2': 'TextEdit', 'Elevation_': 'TextEdit', 'LineWt_2': 'Range', 'RefName_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'ringId': 'TextEdit', 'distance': 'TextEdit', 'bobot': 'Range', 'totalbobot': 'Range', 'Alterative': 'TextEdit', 'luas': 'TextEdit', 'Lokasi': 'TextEdit', 'ALTRNF_OK': 'TextEdit', });
lyr_bukanalternatif_1.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'AREA': '', 'CLAS1_NAM': '', 'FID_': '', 'LANDUSE_': '', 'LANDUSE_ID': '', 'PERIMETER': '', 'skor_ahp': '', 'Shape_Leng': '', 'Shape_Area': '', 'reklas': '', 'skor-ahp': '', 'fid': '', 'DN': '', 'Entity_2': '', 'Layer_2': '', 'Color_2': '', 'Linetype_2': '', 'Elevation_': '', 'LineWt_2': '', 'RefName_2': '', 'Shape_Le_1': '', 'ringId': '', 'distance': '', 'bobot': '', 'totalbobot': '', 'Alternatif': '', 'luas': '', });
lyr_alternatif3_2.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'AREA': 'TextEdit', 'CLAS1_NAM': 'TextEdit', 'FID_': 'Range', 'LANDUSE_': 'TextEdit', 'LANDUSE_ID': 'TextEdit', 'PERIMETER': 'TextEdit', 'skor_ahp': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'reklas': 'TextEdit', 'skor-ahp': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', 'Entity_2': 'TextEdit', 'Layer_2': 'TextEdit', 'Color_2': 'Range', 'Linetype_2': 'TextEdit', 'Elevation_': 'TextEdit', 'LineWt_2': 'Range', 'RefName_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'ringId': 'TextEdit', 'distance': 'TextEdit', 'bobot': 'Range', 'totalbobot': 'TextEdit', 'Alternatif': 'TextEdit', 'luas': 'TextEdit', });
lyr_alternatif2_3.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'AREA': 'TextEdit', 'CLAS1_NAM': 'TextEdit', 'FID_': 'Range', 'LANDUSE_': 'TextEdit', 'LANDUSE_ID': 'TextEdit', 'PERIMETER': 'TextEdit', 'skor_ahp': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'reklas': 'TextEdit', 'skor-ahp': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', 'Entity_2': 'TextEdit', 'Layer_2': 'TextEdit', 'Color_2': 'Range', 'Linetype_2': 'TextEdit', 'Elevation_': 'TextEdit', 'LineWt_2': 'Range', 'RefName_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'ringId': 'TextEdit', 'distance': 'TextEdit', 'bobot': 'Range', 'totalbobot': 'TextEdit', 'Alternatif': 'TextEdit', 'luas': 'TextEdit', });
lyr_alternatif_4.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'AREA': 'TextEdit', 'CLAS1_NAM': 'TextEdit', 'FID_': 'Range', 'LANDUSE_': 'TextEdit', 'LANDUSE_ID': 'TextEdit', 'PERIMETER': 'TextEdit', 'skor_ahp': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'reklas': 'TextEdit', 'skor-ahp': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', 'Entity_2': 'TextEdit', 'Layer_2': 'TextEdit', 'Color_2': 'Range', 'Linetype_2': 'TextEdit', 'Elevation_': 'TextEdit', 'LineWt_2': 'Range', 'RefName_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'ringId': 'TextEdit', 'distance': 'TextEdit', 'bobot': 'Range', 'totalbobot': 'TextEdit', 'Alternatif': 'TextEdit', 'luas': 'TextEdit', });
lyr_landuse_0.set('fieldLabels', {'Entity': 'inline label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'AREA': 'inline label', 'CLAS1_NAM': 'no label', 'FID_': 'no label', 'LANDUSE_': 'inline label', 'LANDUSE_ID': 'no label', 'PERIMETER': 'no label', 'skor_ahp': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'reklas': 'no label', 'skor-ahp': 'no label', 'fid': 'no label', 'DN': 'no label', 'Entity_2': 'no label', 'Layer_2': 'no label', 'Color_2': 'no label', 'Linetype_2': 'no label', 'Elevation_': 'no label', 'LineWt_2': 'no label', 'RefName_2': 'no label', 'Shape_Le_1': 'no label', 'ringId': 'no label', 'distance': 'no label', 'bobot': 'no label', 'totalbobot': 'no label', 'Alterative': 'inline label', 'luas': 'inline label', 'Lokasi': 'inline label', 'ALTRNF_OK': 'no label', });
lyr_bukanalternatif_1.set('fieldLabels', {'Entity': 'inline label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'AREA': 'inline label', 'CLAS1_NAM': 'no label', 'FID_': 'no label', 'LANDUSE_': 'no label', 'LANDUSE_ID': 'no label', 'PERIMETER': 'no label', 'skor_ahp': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'reklas': 'no label', 'skor-ahp': 'no label', 'fid': 'no label', 'DN': 'no label', 'Entity_2': 'no label', 'Layer_2': 'no label', 'Color_2': 'no label', 'Linetype_2': 'no label', 'Elevation_': 'no label', 'LineWt_2': 'no label', 'RefName_2': 'no label', 'Shape_Le_1': 'no label', 'ringId': 'no label', 'distance': 'no label', 'bobot': 'no label', 'totalbobot': 'no label', 'Alternatif': 'no label', 'luas': 'no label', });
lyr_alternatif3_2.set('fieldLabels', {'Entity': 'inline label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'AREA': 'inline label', 'CLAS1_NAM': 'no label', 'FID_': 'no label', 'LANDUSE_': 'inline label', 'LANDUSE_ID': 'no label', 'PERIMETER': 'no label', 'skor_ahp': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'reklas': 'no label', 'skor-ahp': 'no label', 'fid': 'no label', 'DN': 'no label', 'Entity_2': 'no label', 'Layer_2': 'no label', 'Color_2': 'no label', 'Linetype_2': 'no label', 'Elevation_': 'no label', 'LineWt_2': 'no label', 'RefName_2': 'no label', 'Shape_Le_1': 'no label', 'ringId': 'no label', 'distance': 'no label', 'bobot': 'no label', 'totalbobot': 'no label', 'Alternatif': 'inline label', 'luas': 'inline label', });
lyr_alternatif2_3.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'AREA': 'no label', 'CLAS1_NAM': 'no label', 'FID_': 'no label', 'LANDUSE_': 'inline label', 'LANDUSE_ID': 'no label', 'PERIMETER': 'no label', 'skor_ahp': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'reklas': 'no label', 'skor-ahp': 'no label', 'fid': 'no label', 'DN': 'no label', 'Entity_2': 'no label', 'Layer_2': 'no label', 'Color_2': 'no label', 'Linetype_2': 'no label', 'Elevation_': 'no label', 'LineWt_2': 'no label', 'RefName_2': 'no label', 'Shape_Le_1': 'no label', 'ringId': 'no label', 'distance': 'no label', 'bobot': 'no label', 'totalbobot': 'no label', 'Alternatif': 'inline label', 'luas': 'inline label', });
lyr_alternatif_4.set('fieldLabels', {'Entity': 'inline label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'AREA': 'no label', 'CLAS1_NAM': 'no label', 'FID_': 'no label', 'LANDUSE_': 'no label', 'LANDUSE_ID': 'no label', 'PERIMETER': 'no label', 'skor_ahp': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'reklas': 'no label', 'skor-ahp': 'no label', 'fid': 'no label', 'DN': 'no label', 'Entity_2': 'no label', 'Layer_2': 'no label', 'Color_2': 'no label', 'Linetype_2': 'no label', 'Elevation_': 'no label', 'LineWt_2': 'no label', 'RefName_2': 'no label', 'Shape_Le_1': 'no label', 'ringId': 'no label', 'distance': 'no label', 'bobot': 'no label', 'totalbobot': 'no label', 'Alternatif': 'no label', 'luas': 'no label', });
lyr_alternatif_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
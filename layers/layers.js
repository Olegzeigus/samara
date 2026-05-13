var wms_layers = [];

var format_buildings_clear_0 = new ol.format.GeoJSON();
var features_buildings_clear_0 = format_buildings_clear_0.readFeatures(json_buildings_clear_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_clear_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_clear_0.addFeatures(features_buildings_clear_0);
var lyr_buildings_clear_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_clear_0,
maxResolution:14.00223307613098,
 
                style: style_buildings_clear_0,
                popuplayertitle: 'buildings_clear',
                interactive: true,
                title: '<img src="styles/legend/buildings_clear_0.png" /> buildings_clear'
            });
var format_landuse_25200_1 = new ol.format.GeoJSON();
var features_landuse_25200_1 = format_landuse_25200_1.readFeatures(json_landuse_25200_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_25200_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_25200_1.addFeatures(features_landuse_25200_1);
var lyr_landuse_25200_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_25200_1,
maxResolution:28004.466152261964,
 minResolution:14.00223307613098,

                style: style_landuse_25200_1,
                popuplayertitle: 'landuse_25-200+',
                interactive: true,
    title: 'landuse_25-200+<br />\
    <img src="styles/legend/landuse_25200_1_0.png" /> industrial<br />\
    <img src="styles/legend/landuse_25200_1_1.png" /> residential<br />\
    <img src="styles/legend/landuse_25200_1_2.png" /> cemetery<br />\
    <img src="styles/legend/landuse_25200_1_3.png" /> commercial<br />\
    <img src="styles/legend/landuse_25200_1_4.png" /> allotments<br />' });
var format_admin_level_2 = new ol.format.GeoJSON();
var features_admin_level_2 = format_admin_level_2.readFeatures(json_admin_level_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_level_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_level_2.addFeatures(features_admin_level_2);
var lyr_admin_level_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_level_2, 
                style: style_admin_level_2,
                popuplayertitle: 'admin_level',
                interactive: true,
    title: 'admin_level<br />\
    <img src="styles/legend/admin_level_2_0.png" /> region<br />\
    <img src="styles/legend/admin_level_2_1.png" /> mun_dist<br />\
    <img src="styles/legend/admin_level_2_2.png" /> settlement_dist<br />' });
var format_background_3 = new ol.format.GeoJSON();
var features_background_3 = format_background_3.readFeatures(json_background_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_background_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_background_3.addFeatures(features_background_3);
var lyr_background_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_background_3, 
                style: style_background_3,
                popuplayertitle: 'background',
                interactive: true,
                title: '<img src="styles/legend/background_3.png" /> background'
            });
var format_nature_park_4 = new ol.format.GeoJSON();
var features_nature_park_4 = format_nature_park_4.readFeatures(json_nature_park_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nature_park_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nature_park_4.addFeatures(features_nature_park_4);
var lyr_nature_park_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nature_park_4, 
                style: style_nature_park_4,
                popuplayertitle: 'nature_park',
                interactive: true,
                title: '<img src="styles/legend/nature_park_4.png" /> nature_park'
            });
var format_natural_5 = new ol.format.GeoJSON();
var features_natural_5 = format_natural_5.readFeatures(json_natural_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_5.addFeatures(features_natural_5);
var lyr_natural_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_natural_5, 
                style: style_natural_5,
                popuplayertitle: 'natural',
                interactive: true,
    title: 'natural<br />\
    <img src="styles/legend/natural_5_0.png" /> water<br />\
    <img src="styles/legend/natural_5_1.png" /> grassland<br />\
    <img src="styles/legend/natural_5_2.png" /> wood<br />\
    <img src="styles/legend/natural_5_3.png" /> beach<br />\
    <img src="styles/legend/natural_5_4.png" /> scrub<br />' });
var format_waterway_6 = new ol.format.GeoJSON();
var features_waterway_6 = format_waterway_6.readFeatures(json_waterway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterway_6.addFeatures(features_waterway_6);
var lyr_waterway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterway_6, 
                style: style_waterway_6,
                popuplayertitle: 'waterway',
                interactive: true,
    title: 'waterway<br />\
    <img src="styles/legend/waterway_6_0.png" /> river<br />' });
var format_roads_7 = new ol.format.GeoJSON();
var features_roads_7 = format_roads_7.readFeatures(json_roads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_7.addFeatures(features_roads_7);
var lyr_roads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_7, 
                style: style_roads_7,
                popuplayertitle: 'roads',
                interactive: true,
    title: 'roads<br />\
    <img src="styles/legend/roads_7_0.png" /> primary<br />\
    <img src="styles/legend/roads_7_1.png" /> pedestrian<br />\
    <img src="styles/legend/roads_7_2.png" /> construction<br />\
    <img src="styles/legend/roads_7_3.png" /> secondary_200<br />\
    <img src="styles/legend/roads_7_4.png" /> secondary_100<br />\
    <img src="styles/legend/roads_7_5.png" /> secondary_50<br />\
    <img src="styles/legend/roads_7_6.png" /> secondary_25<br />\
    <img src="styles/legend/roads_7_7.png" /> secondary_all<br />' });
var format_rail_tram_8 = new ol.format.GeoJSON();
var features_rail_tram_8 = format_rail_tram_8.readFeatures(json_rail_tram_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rail_tram_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rail_tram_8.addFeatures(features_rail_tram_8);
var lyr_rail_tram_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rail_tram_8, 
                style: style_rail_tram_8,
                popuplayertitle: 'rail_tram',
                interactive: true,
    title: 'rail_tram<br />\
    <img src="styles/legend/rail_tram_8_0.png" /> rail_main<br />\
    <img src="styles/legend/rail_tram_8_1.png" /> rail_all<br />\
    <img src="styles/legend/rail_tram_8_2.png" /> tram_all<br />' });
var format_city_9 = new ol.format.GeoJSON();
var features_city_9 = format_city_9.readFeatures(json_city_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_city_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_city_9.addFeatures(features_city_9);
var lyr_city_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_city_9, 
                style: style_city_9,
                popuplayertitle: 'city',
                interactive: true,
                title: 'city'
            });
var format_BLD_25_10 = new ol.format.GeoJSON();
var features_BLD_25_10 = format_BLD_25_10.readFeatures(json_BLD_25_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLD_25_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLD_25_10.addFeatures(features_BLD_25_10);
var lyr_BLD_25_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLD_25_10,
maxResolution:7.00111653806549,
 
                style: style_BLD_25_10,
                popuplayertitle: 'BLD_25',
                interactive: true,
    title: 'BLD_25<br />\
    <img src="styles/legend/BLD_25_10_0.png" /> 0 - 62<br />\
    <img src="styles/legend/BLD_25_10_1.png" /> 62 - 220<br />\
    <img src="styles/legend/BLD_25_10_2.png" /> 220 - 490<br />\
    <img src="styles/legend/BLD_25_10_3.png" /> 490 - 1 233<br />\
    <img src="styles/legend/BLD_25_10_4.png" /> 1 233 - 3 591<br />' });
var format_mkd_ptsmerged_11 = new ol.format.GeoJSON();
var features_mkd_ptsmerged_11 = format_mkd_ptsmerged_11.readFeatures(json_mkd_ptsmerged_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mkd_ptsmerged_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mkd_ptsmerged_11.addFeatures(features_mkd_ptsmerged_11);
var lyr_mkd_ptsmerged_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mkd_ptsmerged_11,
maxResolution:14.00223307613098,
 minResolution:7.00111653806549,

                style: style_mkd_ptsmerged_11,
                popuplayertitle: 'mkd_pts — merged',
                interactive: true,
    title: 'mkd_pts — merged<br />\
    <img src="styles/legend/mkd_ptsmerged_11_0.png" /> 0 - 62<br />\
    <img src="styles/legend/mkd_ptsmerged_11_1.png" /> 62 - 220<br />\
    <img src="styles/legend/mkd_ptsmerged_11_2.png" /> 220 - 491<br />\
    <img src="styles/legend/mkd_ptsmerged_11_3.png" /> 491 - 1 234<br />\
    <img src="styles/legend/mkd_ptsmerged_11_4.png" /> 1 234 - 3 591<br />' });
var format_MKD_BLD_GRD_50_12 = new ol.format.GeoJSON();
var features_MKD_BLD_GRD_50_12 = format_MKD_BLD_GRD_50_12.readFeatures(json_MKD_BLD_GRD_50_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MKD_BLD_GRD_50_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MKD_BLD_GRD_50_12.addFeatures(features_MKD_BLD_GRD_50_12);
var lyr_MKD_BLD_GRD_50_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MKD_BLD_GRD_50_12,
maxResolution:28.00446615226196,
 minResolution:14.00223307613098,

                style: style_MKD_BLD_GRD_50_12,
                popuplayertitle: 'MKD_BLD_GRD_50',
                interactive: true,
    title: 'MKD_BLD_GRD_50<br />\
    <img src="styles/legend/MKD_BLD_GRD_50_12_0.png" /> 0 - 188<br />\
    <img src="styles/legend/MKD_BLD_GRD_50_12_1.png" /> 188 - 584<br />\
    <img src="styles/legend/MKD_BLD_GRD_50_12_2.png" /> 584 - 1 110<br />\
    <img src="styles/legend/MKD_BLD_GRD_50_12_3.png" /> 1 110 - 2 518<br />\
    <img src="styles/legend/MKD_BLD_GRD_50_12_4.png" /> 2 518 - 6 105<br />' });
var format_BLD_GRD_100_13 = new ol.format.GeoJSON();
var features_BLD_GRD_100_13 = format_BLD_GRD_100_13.readFeatures(json_BLD_GRD_100_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLD_GRD_100_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLD_GRD_100_13.addFeatures(features_BLD_GRD_100_13);
var lyr_BLD_GRD_100_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLD_GRD_100_13,
maxResolution:56.00893230452392,
 minResolution:28.00446615226196,

                style: style_BLD_GRD_100_13,
                popuplayertitle: 'BLD_GRD_100',
                interactive: true,
    title: 'BLD_GRD_100<br />\
    <img src="styles/legend/BLD_GRD_100_13_0.png" /> 0 - 692<br />\
    <img src="styles/legend/BLD_GRD_100_13_1.png" /> 692 - 2 317<br />\
    <img src="styles/legend/BLD_GRD_100_13_2.png" /> 2 317 - 4 174<br />\
    <img src="styles/legend/BLD_GRD_100_13_3.png" /> 4 174 - 6 884<br />\
    <img src="styles/legend/BLD_GRD_100_13_4.png" /> 6 884 - 11 257<br />' });
var format_admin_popul_200_14 = new ol.format.GeoJSON();
var features_admin_popul_200_14 = format_admin_popul_200_14.readFeatures(json_admin_popul_200_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_popul_200_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_popul_200_14.addFeatures(features_admin_popul_200_14);
var lyr_admin_popul_200_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_popul_200_14,
maxResolution:28004.466152261964,
 minResolution:56.00893230452392,

                style: style_admin_popul_200_14,
                popuplayertitle: 'admin_popul_200',
                interactive: true,
    title: 'admin_popul_200<br />\
    <img src="styles/legend/admin_popul_200_14_0.png" /> 0 - 54 296<br />\
    <img src="styles/legend/admin_popul_200_14_1.png" /> 54 296 - 94 333<br />\
    <img src="styles/legend/admin_popul_200_14_2.png" /> 94 333 - 157 952<br />\
    <img src="styles/legend/admin_popul_200_14_3.png" /> 157 952 - 211 700<br />\
    <img src="styles/legend/admin_popul_200_14_4.png" /> 211 700 - 250 857<br />' });
var format_SCH_MKD_BUF_25_15 = new ol.format.GeoJSON();
var features_SCH_MKD_BUF_25_15 = format_SCH_MKD_BUF_25_15.readFeatures(json_SCH_MKD_BUF_25_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_MKD_BUF_25_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_MKD_BUF_25_15.addFeatures(features_SCH_MKD_BUF_25_15);
var lyr_SCH_MKD_BUF_25_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_MKD_BUF_25_15,
maxResolution:7.00111653806549,
 
                style: style_SCH_MKD_BUF_25_15,
                popuplayertitle: 'SCH_MKD_BUF_25',
                interactive: true,
    title: 'SCH_MKD_BUF_25<br />\
    <img src="styles/legend/SCH_MKD_BUF_25_15_0.png" /> 0 - 1<br />\
    <img src="styles/legend/SCH_MKD_BUF_25_15_1.png" /> 1 - 60<br />\
    <img src="styles/legend/SCH_MKD_BUF_25_15_2.png" /> 60 - 120<br />\
    <img src="styles/legend/SCH_MKD_BUF_25_15_3.png" /> 120 - 135<br />\
    <img src="styles/legend/SCH_MKD_BUF_25_15_4.png" /> 135 - 11 291<br />' });
var format_schools_buffers_500_ptsresult_16 = new ol.format.GeoJSON();
var features_schools_buffers_500_ptsresult_16 = format_schools_buffers_500_ptsresult_16.readFeatures(json_schools_buffers_500_ptsresult_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools_buffers_500_ptsresult_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schools_buffers_500_ptsresult_16.addFeatures(features_schools_buffers_500_ptsresult_16);
var lyr_schools_buffers_500_ptsresult_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_schools_buffers_500_ptsresult_16,
maxResolution:14.00223307613098,
 minResolution:7.00111653806549,

                style: style_schools_buffers_500_ptsresult_16,
                popuplayertitle: 'schools_buffers_500_pts — result',
                interactive: true,
    title: 'schools_buffers_500_pts — result<br />\
    <img src="styles/legend/schools_buffers_500_ptsresult_16_0.png" /> 0 - 1<br />\
    <img src="styles/legend/schools_buffers_500_ptsresult_16_1.png" /> 1 - 60<br />\
    <img src="styles/legend/schools_buffers_500_ptsresult_16_2.png" /> 60 - 120<br />\
    <img src="styles/legend/schools_buffers_500_ptsresult_16_3.png" /> 120 - 135<br />\
    <img src="styles/legend/schools_buffers_500_ptsresult_16_4.png" /> 135 - 11 291<br />' });
var format_SCH_BLD_GRD_BUF_50_17 = new ol.format.GeoJSON();
var features_SCH_BLD_GRD_BUF_50_17 = format_SCH_BLD_GRD_BUF_50_17.readFeatures(json_SCH_BLD_GRD_BUF_50_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_BLD_GRD_BUF_50_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_BLD_GRD_BUF_50_17.addFeatures(features_SCH_BLD_GRD_BUF_50_17);
var lyr_SCH_BLD_GRD_BUF_50_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_BLD_GRD_BUF_50_17,
maxResolution:28.00446615226196,
 minResolution:14.00223307613098,

                style: style_SCH_BLD_GRD_BUF_50_17,
                popuplayertitle: 'SCH_BLD_GRD_BUF_50',
                interactive: true,
    title: 'SCH_BLD_GRD_BUF_50<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_50_17_0.png" /> 0 - 1<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_50_17_1.png" /> 1 - 60<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_50_17_2.png" /> 60 - 120<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_50_17_3.png" /> 120 - 135<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_50_17_4.png" /> 135 - 11 291<br />' });
var format_SCH_BLD_GRD_BUF_100_18 = new ol.format.GeoJSON();
var features_SCH_BLD_GRD_BUF_100_18 = format_SCH_BLD_GRD_BUF_100_18.readFeatures(json_SCH_BLD_GRD_BUF_100_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_BLD_GRD_BUF_100_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_BLD_GRD_BUF_100_18.addFeatures(features_SCH_BLD_GRD_BUF_100_18);
var lyr_SCH_BLD_GRD_BUF_100_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_BLD_GRD_BUF_100_18,
maxResolution:56.00893230452392,
 minResolution:28.00446615226196,

                style: style_SCH_BLD_GRD_BUF_100_18,
                popuplayertitle: 'SCH_BLD_GRD_BUF_100',
                interactive: true,
    title: 'SCH_BLD_GRD_BUF_100<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_100_18_0.png" /> 0 - 1<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_100_18_1.png" /> 1 - 60<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_100_18_2.png" /> 60 - 120<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_100_18_3.png" /> 120 - 135<br />\
    <img src="styles/legend/SCH_BLD_GRD_BUF_100_18_4.png" /> 135 - 11 291<br />' });
var format_SCH_ADM_BUF_200_19 = new ol.format.GeoJSON();
var features_SCH_ADM_BUF_200_19 = format_SCH_ADM_BUF_200_19.readFeatures(json_SCH_ADM_BUF_200_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_ADM_BUF_200_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_ADM_BUF_200_19.addFeatures(features_SCH_ADM_BUF_200_19);
var lyr_SCH_ADM_BUF_200_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_ADM_BUF_200_19,
maxResolution:28004.466152261964,
 minResolution:56.00893230452392,

                style: style_SCH_ADM_BUF_200_19,
                popuplayertitle: 'SCH_ADM_BUF_200',
                interactive: true,
    title: 'SCH_ADM_BUF_200<br />\
    <img src="styles/legend/SCH_ADM_BUF_200_19_0.png" /> 0 - 1<br />\
    <img src="styles/legend/SCH_ADM_BUF_200_19_1.png" /> 1 - 60<br />\
    <img src="styles/legend/SCH_ADM_BUF_200_19_2.png" /> 60 - 120<br />\
    <img src="styles/legend/SCH_ADM_BUF_200_19_3.png" /> 120 - 135<br />\
    <img src="styles/legend/SCH_ADM_BUF_200_19_4.png" /> 135 - 11 291<br />' });
var format_SCH_BUF_25_20 = new ol.format.GeoJSON();
var features_SCH_BUF_25_20 = format_SCH_BUF_25_20.readFeatures(json_SCH_BUF_25_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_BUF_25_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_BUF_25_20.addFeatures(features_SCH_BUF_25_20);
var lyr_SCH_BUF_25_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_BUF_25_20,
maxResolution:7.00111653806549,
 
                style: style_SCH_BUF_25_20,
                popuplayertitle: 'SCH_BUF_25',
                interactive: true,
                title: '<img src="styles/legend/SCH_BUF_25_20.png" /> SCH_BUF_25'
            });
var format_SCH_BUF_50_21 = new ol.format.GeoJSON();
var features_SCH_BUF_50_21 = format_SCH_BUF_50_21.readFeatures(json_SCH_BUF_50_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_BUF_50_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_BUF_50_21.addFeatures(features_SCH_BUF_50_21);
var lyr_SCH_BUF_50_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_BUF_50_21,
maxResolution:28.00446615226196,
 minResolution:7.00111653806549,

                style: style_SCH_BUF_50_21,
                popuplayertitle: 'SCH_BUF_50',
                interactive: true,
                title: '<img src="styles/legend/SCH_BUF_50_21.png" /> SCH_BUF_50'
            });
var format_SCH_BUF_100_22 = new ol.format.GeoJSON();
var features_SCH_BUF_100_22 = format_SCH_BUF_100_22.readFeatures(json_SCH_BUF_100_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_BUF_100_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_BUF_100_22.addFeatures(features_SCH_BUF_100_22);
var lyr_SCH_BUF_100_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_BUF_100_22,
maxResolution:2800.4466152261966,
 minResolution:28.00446615226196,

                style: style_SCH_BUF_100_22,
                popuplayertitle: 'SCH_BUF_100',
                interactive: true,
                title: '<img src="styles/legend/SCH_BUF_100_22.png" /> SCH_BUF_100'
            });
var lyr_schools_125_buf_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'schools_1-25_buf<br />\
    <img src="styles/legend/schools_125_buf_23_0.png" /> 0,0000<br />\
    <img src="styles/legend/schools_125_buf_23_1.png" /> 11,6390<br />\
    <img src="styles/legend/schools_125_buf_23_2.png" /> 23,2779<br />\
    <img src="styles/legend/schools_125_buf_23_3.png" /> 34,9169<br />\
    <img src="styles/legend/schools_125_buf_23_4.png" /> 46,5559<br />' ,
        
maxResolution:7.00111653806549,

        
        source: new ol.source.ImageStatic({
            url: "./layers/schools_125_buf_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5546200.242364, 7000326.805159, 5609189.480811, 7081414.415958]
        })
    });
var lyr_schools_2550_buf_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'schools_25-50_buf<br />\
    <img src="styles/legend/schools_2550_buf_24_0.png" /> 0,0000<br />\
    <img src="styles/legend/schools_2550_buf_24_1.png" /> 13,6723<br />\
    <img src="styles/legend/schools_2550_buf_24_2.png" /> 27,3445<br />\
    <img src="styles/legend/schools_2550_buf_24_3.png" /> 41,0168<br />\
    <img src="styles/legend/schools_2550_buf_24_4.png" /> 54,6891<br />' ,
        
maxResolution:14.00223307613098,

        minResolution:7.00111653806549,

        source: new ol.source.ImageStatic({
            url: "./layers/schools_2550_buf_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5545773.577380, 6999901.851404, 5609610.287809, 7081838.891693]
        })
    });
var lyr_schools_50100_buf_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'schools_50-100_buf<br />\
    <img src="styles/legend/schools_50100_buf_25_0.png" /> 0,0000<br />\
    <img src="styles/legend/schools_50100_buf_25_1.png" /> 15,2241<br />\
    <img src="styles/legend/schools_50100_buf_25_2.png" /> 30,4481<br />\
    <img src="styles/legend/schools_50100_buf_25_3.png" /> 45,6722<br />\
    <img src="styles/legend/schools_50100_buf_25_4.png" /> 60,8962<br />' ,
        
maxResolution:28.00446615226196,

        minResolution:14.00223307613098,

        source: new ol.source.ImageStatic({
            url: "./layers/schools_50100_buf_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5545346.867993, 6999476.899539, 5610034.375646, 7082263.396974]
        })
    });
var lyr_schools_100_buf_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'schools_100+_buf<br />\
    <img src="styles/legend/schools_100_buf_26_0.png" /> 0,0000<br />\
    <img src="styles/legend/schools_100_buf_26_1.png" /> 8,9479<br />\
    <img src="styles/legend/schools_100_buf_26_2.png" /> 17,8958<br />\
    <img src="styles/legend/schools_100_buf_26_3.png" /> 26,8437<br />\
    <img src="styles/legend/schools_100_buf_26_4.png" /> 35,7916<br />\
    <img src="styles/legend/schools_100_buf_26_5.png" /> 44,7395<br />\
    <img src="styles/legend/schools_100_buf_26_6.png" /> 53,6873<br />\
    <img src="styles/legend/schools_100_buf_26_7.png" /> 61,9469<br />\
    <img src="styles/legend/schools_100_buf_26_8.png" /> 68,8299<br />' ,
        
maxResolution:28004.466152261964,

        minResolution:28.00446615226196,

        source: new ol.source.ImageStatic({
            url: "./layers/schools_100_buf_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5544493.315987, 6998622.004447, 5610875.812603, 7083112.351551]
        })
    });
var format_SCH_MKD_ISO_25_27 = new ol.format.GeoJSON();
var features_SCH_MKD_ISO_25_27 = format_SCH_MKD_ISO_25_27.readFeatures(json_SCH_MKD_ISO_25_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_MKD_ISO_25_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_MKD_ISO_25_27.addFeatures(features_SCH_MKD_ISO_25_27);
var lyr_SCH_MKD_ISO_25_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_MKD_ISO_25_27,
maxResolution:7.00111653806549,
 
                style: style_SCH_MKD_ISO_25_27,
                popuplayertitle: 'SCH_MKD_ISO_25',
                interactive: true,
    title: 'SCH_MKD_ISO_25<br />\
    <img src="styles/legend/SCH_MKD_ISO_25_27_0.png" /> 0 - 1<br />\
    <img src="styles/legend/SCH_MKD_ISO_25_27_1.png" /> 1 - 60<br />\
    <img src="styles/legend/SCH_MKD_ISO_25_27_2.png" /> 60 - 120<br />\
    <img src="styles/legend/SCH_MKD_ISO_25_27_3.png" /> 120 - 135<br />\
    <img src="styles/legend/SCH_MKD_ISO_25_27_4.png" /> 135 - 11 291<br />' });
var format_schools_iso_ptsresult_28 = new ol.format.GeoJSON();
var features_schools_iso_ptsresult_28 = format_schools_iso_ptsresult_28.readFeatures(json_schools_iso_ptsresult_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools_iso_ptsresult_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schools_iso_ptsresult_28.addFeatures(features_schools_iso_ptsresult_28);
var lyr_schools_iso_ptsresult_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_schools_iso_ptsresult_28,
maxResolution:14.00223307613098,
 minResolution:7.00111653806549,

                style: style_schools_iso_ptsresult_28,
                popuplayertitle: 'schools_iso_pts — result',
                interactive: true,
    title: 'schools_iso_pts — result<br />\
    <img src="styles/legend/schools_iso_ptsresult_28_0.png" /> 0 - 1<br />\
    <img src="styles/legend/schools_iso_ptsresult_28_1.png" /> 1 - 60<br />\
    <img src="styles/legend/schools_iso_ptsresult_28_2.png" /> 60 - 120<br />\
    <img src="styles/legend/schools_iso_ptsresult_28_3.png" /> 120 - 135<br />\
    <img src="styles/legend/schools_iso_ptsresult_28_4.png" /> 135 - 11 291<br />' });
var format_SCH_BLD_GRD_ISO_50_29 = new ol.format.GeoJSON();
var features_SCH_BLD_GRD_ISO_50_29 = format_SCH_BLD_GRD_ISO_50_29.readFeatures(json_SCH_BLD_GRD_ISO_50_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_BLD_GRD_ISO_50_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_BLD_GRD_ISO_50_29.addFeatures(features_SCH_BLD_GRD_ISO_50_29);
var lyr_SCH_BLD_GRD_ISO_50_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_BLD_GRD_ISO_50_29,
maxResolution:28.00446615226196,
 minResolution:14.00223307613098,

                style: style_SCH_BLD_GRD_ISO_50_29,
                popuplayertitle: 'SCH_BLD_GRD_ISO_50',
                interactive: true,
    title: 'SCH_BLD_GRD_ISO_50<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_50_29_0.png" /> 0 - 1<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_50_29_1.png" /> 1 - 60<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_50_29_2.png" /> 60 - 120<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_50_29_3.png" /> 120 - 135<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_50_29_4.png" /> 135 - 11 291<br />' });
var format_SCH_BLD_GRD_ISO_100_30 = new ol.format.GeoJSON();
var features_SCH_BLD_GRD_ISO_100_30 = format_SCH_BLD_GRD_ISO_100_30.readFeatures(json_SCH_BLD_GRD_ISO_100_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_BLD_GRD_ISO_100_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_BLD_GRD_ISO_100_30.addFeatures(features_SCH_BLD_GRD_ISO_100_30);
var lyr_SCH_BLD_GRD_ISO_100_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_BLD_GRD_ISO_100_30,
maxResolution:56.00893230452392,
 minResolution:28.00446615226196,

                style: style_SCH_BLD_GRD_ISO_100_30,
                popuplayertitle: 'SCH_BLD_GRD_ISO_100',
                interactive: true,
    title: 'SCH_BLD_GRD_ISO_100<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_100_30_0.png" /> 0 - 1<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_100_30_1.png" /> 1 - 60<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_100_30_2.png" /> 60 - 120<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_100_30_3.png" /> 120 - 135<br />\
    <img src="styles/legend/SCH_BLD_GRD_ISO_100_30_4.png" /> 135 - 11 291<br />' });
var format_SCH_ADM_ISO_200_31 = new ol.format.GeoJSON();
var features_SCH_ADM_ISO_200_31 = format_SCH_ADM_ISO_200_31.readFeatures(json_SCH_ADM_ISO_200_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_ADM_ISO_200_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_ADM_ISO_200_31.addFeatures(features_SCH_ADM_ISO_200_31);
var lyr_SCH_ADM_ISO_200_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_ADM_ISO_200_31,
maxResolution:28004.466152261964,
 minResolution:56.00893230452392,

                style: style_SCH_ADM_ISO_200_31,
                popuplayertitle: 'SCH_ADM_ISO_200',
                interactive: true,
    title: 'SCH_ADM_ISO_200<br />\
    <img src="styles/legend/SCH_ADM_ISO_200_31_0.png" /> 0 - 1<br />\
    <img src="styles/legend/SCH_ADM_ISO_200_31_1.png" /> 1 - 60<br />\
    <img src="styles/legend/SCH_ADM_ISO_200_31_2.png" /> 60 - 120<br />\
    <img src="styles/legend/SCH_ADM_ISO_200_31_3.png" /> 120 - 135<br />\
    <img src="styles/legend/SCH_ADM_ISO_200_31_4.png" /> 135 - 11 291<br />' });
var format_SCH_ISO_25_32 = new ol.format.GeoJSON();
var features_SCH_ISO_25_32 = format_SCH_ISO_25_32.readFeatures(json_SCH_ISO_25_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_ISO_25_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_ISO_25_32.addFeatures(features_SCH_ISO_25_32);
var lyr_SCH_ISO_25_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_ISO_25_32,
maxResolution:7.00111653806549,
 
                style: style_SCH_ISO_25_32,
                popuplayertitle: 'SCH_ISO_25',
                interactive: true,
                title: '<img src="styles/legend/SCH_ISO_25_32.png" /> SCH_ISO_25'
            });
var format_SCH_ISO_50_33 = new ol.format.GeoJSON();
var features_SCH_ISO_50_33 = format_SCH_ISO_50_33.readFeatures(json_SCH_ISO_50_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_ISO_50_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_ISO_50_33.addFeatures(features_SCH_ISO_50_33);
var lyr_SCH_ISO_50_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_ISO_50_33,
maxResolution:28.00446615226196,
 minResolution:7.00111653806549,

                style: style_SCH_ISO_50_33,
                popuplayertitle: 'SCH_ISO_50',
                interactive: true,
                title: '<img src="styles/legend/SCH_ISO_50_33.png" /> SCH_ISO_50'
            });
var format_SCH_ISO_100_34 = new ol.format.GeoJSON();
var features_SCH_ISO_100_34 = format_SCH_ISO_100_34.readFeatures(json_SCH_ISO_100_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCH_ISO_100_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCH_ISO_100_34.addFeatures(features_SCH_ISO_100_34);
var lyr_SCH_ISO_100_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCH_ISO_100_34,
maxResolution:2800.4466152261966,
 minResolution:28.00446615226196,

                style: style_SCH_ISO_100_34,
                popuplayertitle: 'SCH_ISO_100',
                interactive: true,
                title: '<img src="styles/legend/SCH_ISO_100_34.png" /> SCH_ISO_100'
            });
var lyr_schools_125_35 = new ol.layer.Image({
        opacity: 1,
        
    title: 'schools_1-25<br />\
    <img src="styles/legend/schools_125_35_0.png" /> 0,0000<br />\
    <img src="styles/legend/schools_125_35_1.png" /> 11,6390<br />\
    <img src="styles/legend/schools_125_35_2.png" /> 23,2779<br />\
    <img src="styles/legend/schools_125_35_3.png" /> 34,9169<br />\
    <img src="styles/legend/schools_125_35_4.png" /> 46,5559<br />' ,
        
maxResolution:7.00111653806549,

        
        source: new ol.source.ImageStatic({
            url: "./layers/schools_125_35.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5546200.239886, 7000321.895313, 5609189.521647, 7081414.505161]
        })
    });
var lyr_schools_2550_36 = new ol.layer.Image({
        opacity: 1,
        
    title: 'schools_25-50<br />\
    <img src="styles/legend/schools_2550_36_0.png" /> 0,0000<br />\
    <img src="styles/legend/schools_2550_36_1.png" /> 13,6723<br />\
    <img src="styles/legend/schools_2550_36_2.png" /> 27,3445<br />\
    <img src="styles/legend/schools_2550_36_3.png" /> 41,0168<br />\
    <img src="styles/legend/schools_2550_36_4.png" /> 54,6891<br />' ,
        
maxResolution:14.00223307613098,

        minResolution:7.00111653806549,

        source: new ol.source.ImageStatic({
            url: "./layers/schools_2550_36.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5545773.574897, 6999896.941825, 5609610.328383, 7081838.980901]
        })
    });
var lyr_schools_50100_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'schools_50-100<br />\
    <img src="styles/legend/schools_50100_37_0.png" /> 0,0000<br />\
    <img src="styles/legend/schools_50100_37_1.png" /> 15,2241<br />\
    <img src="styles/legend/schools_50100_37_2.png" /> 30,4481<br />\
    <img src="styles/legend/schools_50100_37_3.png" /> 45,6722<br />\
    <img src="styles/legend/schools_50100_37_4.png" /> 60,8962<br />' ,
        
maxResolution:28.00446615226196,

        minResolution:14.00223307613098,

        source: new ol.source.ImageStatic({
            url: "./layers/schools_50100_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5545346.865505, 6999468.658501, 5610037.768473, 7082263.515036]
        })
    });
var lyr_schools_100_38 = new ol.layer.Image({
        opacity: 1,
        
    title: 'schools_100+<br />\
    <img src="styles/legend/schools_100_38_0.png" /> 0,0000<br />\
    <img src="styles/legend/schools_100_38_1.png" /> 8,9479<br />\
    <img src="styles/legend/schools_100_38_2.png" /> 17,8958<br />\
    <img src="styles/legend/schools_100_38_3.png" /> 26,8437<br />\
    <img src="styles/legend/schools_100_38_4.png" /> 35,7916<br />\
    <img src="styles/legend/schools_100_38_5.png" /> 44,7395<br />\
    <img src="styles/legend/schools_100_38_6.png" /> 53,6873<br />\
    <img src="styles/legend/schools_100_38_7.png" /> 61,9469<br />\
    <img src="styles/legend/schools_100_38_8.png" /> 68,8299<br />' ,
        
maxResolution:28004.466152261964,

        minResolution:28.00446615226196,

        source: new ol.source.ImageStatic({
            url: "./layers/schools_100_38.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5544493.313489, 6998622.092711, 5610875.810872, 7083112.440774]
        })
    });
var format_samara_schools_ply_39 = new ol.format.GeoJSON();
var features_samara_schools_ply_39 = format_samara_schools_ply_39.readFeatures(json_samara_schools_ply_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_samara_schools_ply_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_samara_schools_ply_39.addFeatures(features_samara_schools_ply_39);
var lyr_samara_schools_ply_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_samara_schools_ply_39,
maxResolution:7.00111653806549,
 
                style: style_samara_schools_ply_39,
                popuplayertitle: 'samara_schools_ply',
                interactive: true,
                title: '<img src="styles/legend/samara_schools_ply_39.png" /> samara_schools_ply'
            });
var format_samara_schools_pts_1_40 = new ol.format.GeoJSON();
var features_samara_schools_pts_1_40 = format_samara_schools_pts_1_40.readFeatures(json_samara_schools_pts_1_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_samara_schools_pts_1_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_samara_schools_pts_1_40.addFeatures(features_samara_schools_pts_1_40);
var lyr_samara_schools_pts_1_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_samara_schools_pts_1_40,
maxResolution:2800.4466152261966,
 minResolution:7.00111653806549,

                style: style_samara_schools_pts_1_40,
                popuplayertitle: 'samara_schools_pts_1',
                interactive: true,
                title: 'samara_schools_pts_1'
            });
var format_KG_BLD_BUF_25_41 = new ol.format.GeoJSON();
var features_KG_BLD_BUF_25_41 = format_KG_BLD_BUF_25_41.readFeatures(json_KG_BLD_BUF_25_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BLD_BUF_25_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BLD_BUF_25_41.addFeatures(features_KG_BLD_BUF_25_41);
var lyr_KG_BLD_BUF_25_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BLD_BUF_25_41,
maxResolution:7.00111653806549,
 
                style: style_KG_BLD_BUF_25_41,
                popuplayertitle: 'KG_BLD_BUF_25',
                interactive: true,
    title: 'KG_BLD_BUF_25<br />\
    <img src="styles/legend/KG_BLD_BUF_25_41_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KG_BLD_BUF_25_41_1.png" /> 1 - 30<br />\
    <img src="styles/legend/KG_BLD_BUF_25_41_2.png" /> 30 - 61<br />\
    <img src="styles/legend/KG_BLD_BUF_25_41_3.png" /> 61 - 85<br />\
    <img src="styles/legend/KG_BLD_BUF_25_41_4.png" /> 85 - 11 291<br />' });
var format_kindergarden_radius_300_ptsresult_42 = new ol.format.GeoJSON();
var features_kindergarden_radius_300_ptsresult_42 = format_kindergarden_radius_300_ptsresult_42.readFeatures(json_kindergarden_radius_300_ptsresult_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kindergarden_radius_300_ptsresult_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kindergarden_radius_300_ptsresult_42.addFeatures(features_kindergarden_radius_300_ptsresult_42);
var lyr_kindergarden_radius_300_ptsresult_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kindergarden_radius_300_ptsresult_42,
maxResolution:14.00223307613098,
 minResolution:7.00111653806549,

                style: style_kindergarden_radius_300_ptsresult_42,
                popuplayertitle: 'kindergarden_radius_300_pts — result',
                interactive: true,
    title: 'kindergarden_radius_300_pts — result<br />\
    <img src="styles/legend/kindergarden_radius_300_ptsresult_42_0.png" /> 0 - 1<br />\
    <img src="styles/legend/kindergarden_radius_300_ptsresult_42_1.png" /> 1 - 30<br />\
    <img src="styles/legend/kindergarden_radius_300_ptsresult_42_2.png" /> 30 - 61<br />\
    <img src="styles/legend/kindergarden_radius_300_ptsresult_42_3.png" /> 61 - 85<br />\
    <img src="styles/legend/kindergarden_radius_300_ptsresult_42_4.png" /> 85 - 11 291<br />' });
var format_KG_BLD_GRD_BUF_50_43 = new ol.format.GeoJSON();
var features_KG_BLD_GRD_BUF_50_43 = format_KG_BLD_GRD_BUF_50_43.readFeatures(json_KG_BLD_GRD_BUF_50_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BLD_GRD_BUF_50_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BLD_GRD_BUF_50_43.addFeatures(features_KG_BLD_GRD_BUF_50_43);
var lyr_KG_BLD_GRD_BUF_50_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BLD_GRD_BUF_50_43,
maxResolution:28.00446615226196,
 minResolution:14.00223307613098,

                style: style_KG_BLD_GRD_BUF_50_43,
                popuplayertitle: 'KG_BLD_GRD_BUF_50',
                interactive: true,
    title: 'KG_BLD_GRD_BUF_50<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_50_43_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_50_43_1.png" /> 1 - 30<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_50_43_2.png" /> 30 - 61<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_50_43_3.png" /> 61 - 85<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_50_43_4.png" /> 85 - 11 291<br />' });
var format_KG_BLD_GRD_BUF_100_44 = new ol.format.GeoJSON();
var features_KG_BLD_GRD_BUF_100_44 = format_KG_BLD_GRD_BUF_100_44.readFeatures(json_KG_BLD_GRD_BUF_100_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BLD_GRD_BUF_100_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BLD_GRD_BUF_100_44.addFeatures(features_KG_BLD_GRD_BUF_100_44);
var lyr_KG_BLD_GRD_BUF_100_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BLD_GRD_BUF_100_44,
maxResolution:56.00893230452392,
 minResolution:28.00446615226196,

                style: style_KG_BLD_GRD_BUF_100_44,
                popuplayertitle: 'KG_BLD_GRD_BUF_100',
                interactive: true,
    title: 'KG_BLD_GRD_BUF_100<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_100_44_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_100_44_1.png" /> 1 - 30<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_100_44_2.png" /> 30 - 61<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_100_44_3.png" /> 61 - 85<br />\
    <img src="styles/legend/KG_BLD_GRD_BUF_100_44_4.png" /> 85 - 11 291<br />' });
var format_KG_ADM_BUF_200_45 = new ol.format.GeoJSON();
var features_KG_ADM_BUF_200_45 = format_KG_ADM_BUF_200_45.readFeatures(json_KG_ADM_BUF_200_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_ADM_BUF_200_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_ADM_BUF_200_45.addFeatures(features_KG_ADM_BUF_200_45);
var lyr_KG_ADM_BUF_200_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_ADM_BUF_200_45,
maxResolution:28004.466152261964,
 minResolution:56.00893230452392,

                style: style_KG_ADM_BUF_200_45,
                popuplayertitle: 'KG_ADM_BUF_200',
                interactive: true,
    title: 'KG_ADM_BUF_200<br />\
    <img src="styles/legend/KG_ADM_BUF_200_45_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KG_ADM_BUF_200_45_1.png" /> 1 - 30<br />\
    <img src="styles/legend/KG_ADM_BUF_200_45_2.png" /> 30 - 61<br />\
    <img src="styles/legend/KG_ADM_BUF_200_45_3.png" /> 61 - 85<br />\
    <img src="styles/legend/KG_ADM_BUF_200_45_4.png" /> 85 - 11 291<br />' });
var format_KG_BUF_25_46 = new ol.format.GeoJSON();
var features_KG_BUF_25_46 = format_KG_BUF_25_46.readFeatures(json_KG_BUF_25_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BUF_25_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BUF_25_46.addFeatures(features_KG_BUF_25_46);
var lyr_KG_BUF_25_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BUF_25_46,
maxResolution:7.00111653806549,
 
                style: style_KG_BUF_25_46,
                popuplayertitle: 'KG_BUF_25',
                interactive: true,
                title: '<img src="styles/legend/KG_BUF_25_46.png" /> KG_BUF_25'
            });
var format_KG_BUF_50_47 = new ol.format.GeoJSON();
var features_KG_BUF_50_47 = format_KG_BUF_50_47.readFeatures(json_KG_BUF_50_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BUF_50_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BUF_50_47.addFeatures(features_KG_BUF_50_47);
var lyr_KG_BUF_50_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BUF_50_47,
maxResolution:28.00446615226196,
 minResolution:7.00111653806549,

                style: style_KG_BUF_50_47,
                popuplayertitle: 'KG_BUF_50',
                interactive: true,
                title: '<img src="styles/legend/KG_BUF_50_47.png" /> KG_BUF_50'
            });
var format_KG_BUF_100_48 = new ol.format.GeoJSON();
var features_KG_BUF_100_48 = format_KG_BUF_100_48.readFeatures(json_KG_BUF_100_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BUF_100_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BUF_100_48.addFeatures(features_KG_BUF_100_48);
var lyr_KG_BUF_100_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BUF_100_48,
maxResolution:2800.4466152261966,
 minResolution:28.00446615226196,

                style: style_KG_BUF_100_48,
                popuplayertitle: 'KG_BUF_100',
                interactive: true,
                title: '<img src="styles/legend/KG_BUF_100_48.png" /> KG_BUF_100'
            });
var lyr_kidergarden_125_buf_49 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kidergarden_1-25_buf<br />\
    <img src="styles/legend/kidergarden_125_buf_49_0.png" /> 0,0000<br />\
    <img src="styles/legend/kidergarden_125_buf_49_1.png" /> 1,6445<br />\
    <img src="styles/legend/kidergarden_125_buf_49_2.png" /> 3,2891<br />\
    <img src="styles/legend/kidergarden_125_buf_49_3.png" /> 4,9336<br />\
    <img src="styles/legend/kidergarden_125_buf_49_4.png" /> 6,5781<br />' ,
        
maxResolution:7.00111653806549,

        
        source: new ol.source.ImageStatic({
            url: "./layers/kidergarden_125_buf_49.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5546541.542385, 7000665.436625, 5608854.145181, 7081074.847611]
        })
    });
var lyr_kidergarden_2550_buf_50 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kidergarden_25-50_buf<br />\
    <img src="styles/legend/kidergarden_2550_buf_50_0.png" /> 0,0000<br />\
    <img src="styles/legend/kidergarden_2550_buf_50_1.png" /> 1,9753<br />\
    <img src="styles/legend/kidergarden_2550_buf_50_2.png" /> 3,9506<br />\
    <img src="styles/legend/kidergarden_2550_buf_50_3.png" /> 5,9259<br />\
    <img src="styles/legend/kidergarden_2550_buf_50_4.png" /> 7,9012<br />' ,
        
maxResolution:14.00223307613098,

        minResolution:7.00111653806549,

        source: new ol.source.ImageStatic({
            url: "./layers/kidergarden_2550_buf_50.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5546285.570033, 7000409.796862, 5609107.326145, 7081329.538436]
        })
    });
var lyr_kidergarden_50100_buf_51 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kidergarden_50-100_buf<br />\
    <img src="styles/legend/kidergarden_50100_buf_51_0.png" /> 0,0000<br />\
    <img src="styles/legend/kidergarden_50100_buf_51_1.png" /> 2,4932<br />\
    <img src="styles/legend/kidergarden_50100_buf_51_2.png" /> 4,9864<br />\
    <img src="styles/legend/kidergarden_50100_buf_51_3.png" /> 7,4795<br />\
    <img src="styles/legend/kidergarden_50100_buf_51_4.png" /> 9,9727<br />' ,
        
maxResolution:28.00446615226196,

        minResolution:14.00223307613098,

        source: new ol.source.ImageStatic({
            url: "./layers/kidergarden_50100_buf_51.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5546029.581699, 7000154.157819, 5609363.816068, 7081584.258601]
        })
    });
var lyr_kidergarden_100_buf_52 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kidergarden_100+_buf<br />\
    <img src="styles/legend/kidergarden_100_buf_52_0.png" /> 0,0000<br />\
    <img src="styles/legend/kidergarden_100_buf_52_1.png" /> 3,0930<br />\
    <img src="styles/legend/kidergarden_100_buf_52_2.png" /> 6,1860<br />\
    <img src="styles/legend/kidergarden_100_buf_52_3.png" /> 9,2790<br />\
    <img src="styles/legend/kidergarden_100_buf_52_4.png" /> 12,3720<br />' ,
        
maxResolution:28004.466152261964,

        minResolution:28.00446615226196,

        source: new ol.source.ImageStatic({
            url: "./layers/kidergarden_100_buf_52.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5545517.557077, 6999637.884207, 5609870.140956, 7082093.641091]
        })
    });
var format_KG_BLD_ISO_25_53 = new ol.format.GeoJSON();
var features_KG_BLD_ISO_25_53 = format_KG_BLD_ISO_25_53.readFeatures(json_KG_BLD_ISO_25_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BLD_ISO_25_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BLD_ISO_25_53.addFeatures(features_KG_BLD_ISO_25_53);
var lyr_KG_BLD_ISO_25_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BLD_ISO_25_53,
maxResolution:7.00111653806549,
 
                style: style_KG_BLD_ISO_25_53,
                popuplayertitle: 'KG_BLD_ISO_25',
                interactive: true,
    title: 'KG_BLD_ISO_25<br />\
    <img src="styles/legend/KG_BLD_ISO_25_53_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KG_BLD_ISO_25_53_1.png" /> 1 - 30<br />\
    <img src="styles/legend/KG_BLD_ISO_25_53_2.png" /> 30 - 61<br />\
    <img src="styles/legend/KG_BLD_ISO_25_53_3.png" /> 61 - 85<br />\
    <img src="styles/legend/KG_BLD_ISO_25_53_4.png" /> 85 - 11 291<br />' });
var format_kindergarden_iso_300_pts_54 = new ol.format.GeoJSON();
var features_kindergarden_iso_300_pts_54 = format_kindergarden_iso_300_pts_54.readFeatures(json_kindergarden_iso_300_pts_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kindergarden_iso_300_pts_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kindergarden_iso_300_pts_54.addFeatures(features_kindergarden_iso_300_pts_54);
var lyr_kindergarden_iso_300_pts_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kindergarden_iso_300_pts_54,
maxResolution:14.00223307613098,
 minResolution:7.00111653806549,

                style: style_kindergarden_iso_300_pts_54,
                popuplayertitle: 'kindergarden_iso_300_pts',
                interactive: true,
    title: 'kindergarden_iso_300_pts<br />\
    <img src="styles/legend/kindergarden_iso_300_pts_54_0.png" /> 0 - 1<br />\
    <img src="styles/legend/kindergarden_iso_300_pts_54_1.png" /> 1 - 30<br />\
    <img src="styles/legend/kindergarden_iso_300_pts_54_2.png" /> 30 - 61<br />\
    <img src="styles/legend/kindergarden_iso_300_pts_54_3.png" /> 61 - 85<br />\
    <img src="styles/legend/kindergarden_iso_300_pts_54_4.png" /> 85 - 11 291<br />' });
var format_KG_BLD_GRD_ISO_50_55 = new ol.format.GeoJSON();
var features_KG_BLD_GRD_ISO_50_55 = format_KG_BLD_GRD_ISO_50_55.readFeatures(json_KG_BLD_GRD_ISO_50_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BLD_GRD_ISO_50_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BLD_GRD_ISO_50_55.addFeatures(features_KG_BLD_GRD_ISO_50_55);
var lyr_KG_BLD_GRD_ISO_50_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BLD_GRD_ISO_50_55,
maxResolution:28.00446615226196,
 minResolution:14.00223307613098,

                style: style_KG_BLD_GRD_ISO_50_55,
                popuplayertitle: 'KG_BLD_GRD_ISO_50',
                interactive: true,
    title: 'KG_BLD_GRD_ISO_50<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_50_55_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_50_55_1.png" /> 1 - 30<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_50_55_2.png" /> 30 - 61<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_50_55_3.png" /> 61 - 85<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_50_55_4.png" /> 85 - 11 291<br />' });
var format_KG_BLD_GRD_ISO_100_56 = new ol.format.GeoJSON();
var features_KG_BLD_GRD_ISO_100_56 = format_KG_BLD_GRD_ISO_100_56.readFeatures(json_KG_BLD_GRD_ISO_100_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_BLD_GRD_ISO_100_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_BLD_GRD_ISO_100_56.addFeatures(features_KG_BLD_GRD_ISO_100_56);
var lyr_KG_BLD_GRD_ISO_100_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_BLD_GRD_ISO_100_56,
maxResolution:56.00893230452392,
 minResolution:28.00446615226196,

                style: style_KG_BLD_GRD_ISO_100_56,
                popuplayertitle: 'KG_BLD_GRD_ISO_100',
                interactive: true,
    title: 'KG_BLD_GRD_ISO_100<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_100_56_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_100_56_1.png" /> 1 - 30<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_100_56_2.png" /> 30 - 61<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_100_56_3.png" /> 61 - 85<br />\
    <img src="styles/legend/KG_BLD_GRD_ISO_100_56_4.png" /> 85 - 11 291<br />' });
var format_KG_ADM_ISO_200_57 = new ol.format.GeoJSON();
var features_KG_ADM_ISO_200_57 = format_KG_ADM_ISO_200_57.readFeatures(json_KG_ADM_ISO_200_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_ADM_ISO_200_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_ADM_ISO_200_57.addFeatures(features_KG_ADM_ISO_200_57);
var lyr_KG_ADM_ISO_200_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_ADM_ISO_200_57,
maxResolution:28004.466152261964,
 minResolution:56.00893230452392,

                style: style_KG_ADM_ISO_200_57,
                popuplayertitle: 'KG_ADM_ISO_200',
                interactive: true,
    title: 'KG_ADM_ISO_200<br />\
    <img src="styles/legend/KG_ADM_ISO_200_57_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KG_ADM_ISO_200_57_1.png" /> 1 - 30<br />\
    <img src="styles/legend/KG_ADM_ISO_200_57_2.png" /> 30 - 61<br />\
    <img src="styles/legend/KG_ADM_ISO_200_57_3.png" /> 61 - 85<br />\
    <img src="styles/legend/KG_ADM_ISO_200_57_4.png" /> 85 - 11 291<br />' });
var format_KG_ISO_25_58 = new ol.format.GeoJSON();
var features_KG_ISO_25_58 = format_KG_ISO_25_58.readFeatures(json_KG_ISO_25_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_ISO_25_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_ISO_25_58.addFeatures(features_KG_ISO_25_58);
var lyr_KG_ISO_25_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_ISO_25_58,
maxResolution:7.00111653806549,
 
                style: style_KG_ISO_25_58,
                popuplayertitle: 'KG_ISO_25',
                interactive: true,
                title: '<img src="styles/legend/KG_ISO_25_58.png" /> KG_ISO_25'
            });
var format_KG_ISO_50_59 = new ol.format.GeoJSON();
var features_KG_ISO_50_59 = format_KG_ISO_50_59.readFeatures(json_KG_ISO_50_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_ISO_50_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_ISO_50_59.addFeatures(features_KG_ISO_50_59);
var lyr_KG_ISO_50_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_ISO_50_59,
maxResolution:28.00446615226196,
 minResolution:7.00111653806549,

                style: style_KG_ISO_50_59,
                popuplayertitle: 'KG_ISO_50',
                interactive: true,
                title: '<img src="styles/legend/KG_ISO_50_59.png" /> KG_ISO_50'
            });
var format_KG_ISO_100_60 = new ol.format.GeoJSON();
var features_KG_ISO_100_60 = format_KG_ISO_100_60.readFeatures(json_KG_ISO_100_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KG_ISO_100_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KG_ISO_100_60.addFeatures(features_KG_ISO_100_60);
var lyr_KG_ISO_100_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KG_ISO_100_60,
maxResolution:2800.4466152261966,
 minResolution:28.00446615226196,

                style: style_KG_ISO_100_60,
                popuplayertitle: 'KG_ISO_100',
                interactive: true,
                title: '<img src="styles/legend/KG_ISO_100_60.png" /> KG_ISO_100'
            });
var lyr_kidergarden_125_61 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kidergarden_1-25<br />\
    <img src="styles/legend/kidergarden_125_61_0.png" /> 0,0000<br />\
    <img src="styles/legend/kidergarden_125_61_1.png" /> 1,6445<br />\
    <img src="styles/legend/kidergarden_125_61_2.png" /> 3,2891<br />\
    <img src="styles/legend/kidergarden_125_61_3.png" /> 4,9336<br />\
    <img src="styles/legend/kidergarden_125_61_4.png" /> 6,5781<br />' ,
        
maxResolution:7.00111653806549,

        
        source: new ol.source.ImageStatic({
            url: "./layers/kidergarden_125_61.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5546541.542385, 7000663.770510, 5608855.821928, 7081074.862281]
        })
    });
var lyr_kidergarden_2550_62 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kidergarden_25-50<br />\
    <img src="styles/legend/kidergarden_2550_62_0.png" /> 0,0000<br />\
    <img src="styles/legend/kidergarden_2550_62_1.png" /> 1,9753<br />\
    <img src="styles/legend/kidergarden_2550_62_2.png" /> 3,9506<br />\
    <img src="styles/legend/kidergarden_2550_62_3.png" /> 5,9259<br />\
    <img src="styles/legend/kidergarden_2550_62_4.png" /> 7,9012<br />' ,
        
maxResolution:14.00223307613098,

        minResolution:7.00111653806549,

        source: new ol.source.ImageStatic({
            url: "./layers/kidergarden_2550_62.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5546285.570033, 7000409.796862, 5609107.326145, 7081329.538436]
        })
    });
var lyr_kidergarden_50100_63 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kidergarden_50-100<br />\
    <img src="styles/legend/kidergarden_50100_63_0.png" /> 0,0000<br />\
    <img src="styles/legend/kidergarden_50100_63_1.png" /> 2,4932<br />\
    <img src="styles/legend/kidergarden_50100_63_2.png" /> 4,9864<br />\
    <img src="styles/legend/kidergarden_50100_63_3.png" /> 7,4795<br />\
    <img src="styles/legend/kidergarden_50100_63_4.png" /> 9,9727<br />' ,
        
maxResolution:28.00446615226196,

        minResolution:14.00223307613098,

        source: new ol.source.ImageStatic({
            url: "./layers/kidergarden_50100_63.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5546029.581699, 7000154.157819, 5609363.816068, 7081584.258601]
        })
    });
var lyr_kidergarden_100_64 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kidergarden_100+<br />\
    <img src="styles/legend/kidergarden_100_64_0.png" /> 0,0000<br />\
    <img src="styles/legend/kidergarden_100_64_1.png" /> 3,0930<br />\
    <img src="styles/legend/kidergarden_100_64_2.png" /> 6,1860<br />\
    <img src="styles/legend/kidergarden_100_64_3.png" /> 9,2790<br />\
    <img src="styles/legend/kidergarden_100_64_4.png" /> 12,3720<br />' ,
        
maxResolution:28004.466152261964,

        minResolution:28.00446615226196,

        source: new ol.source.ImageStatic({
            url: "./layers/kidergarden_100_64.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5545773.577380, 6999891.855690, 5609618.684079, 7081838.964253]
        })
    });
var format_kindergarden_ply_fullkindergarden_pts_full_65 = new ol.format.GeoJSON();
var features_kindergarden_ply_fullkindergarden_pts_full_65 = format_kindergarden_ply_fullkindergarden_pts_full_65.readFeatures(json_kindergarden_ply_fullkindergarden_pts_full_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kindergarden_ply_fullkindergarden_pts_full_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kindergarden_ply_fullkindergarden_pts_full_65.addFeatures(features_kindergarden_ply_fullkindergarden_pts_full_65);
var lyr_kindergarden_ply_fullkindergarden_pts_full_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kindergarden_ply_fullkindergarden_pts_full_65,
maxResolution:7.00111653806549,
 
                style: style_kindergarden_ply_fullkindergarden_pts_full_65,
                popuplayertitle: 'kindergarden_ply_full — kindergarden_pts_full',
                interactive: true,
                title: '<img src="styles/legend/kindergarden_ply_fullkindergarden_pts_full_65.png" /> kindergarden_ply_full — kindergarden_pts_full'
            });
var format_kindergarden_pts_fullkindergarden_plts_full_66 = new ol.format.GeoJSON();
var features_kindergarden_pts_fullkindergarden_plts_full_66 = format_kindergarden_pts_fullkindergarden_plts_full_66.readFeatures(json_kindergarden_pts_fullkindergarden_plts_full_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kindergarden_pts_fullkindergarden_plts_full_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kindergarden_pts_fullkindergarden_plts_full_66.addFeatures(features_kindergarden_pts_fullkindergarden_plts_full_66);
var lyr_kindergarden_pts_fullkindergarden_plts_full_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kindergarden_pts_fullkindergarden_plts_full_66,
maxResolution:2800.4466152261966,
 minResolution:7.00111653806549,

                style: style_kindergarden_pts_fullkindergarden_plts_full_66,
                popuplayertitle: 'kindergarden_pts_full — kindergarden_plts_full',
                interactive: true,
                title: 'kindergarden_pts_full — kindergarden_plts_full'
            });
var group_KG_OBJ = new ol.layer.Group({
                                layers: [lyr_kindergarden_ply_fullkindergarden_pts_full_65,lyr_kindergarden_pts_fullkindergarden_plts_full_66,],
                                fold: 'close',
                                title: 'KG_OBJ'});
var group_KG_IDW_ISO = new ol.layer.Group({
                                layers: [lyr_kidergarden_125_61,lyr_kidergarden_2550_62,lyr_kidergarden_50100_63,lyr_kidergarden_100_64,],
                                fold: 'close',
                                title: 'KG_IDW_ISO'});
var group_KG_ISO = new ol.layer.Group({
                                layers: [lyr_KG_ISO_25_58,lyr_KG_ISO_50_59,lyr_KG_ISO_100_60,],
                                fold: 'close',
                                title: 'KG_ISO'});
var group_KG_MKD_ISO = new ol.layer.Group({
                                layers: [lyr_KG_BLD_ISO_25_53,lyr_kindergarden_iso_300_pts_54,lyr_KG_BLD_GRD_ISO_50_55,lyr_KG_BLD_GRD_ISO_100_56,lyr_KG_ADM_ISO_200_57,],
                                fold: 'close',
                                title: 'KG_MKD_ISO'});
var group_KG_IDW_BUF = new ol.layer.Group({
                                layers: [lyr_kidergarden_125_buf_49,lyr_kidergarden_2550_buf_50,lyr_kidergarden_50100_buf_51,lyr_kidergarden_100_buf_52,],
                                fold: 'close',
                                title: 'KG_IDW_BUF'});
var group_KG_BUF = new ol.layer.Group({
                                layers: [lyr_KG_BUF_25_46,lyr_KG_BUF_50_47,lyr_KG_BUF_100_48,],
                                fold: 'close',
                                title: 'KG_BUF'});
var group_KG_MKD_BUF = new ol.layer.Group({
                                layers: [lyr_KG_BLD_BUF_25_41,lyr_kindergarden_radius_300_ptsresult_42,lyr_KG_BLD_GRD_BUF_50_43,lyr_KG_BLD_GRD_BUF_100_44,lyr_KG_ADM_BUF_200_45,],
                                fold: 'close',
                                title: 'KG_MKD_BUF'});
var group_SCH_OBJ = new ol.layer.Group({
                                layers: [lyr_samara_schools_ply_39,lyr_samara_schools_pts_1_40,],
                                fold: 'close',
                                title: 'SCH_OBJ'});
var group_SCH_IDW_ISO = new ol.layer.Group({
                                layers: [lyr_schools_125_35,lyr_schools_2550_36,lyr_schools_50100_37,lyr_schools_100_38,],
                                fold: 'close',
                                title: 'SCH_IDW_ISO'});
var group_SCH_ISO = new ol.layer.Group({
                                layers: [lyr_SCH_ISO_25_32,lyr_SCH_ISO_50_33,lyr_SCH_ISO_100_34,],
                                fold: 'close',
                                title: 'SCH_ISO'});
var group_SCH_MKD_ISO = new ol.layer.Group({
                                layers: [lyr_SCH_MKD_ISO_25_27,lyr_schools_iso_ptsresult_28,lyr_SCH_BLD_GRD_ISO_50_29,lyr_SCH_BLD_GRD_ISO_100_30,lyr_SCH_ADM_ISO_200_31,],
                                fold: 'open',
                                title: 'SCH_MKD_ISO'});
var group_SCH_IDW_BUF = new ol.layer.Group({
                                layers: [lyr_schools_125_buf_23,lyr_schools_2550_buf_24,lyr_schools_50100_buf_25,lyr_schools_100_buf_26,],
                                fold: 'close',
                                title: 'SCH_IDW_BUF'});
var group_SCH_BUF = new ol.layer.Group({
                                layers: [lyr_SCH_BUF_25_20,lyr_SCH_BUF_50_21,lyr_SCH_BUF_100_22,],
                                fold: 'close',
                                title: 'SCH_BUF'});
var group_SCH_MKD_BUF = new ol.layer.Group({
                                layers: [lyr_SCH_MKD_BUF_25_15,lyr_schools_buffers_500_ptsresult_16,lyr_SCH_BLD_GRD_BUF_50_17,lyr_SCH_BLD_GRD_BUF_100_18,lyr_SCH_ADM_BUF_200_19,],
                                fold: 'open',
                                title: 'SCH_MKD_BUF'});
var group_MKD = new ol.layer.Group({
                                layers: [lyr_BLD_25_10,lyr_mkd_ptsmerged_11,lyr_MKD_BLD_GRD_50_12,lyr_BLD_GRD_100_13,lyr_admin_popul_200_14,],
                                fold: 'close',
                                title: 'MKD'});
var group_basemap = new ol.layer.Group({
                                layers: [lyr_background_3,lyr_nature_park_4,lyr_natural_5,lyr_waterway_6,lyr_roads_7,lyr_rail_tram_8,lyr_city_9,],
                                fold: 'open',
                                title: 'basemap'});
var group_Build = new ol.layer.Group({
                                layers: [lyr_buildings_clear_0,lyr_landuse_25200_1,lyr_admin_level_2,],
                                fold: 'close',
                                title: 'Build'});

lyr_buildings_clear_0.setVisible(true);lyr_landuse_25200_1.setVisible(true);lyr_admin_level_2.setVisible(true);lyr_background_3.setVisible(true);lyr_nature_park_4.setVisible(true);lyr_natural_5.setVisible(true);lyr_waterway_6.setVisible(true);lyr_roads_7.setVisible(true);lyr_rail_tram_8.setVisible(true);lyr_city_9.setVisible(true);lyr_BLD_25_10.setVisible(true);lyr_mkd_ptsmerged_11.setVisible(true);lyr_MKD_BLD_GRD_50_12.setVisible(true);lyr_BLD_GRD_100_13.setVisible(true);lyr_admin_popul_200_14.setVisible(true);lyr_SCH_MKD_BUF_25_15.setVisible(true);lyr_schools_buffers_500_ptsresult_16.setVisible(true);lyr_SCH_BLD_GRD_BUF_50_17.setVisible(true);lyr_SCH_BLD_GRD_BUF_100_18.setVisible(true);lyr_SCH_ADM_BUF_200_19.setVisible(true);lyr_SCH_BUF_25_20.setVisible(true);lyr_SCH_BUF_50_21.setVisible(true);lyr_SCH_BUF_100_22.setVisible(true);lyr_schools_125_buf_23.setVisible(true);lyr_schools_2550_buf_24.setVisible(true);lyr_schools_50100_buf_25.setVisible(true);lyr_schools_100_buf_26.setVisible(true);lyr_SCH_MKD_ISO_25_27.setVisible(true);lyr_schools_iso_ptsresult_28.setVisible(true);lyr_SCH_BLD_GRD_ISO_50_29.setVisible(true);lyr_SCH_BLD_GRD_ISO_100_30.setVisible(true);lyr_SCH_ADM_ISO_200_31.setVisible(true);lyr_SCH_ISO_25_32.setVisible(true);lyr_SCH_ISO_50_33.setVisible(true);lyr_SCH_ISO_100_34.setVisible(true);lyr_schools_125_35.setVisible(true);lyr_schools_2550_36.setVisible(true);lyr_schools_50100_37.setVisible(true);lyr_schools_100_38.setVisible(true);lyr_samara_schools_ply_39.setVisible(true);lyr_samara_schools_pts_1_40.setVisible(true);lyr_KG_BLD_BUF_25_41.setVisible(true);lyr_kindergarden_radius_300_ptsresult_42.setVisible(true);lyr_KG_BLD_GRD_BUF_50_43.setVisible(true);lyr_KG_BLD_GRD_BUF_100_44.setVisible(true);lyr_KG_ADM_BUF_200_45.setVisible(true);lyr_KG_BUF_25_46.setVisible(true);lyr_KG_BUF_50_47.setVisible(true);lyr_KG_BUF_100_48.setVisible(true);lyr_kidergarden_125_buf_49.setVisible(true);lyr_kidergarden_2550_buf_50.setVisible(true);lyr_kidergarden_50100_buf_51.setVisible(true);lyr_kidergarden_100_buf_52.setVisible(true);lyr_KG_BLD_ISO_25_53.setVisible(true);lyr_kindergarden_iso_300_pts_54.setVisible(true);lyr_KG_BLD_GRD_ISO_50_55.setVisible(true);lyr_KG_BLD_GRD_ISO_100_56.setVisible(true);lyr_KG_ADM_ISO_200_57.setVisible(true);lyr_KG_ISO_25_58.setVisible(true);lyr_KG_ISO_50_59.setVisible(true);lyr_KG_ISO_100_60.setVisible(true);lyr_kidergarden_125_61.setVisible(true);lyr_kidergarden_2550_62.setVisible(true);lyr_kidergarden_50100_63.setVisible(true);lyr_kidergarden_100_64.setVisible(true);lyr_kindergarden_ply_fullkindergarden_pts_full_65.setVisible(true);lyr_kindergarden_pts_fullkindergarden_plts_full_66.setVisible(true);
var layersList = [group_Build,group_basemap,group_MKD,group_SCH_MKD_BUF,group_SCH_BUF,group_SCH_IDW_BUF,group_SCH_MKD_ISO,group_SCH_ISO,group_SCH_IDW_ISO,group_SCH_OBJ,group_KG_MKD_BUF,group_KG_BUF,group_KG_IDW_BUF,group_KG_MKD_ISO,group_KG_ISO,group_KG_IDW_ISO,group_KG_OBJ];
lyr_buildings_clear_0.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Адрес ОЖФ': 'Адрес ОЖФ', 'Идентификационный код адреса дома в ГИС ЖКХ': 'Идентификационный код адреса дома в ГИС ЖКХ', 'Глобальный уникальный идентификатор дома по ФИАС': 'Глобальный уникальный идентификатор дома по ФИАС', 'Код ОКТМО': 'Код ОКТМО', 'Способ управления': 'Способ управления', 'ОГРН организации, осуществляющей управление домом': 'ОГРН организации, осуществляющей управление домом', 'КПП организации, осуществляющей управление домом': 'КПП организации, осуществляющей управление домом', 'Наименование организации, осуществляющей управление домом': 'Наименование организации, осуществляющей управление домом', 'Тип дома': 'Тип дома', 'Состояние': 'Состояние', 'Общая площадь дома': 'Общая площадь дома', 'Жилая площадь в доме': 'Жилая площадь в доме', 'Дом находится в собственности субъекта Российской Федерации и в полном объеме используется в качестве общежития': 'Дом находится в собственности субъекта Российской Федерации и в полном объеме используется в качестве общежития', 'Дом находится в муниципальной собственности и в полном объеме используется в качестве общежития': 'Дом находится в муниципальной собственности и в полном объеме используется в качестве общежития', 'Тип общежития': 'Тип общежития', 'Тип помещения (блока)': 'Тип помещения (блока)', 'Дата сноса объекта': 'Дата сноса объекта', 'Кадастровый номер': 'Кадастровый номер', 'Глобальный уникальный идентификатор дома': 'Глобальный уникальный идентификатор дома', 'Глобальный уникальный идентификатор помещения': 'Глобальный уникальный идентификатор помещения', 'Глобальный уникальный идентификатор комнаты': 'Глобальный уникальный идентификатор комнаты', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'layer': 'layer', 'path': 'path', 'popul': 'popul', });
lyr_landuse_25200_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'landuse': 'landuse', });
lyr_admin_level_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'admin_level': 'admin_level', 'name': 'name', });
lyr_background_3.set('fieldAliases', {'fid': 'fid', });
lyr_nature_park_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'leisure': 'leisure', });
lyr_natural_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'natural': 'natural', 'area': 'area', });
lyr_waterway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'waterway': 'waterway', 'name': 'name', });
lyr_roads_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'highway': 'highway', });
lyr_rail_tram_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'railway': 'railway', 'usage': 'usage', });
lyr_city_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'place': 'place', 'name': 'name', });
lyr_BLD_25_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'Адрес ОЖФ': 'Адрес ОЖФ', 'Общая площадь дома': 'Общая площадь дома', 'Жилая площадь в доме': 'Жилая площадь в доме', 'longitude': 'longitude', 'latitude': 'latitude', 'popul': 'popul', 'popul_2': 'popul_2', });
lyr_mkd_ptsmerged_11.set('fieldAliases', {'fid': 'fid', 'Адрес ОЖФ': 'Адрес ОЖФ', 'popul': 'popul', });
lyr_MKD_BLD_GRD_50_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'popul_sum': 'popul_sum', });
lyr_BLD_GRD_100_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'popul_sum': 'popul_sum', });
lyr_admin_popul_200_14.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'admin_level': 'admin_level', 'name': 'name', 'popul_sum': 'popul_sum', });
lyr_SCH_MKD_BUF_25_15.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'Адрес ОЖФ': 'Адрес ОЖФ', 'popul_2': 'popul_2', 'f9': 'f9', 'result': 'result', 'result_per_1000': 'result_per_1000', });
lyr_schools_buffers_500_ptsresult_16.set('fieldAliases', {'fid': 'fid', 'Адрес ОЖФ': 'Адрес ОЖФ', 'popul': 'popul', 'f9': 'f9', 'result': 'result', 'result_per_1000': 'result_per_1000', });
lyr_SCH_BLD_GRD_BUF_50_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_SCH_BLD_GRD_BUF_100_18.set('fieldAliases', {'fid': 'fid', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_SCH_ADM_BUF_200_19.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'admin_level': 'admin_level', 'name': 'name', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_SCH_BUF_25_20.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'name': 'name', '
district': '
district', 'site_address': 'site_address', 'area': 'area', 'full_area': 'full_area', 'capacity': 'capacity', 'capacity_2': 'capacity_2', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_SCH_BUF_50_21.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'name': 'name', '
district': '
district', 'site_address': 'site_address', 'area': 'area', 'full_area': 'full_area', 'capacity': 'capacity', 'capacity_2': 'capacity_2', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_SCH_BUF_100_22.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'name': 'name', '
district': '
district', 'site_address': 'site_address', 'area': 'area', 'full_area': 'full_area', 'capacity': 'capacity', 'capacity_2': 'capacity_2', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_SCH_MKD_ISO_25_27.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'popul': 'popul', 'result_per_1000': 'result_per_1000', });
lyr_schools_iso_ptsresult_28.set('fieldAliases', {'fid': 'fid', 'Адрес ОЖФ': 'Адрес ОЖФ', 'popul': 'popul', 'f9': 'f9', 'result': 'result', 'result_per_1000': 'result_per_1000', });
lyr_SCH_BLD_GRD_ISO_50_29.set('fieldAliases', {'fid': 'fid', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_SCH_BLD_GRD_ISO_100_30.set('fieldAliases', {'fid': 'fid', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_SCH_ADM_ISO_200_31.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'admin_level': 'admin_level', 'name': 'name', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_SCH_ISO_25_32.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'perimeter': 'perimeter', 'capacity': 'capacity', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_SCH_ISO_50_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'perimeter': 'perimeter', 'capacity': 'capacity', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_SCH_ISO_100_34.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'perimeter': 'perimeter', 'capacity': 'capacity', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_samara_schools_ply_39.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'name': 'name', '
district': '
district', 'site_address': 'site_address', 'area': 'area', 'full_area': 'full_area', 'capacity': 'capacity', });
lyr_samara_schools_pts_1_40.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'name': 'name', '
district': '
district', 'site_address': 'site_address', 'area': 'area', 'full_area': 'full_area', 'capacity': 'capacity', });
lyr_KG_BLD_BUF_25_41.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'popul': 'popul', 'result_per_1000': 'result_per_1000', });
lyr_kindergarden_radius_300_ptsresult_42.set('fieldAliases', {'fid': 'fid', 'Адрес ОЖФ': 'Адрес ОЖФ', 'popul': 'popul', 'f9': 'f9', 'result': 'result', 'result_per_1000': 'result_per_1000', });
lyr_KG_BLD_GRD_BUF_50_43.set('fieldAliases', {'fid': 'fid', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_KG_BLD_GRD_BUF_100_44.set('fieldAliases', {'fid': 'fid', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_KG_ADM_BUF_200_45.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'admin_level': 'admin_level', 'name': 'name', 'result_per_1000_sum': 'result_per_1000_sum', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_KG_BUF_25_46.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'building:levels': 'building:levels', 'Район': 'Район', 'Наименование': 'Наименование', 'Адрес': 'Адрес', 'Телефоны': 'Телефоны', 'Сайт': 'Сайт', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'areaa': 'areaa', 'floors': 'floors', 'total_area': 'total_area', 'capacity': 'capacity', 'capacity_2': 'capacity_2', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_KG_BUF_50_47.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'building:levels': 'building:levels', 'Район': 'Район', 'Наименование': 'Наименование', 'Адрес': 'Адрес', 'Телефоны': 'Телефоны', 'Сайт': 'Сайт', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'areaa': 'areaa', 'floors': 'floors', 'total_area': 'total_area', 'capacity': 'capacity', 'capacity_2': 'capacity_2', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_KG_BUF_100_48.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'building:levels': 'building:levels', 'Район': 'Район', 'Наименование': 'Наименование', 'Адрес': 'Адрес', 'Телефоны': 'Телефоны', 'Сайт': 'Сайт', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'areaa': 'areaa', 'floors': 'floors', 'total_area': 'total_area', 'capacity': 'capacity', 'capacity_2': 'capacity_2', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_KG_BLD_ISO_25_53.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'popul': 'popul', 'result_per_1000': 'result_per_1000', });
lyr_kindergarden_iso_300_pts_54.set('fieldAliases', {'fid': 'fid', 'Адрес ОЖФ': 'Адрес ОЖФ', 'popul': 'popul', 'f9': 'f9', 'result': 'result', 'result_per_1000': 'result_per_1000', });
lyr_KG_BLD_GRD_ISO_50_55.set('fieldAliases', {'fid': 'fid', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_KG_BLD_GRD_ISO_100_56.set('fieldAliases', {'fid': 'fid', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_KG_ADM_ISO_200_57.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'admin_level': 'admin_level', 'name': 'name', 'result_per_1000_sum': 'result_per_1000_sum', 'result_per_1000_mean': 'result_per_1000_mean', });
lyr_KG_ISO_25_58.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'perimeter': 'perimeter', 'capacity': 'capacity', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_KG_ISO_50_59.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'perimeter': 'perimeter', 'capacity': 'capacity', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_KG_ISO_100_60.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'perimeter': 'perimeter', 'capacity': 'capacity', 'f2': 'f2', 'f3': 'f3', 'f4.1': 'f4.1', 'f5': 'f5', 'f7': 'f7', 'f8': 'f8', });
lyr_kindergarden_ply_fullkindergarden_pts_full_65.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'building:levels': 'building:levels', 'Район': 'Район', 'Наименование': 'Наименование', 'Адрес': 'Адрес', 'Телефоны': 'Телефоны', 'Сайт': 'Сайт', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'areaa': 'areaa', 'floors': 'floors', 'total_area': 'total_area', 'capacity': 'capacity', });
lyr_kindergarden_pts_fullkindergarden_plts_full_66.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'building:levels': 'building:levels', 'Район': 'Район', 'Наименование': 'Наименование', 'Адрес': 'Адрес', 'Телефоны': 'Телефоны', 'Сайт': 'Сайт', 'search_address': 'search_address', 'longitude': 'longitude', 'latitude': 'latitude', 'areaa': 'areaa', 'floors': 'floors', 'total_area': 'total_area', 'capacity': 'capacity', });
lyr_buildings_clear_0.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'Адрес ОЖФ': 'TextEdit', 'Идентификационный код адреса дома в ГИС ЖКХ': 'TextEdit', 'Глобальный уникальный идентификатор дома по ФИАС': 'TextEdit', 'Код ОКТМО': 'TextEdit', 'Способ управления': 'TextEdit', 'ОГРН организации, осуществляющей управление домом': 'TextEdit', 'КПП организации, осуществляющей управление домом': 'TextEdit', 'Наименование организации, осуществляющей управление домом': 'TextEdit', 'Тип дома': 'TextEdit', 'Состояние': 'TextEdit', 'Общая площадь дома': 'TextEdit', 'Жилая площадь в доме': 'TextEdit', 'Дом находится в собственности субъекта Российской Федерации и в полном объеме используется в качестве общежития': 'TextEdit', 'Дом находится в муниципальной собственности и в полном объеме используется в качестве общежития': 'TextEdit', 'Тип общежития': 'TextEdit', 'Тип помещения (блока)': 'TextEdit', 'Дата сноса объекта': 'DateTime', 'Кадастровый номер': 'TextEdit', 'Глобальный уникальный идентификатор дома': 'TextEdit', 'Глобальный уникальный идентификатор помещения': 'TextEdit', 'Глобальный уникальный идентификатор комнаты': 'TextEdit', 'search_address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'popul': 'TextEdit', });
lyr_landuse_25200_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'landuse': 'TextEdit', });
lyr_admin_level_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'admin_level': 'TextEdit', 'name': 'TextEdit', });
lyr_background_3.set('fieldImages', {'fid': '', });
lyr_nature_park_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'leisure': 'TextEdit', });
lyr_natural_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'natural': 'TextEdit', 'area': '', });
lyr_waterway_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'waterway': 'TextEdit', 'name': 'TextEdit', });
lyr_roads_7.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'highway': 'TextEdit', });
lyr_rail_tram_8.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'railway': 'TextEdit', 'usage': 'TextEdit', });
lyr_city_9.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'place': 'TextEdit', 'name': 'TextEdit', });
lyr_BLD_25_10.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'Адрес ОЖФ': 'TextEdit', 'Общая площадь дома': 'TextEdit', 'Жилая площадь в доме': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'popul': 'TextEdit', 'popul_2': 'TextEdit', });
lyr_mkd_ptsmerged_11.set('fieldImages', {'fid': 'TextEdit', 'Адрес ОЖФ': 'TextEdit', 'popul': 'TextEdit', });
lyr_MKD_BLD_GRD_50_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'popul_sum': 'TextEdit', });
lyr_BLD_GRD_100_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'popul_sum': 'TextEdit', });
lyr_admin_popul_200_14.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'admin_level': 'TextEdit', 'name': 'TextEdit', 'popul_sum': 'TextEdit', });
lyr_SCH_MKD_BUF_25_15.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'Адрес ОЖФ': 'TextEdit', 'popul_2': 'TextEdit', 'f9': 'TextEdit', 'result': 'TextEdit', 'result_per_1000': 'TextEdit', });
lyr_schools_buffers_500_ptsresult_16.set('fieldImages', {'fid': 'TextEdit', 'Адрес ОЖФ': 'TextEdit', 'popul': 'TextEdit', 'f9': 'TextEdit', 'result': 'TextEdit', 'result_per_1000': 'TextEdit', });
lyr_SCH_BLD_GRD_BUF_50_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_SCH_BLD_GRD_BUF_100_18.set('fieldImages', {'fid': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_SCH_ADM_BUF_200_19.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'admin_level': 'TextEdit', 'name': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_SCH_BUF_25_20.set('fieldImages', {'fid': 'TextEdit', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building:levels': '', 'addr:street': '', 'addr:housenumber': '', 'search_address': '', 'longitude': '', 'latitude': '', 'name': '', '
district': '', 'site_address': '', 'area': 'TextEdit', 'full_area': '', 'capacity': 'TextEdit', 'capacity_2': '', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_SCH_BUF_50_21.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'search_address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'name': 'TextEdit', '
district': 'TextEdit', 'site_address': 'TextEdit', 'area': 'TextEdit', 'full_area': 'Range', 'capacity': 'TextEdit', 'capacity_2': 'Range', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_SCH_BUF_100_22.set('fieldImages', {'fid': 'TextEdit', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building:levels': '', 'addr:street': '', 'addr:housenumber': '', 'search_address': '', 'longitude': '', 'latitude': '', 'name': '', '
district': '', 'site_address': '', 'area': 'TextEdit', 'full_area': '', 'capacity': 'TextEdit', 'capacity_2': '', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_SCH_MKD_ISO_25_27.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'popul': 'TextEdit', 'result_per_1000': 'TextEdit', });
lyr_schools_iso_ptsresult_28.set('fieldImages', {'fid': 'TextEdit', 'Адрес ОЖФ': 'TextEdit', 'popul': 'TextEdit', 'f9': 'TextEdit', 'result': 'TextEdit', 'result_per_1000': 'TextEdit', });
lyr_SCH_BLD_GRD_ISO_50_29.set('fieldImages', {'fid': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_SCH_BLD_GRD_ISO_100_30.set('fieldImages', {'fid': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_SCH_ADM_ISO_200_31.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'admin_level': 'TextEdit', 'name': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_SCH_ISO_25_32.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'capacity': 'TextEdit', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_SCH_ISO_50_33.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'capacity': 'TextEdit', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_SCH_ISO_100_34.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'capacity': 'TextEdit', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_samara_schools_ply_39.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'search_address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'name': 'TextEdit', '
district': 'TextEdit', 'site_address': 'TextEdit', 'area': 'Range', 'full_area': 'Range', 'capacity': 'TextEdit', });
lyr_samara_schools_pts_1_40.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'search_address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'name': 'TextEdit', '
district': 'TextEdit', 'site_address': 'TextEdit', 'area': 'Range', 'full_area': 'Range', 'capacity': 'TextEdit', });
lyr_KG_BLD_BUF_25_41.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'popul': 'TextEdit', 'result_per_1000': 'TextEdit', });
lyr_kindergarden_radius_300_ptsresult_42.set('fieldImages', {'fid': 'TextEdit', 'Адрес ОЖФ': 'TextEdit', 'popul': 'TextEdit', 'f9': 'TextEdit', 'result': 'TextEdit', 'result_per_1000': 'TextEdit', });
lyr_KG_BLD_GRD_BUF_50_43.set('fieldImages', {'fid': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_KG_BLD_GRD_BUF_100_44.set('fieldImages', {'fid': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_KG_ADM_BUF_200_45.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'admin_level': 'TextEdit', 'name': 'TextEdit', 'result_per_1000_sum': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_KG_BUF_25_46.set('fieldImages', {'fid': 'TextEdit', 'osm_id': '', 'building:levels': '', 'Район': '', 'Наименование': '', 'Адрес': '', 'Телефоны': '', 'Сайт': '', 'search_address': '', 'longitude': '', 'latitude': '', 'areaa': '', 'floors': '', 'total_area': '', 'capacity': 'TextEdit', 'capacity_2': '', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_KG_BUF_50_47.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'building:levels': 'TextEdit', 'Район': 'TextEdit', 'Наименование': 'TextEdit', 'Адрес': 'TextEdit', 'Телефоны': 'TextEdit', 'Сайт': 'TextEdit', 'search_address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'areaa': 'TextEdit', 'floors': 'Range', 'total_area': 'TextEdit', 'capacity': 'TextEdit', 'capacity_2': 'TextEdit', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_KG_BUF_100_48.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'building:levels': 'TextEdit', 'Район': 'TextEdit', 'Наименование': 'TextEdit', 'Адрес': 'TextEdit', 'Телефоны': 'TextEdit', 'Сайт': 'TextEdit', 'search_address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'areaa': 'TextEdit', 'floors': 'Range', 'total_area': 'TextEdit', 'capacity': 'TextEdit', 'capacity_2': 'TextEdit', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_KG_BLD_ISO_25_53.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'popul': 'TextEdit', 'result_per_1000': 'TextEdit', });
lyr_kindergarden_iso_300_pts_54.set('fieldImages', {'fid': 'TextEdit', 'Адрес ОЖФ': 'TextEdit', 'popul': 'TextEdit', 'f9': 'TextEdit', 'result': 'TextEdit', 'result_per_1000': 'TextEdit', });
lyr_KG_BLD_GRD_ISO_50_55.set('fieldImages', {'fid': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_KG_BLD_GRD_ISO_100_56.set('fieldImages', {'fid': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_KG_ADM_ISO_200_57.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'admin_level': 'TextEdit', 'name': 'TextEdit', 'result_per_1000_sum': 'TextEdit', 'result_per_1000_mean': 'TextEdit', });
lyr_KG_ISO_25_58.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'capacity': 'TextEdit', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_KG_ISO_50_59.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'capacity': 'TextEdit', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_KG_ISO_100_60.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'capacity': 'TextEdit', 'f2': 'TextEdit', 'f3': 'TextEdit', 'f4.1': 'TextEdit', 'f5': 'TextEdit', 'f7': 'TextEdit', 'f8': 'TextEdit', });
lyr_kindergarden_ply_fullkindergarden_pts_full_65.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'building:levels': 'TextEdit', 'Район': 'TextEdit', 'Наименование': 'TextEdit', 'Адрес': 'TextEdit', 'Телефоны': 'TextEdit', 'Сайт': 'TextEdit', 'search_address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'areaa': 'TextEdit', 'floors': 'Range', 'total_area': 'TextEdit', 'capacity': 'TextEdit', });
lyr_kindergarden_pts_fullkindergarden_plts_full_66.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'building:levels': 'TextEdit', 'Район': 'TextEdit', 'Наименование': 'TextEdit', 'Адрес': 'TextEdit', 'Телефоны': 'TextEdit', 'Сайт': 'TextEdit', 'search_address': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'areaa': 'TextEdit', 'floors': 'Range', 'total_area': 'TextEdit', 'capacity': 'TextEdit', });
lyr_buildings_clear_0.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'Адрес ОЖФ': 'no label', 'Идентификационный код адреса дома в ГИС ЖКХ': 'no label', 'Глобальный уникальный идентификатор дома по ФИАС': 'no label', 'Код ОКТМО': 'no label', 'Способ управления': 'no label', 'ОГРН организации, осуществляющей управление домом': 'no label', 'КПП организации, осуществляющей управление домом': 'no label', 'Наименование организации, осуществляющей управление домом': 'no label', 'Тип дома': 'no label', 'Состояние': 'no label', 'Общая площадь дома': 'no label', 'Жилая площадь в доме': 'no label', 'Дом находится в собственности субъекта Российской Федерации и в полном объеме используется в качестве общежития': 'no label', 'Дом находится в муниципальной собственности и в полном объеме используется в качестве общежития': 'no label', 'Тип общежития': 'no label', 'Тип помещения (блока)': 'no label', 'Дата сноса объекта': 'no label', 'Кадастровый номер': 'no label', 'Глобальный уникальный идентификатор дома': 'no label', 'Глобальный уникальный идентификатор помещения': 'no label', 'Глобальный уникальный идентификатор комнаты': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'layer': 'no label', 'path': 'no label', 'popul': 'no label', });
lyr_landuse_25200_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'landuse': 'no label', });
lyr_admin_level_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'admin_level': 'no label', 'name': 'no label', });
lyr_background_3.set('fieldLabels', {'fid': 'no label', });
lyr_nature_park_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'leisure': 'no label', });
lyr_natural_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'natural': 'no label', 'area': 'no label', });
lyr_waterway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'waterway': 'no label', 'name': 'no label', });
lyr_roads_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'highway': 'no label', });
lyr_rail_tram_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'railway': 'no label', 'usage': 'no label', });
lyr_city_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'place': 'no label', 'name': 'no label', });
lyr_BLD_25_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'Адрес ОЖФ': 'no label', 'Общая площадь дома': 'no label', 'Жилая площадь в доме': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'popul': 'no label', 'popul_2': 'no label', });
lyr_mkd_ptsmerged_11.set('fieldLabels', {'fid': 'no label', 'Адрес ОЖФ': 'no label', 'popul': 'no label', });
lyr_MKD_BLD_GRD_50_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'popul_sum': 'no label', });
lyr_BLD_GRD_100_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'popul_sum': 'no label', });
lyr_admin_popul_200_14.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'admin_level': 'no label', 'name': 'no label', 'popul_sum': 'no label', });
lyr_SCH_MKD_BUF_25_15.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'Адрес ОЖФ': 'no label', 'popul_2': 'no label', 'f9': 'no label', 'result': 'no label', 'result_per_1000': 'no label', });
lyr_schools_buffers_500_ptsresult_16.set('fieldLabels', {'fid': 'no label', 'Адрес ОЖФ': 'no label', 'popul': 'no label', 'f9': 'no label', 'result': 'no label', 'result_per_1000': 'no label', });
lyr_SCH_BLD_GRD_BUF_50_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'result_per_1000_mean': 'no label', });
lyr_SCH_BLD_GRD_BUF_100_18.set('fieldLabels', {'fid': 'no label', 'result_per_1000_mean': 'no label', });
lyr_SCH_ADM_BUF_200_19.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'admin_level': 'no label', 'name': 'no label', 'result_per_1000_mean': 'no label', });
lyr_SCH_BUF_25_20.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'name': 'no label', '
district': 'no label', 'site_address': 'no label', 'area': 'no label', 'full_area': 'no label', 'capacity': 'no label', 'capacity_2': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_SCH_BUF_50_21.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'name': 'no label', '
district': 'no label', 'site_address': 'no label', 'area': 'no label', 'full_area': 'no label', 'capacity': 'no label', 'capacity_2': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_SCH_BUF_100_22.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'name': 'no label', '
district': 'no label', 'site_address': 'no label', 'area': 'no label', 'full_area': 'no label', 'capacity': 'no label', 'capacity_2': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_SCH_MKD_ISO_25_27.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'popul': 'no label', 'result_per_1000': 'no label', });
lyr_schools_iso_ptsresult_28.set('fieldLabels', {'fid': 'no label', 'Адрес ОЖФ': 'no label', 'popul': 'no label', 'f9': 'no label', 'result': 'no label', 'result_per_1000': 'no label', });
lyr_SCH_BLD_GRD_ISO_50_29.set('fieldLabels', {'fid': 'no label', 'result_per_1000_mean': 'no label', });
lyr_SCH_BLD_GRD_ISO_100_30.set('fieldLabels', {'fid': 'no label', 'result_per_1000_mean': 'no label', });
lyr_SCH_ADM_ISO_200_31.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'admin_level': 'no label', 'name': 'no label', 'result_per_1000_mean': 'no label', });
lyr_SCH_ISO_25_32.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'perimeter': 'no label', 'capacity': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_SCH_ISO_50_33.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'perimeter': 'no label', 'capacity': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_SCH_ISO_100_34.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'perimeter': 'no label', 'capacity': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_samara_schools_ply_39.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'name': 'no label', '
district': 'no label', 'site_address': 'no label', 'area': 'no label', 'full_area': 'no label', 'capacity': 'no label', });
lyr_samara_schools_pts_1_40.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'name': 'no label', '
district': 'no label', 'site_address': 'no label', 'area': 'no label', 'full_area': 'no label', 'capacity': 'no label', });
lyr_KG_BLD_BUF_25_41.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'popul': 'no label', 'result_per_1000': 'no label', });
lyr_kindergarden_radius_300_ptsresult_42.set('fieldLabels', {'fid': 'no label', 'Адрес ОЖФ': 'no label', 'popul': 'no label', 'f9': 'no label', 'result': 'no label', 'result_per_1000': 'no label', });
lyr_KG_BLD_GRD_BUF_50_43.set('fieldLabels', {'fid': 'no label', 'result_per_1000_mean': 'no label', });
lyr_KG_BLD_GRD_BUF_100_44.set('fieldLabels', {'fid': 'no label', 'result_per_1000_mean': 'no label', });
lyr_KG_ADM_BUF_200_45.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'admin_level': 'no label', 'name': 'no label', 'result_per_1000_sum': 'no label', 'result_per_1000_mean': 'no label', });
lyr_KG_BUF_25_46.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'building:levels': 'no label', 'Район': 'no label', 'Наименование': 'no label', 'Адрес': 'no label', 'Телефоны': 'no label', 'Сайт': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'areaa': 'no label', 'floors': 'no label', 'total_area': 'no label', 'capacity': 'no label', 'capacity_2': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_KG_BUF_50_47.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'building:levels': 'no label', 'Район': 'no label', 'Наименование': 'no label', 'Адрес': 'no label', 'Телефоны': 'no label', 'Сайт': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'areaa': 'no label', 'floors': 'no label', 'total_area': 'no label', 'capacity': 'no label', 'capacity_2': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_KG_BUF_100_48.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'building:levels': 'no label', 'Район': 'no label', 'Наименование': 'no label', 'Адрес': 'no label', 'Телефоны': 'no label', 'Сайт': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'areaa': 'no label', 'floors': 'no label', 'total_area': 'no label', 'capacity': 'no label', 'capacity_2': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_KG_BLD_ISO_25_53.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'popul': 'no label', 'result_per_1000': 'no label', });
lyr_kindergarden_iso_300_pts_54.set('fieldLabels', {'fid': 'no label', 'Адрес ОЖФ': 'no label', 'popul': 'no label', 'f9': 'no label', 'result': 'no label', 'result_per_1000': 'no label', });
lyr_KG_BLD_GRD_ISO_50_55.set('fieldLabels', {'fid': 'no label', 'result_per_1000_mean': 'no label', });
lyr_KG_BLD_GRD_ISO_100_56.set('fieldLabels', {'fid': 'no label', 'result_per_1000_mean': 'no label', });
lyr_KG_ADM_ISO_200_57.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'admin_level': 'no label', 'name': 'no label', 'result_per_1000_sum': 'no label', 'result_per_1000_mean': 'no label', });
lyr_KG_ISO_25_58.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'perimeter': 'no label', 'capacity': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_KG_ISO_50_59.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'perimeter': 'no label', 'capacity': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_KG_ISO_100_60.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'perimeter': 'no label', 'capacity': 'no label', 'f2': 'no label', 'f3': 'no label', 'f4.1': 'no label', 'f5': 'no label', 'f7': 'no label', 'f8': 'no label', });
lyr_kindergarden_ply_fullkindergarden_pts_full_65.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'building:levels': 'no label', 'Район': 'no label', 'Наименование': 'no label', 'Адрес': 'no label', 'Телефоны': 'no label', 'Сайт': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'areaa': 'no label', 'floors': 'no label', 'total_area': 'no label', 'capacity': 'no label', });
lyr_kindergarden_pts_fullkindergarden_plts_full_66.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'building:levels': 'no label', 'Район': 'no label', 'Наименование': 'no label', 'Адрес': 'no label', 'Телефоны': 'no label', 'Сайт': 'no label', 'search_address': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'areaa': 'no label', 'floors': 'no label', 'total_area': 'no label', 'capacity': 'no label', });
lyr_kindergarden_pts_fullkindergarden_plts_full_66.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
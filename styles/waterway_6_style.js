var size = 0;
var placement = 'point';

var style_waterway_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "6.5px \'Open Sans\', sans-serif";
    var labelFill = "#7bcad5";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("name") !== null && resolution > 0 && resolution < 56) {
        labelText = String(feature.get("name"));
    }
    
        function rules_waterway_6(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_waterway_6rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(209,230,233,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_waterway_6(feature, value);
        ;

    return style;
};

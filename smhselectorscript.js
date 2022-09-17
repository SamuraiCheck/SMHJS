


$("#bedroom-range, #bathroom-range, #square-feet-range").on( "slidestart", function( event, ui ) { 
  $("body").css('cursor', 'grabbing');
  $(".ui-widget.ui-widget-content").css('cursor', 'grabbing');
} );
$( "#bedroom-range, #bathroom-range, #square-feet-range" )
.on( "slidestop", function( event, ui ) { 
  $("body").css('cursor', 'auto');
  $(".ui-widget.ui-widget-content").css('cursor', 'pointer');
} );


// FILTER DEFAULTS BEGIN--------------------------------------------	
  $( "#bedroom-range" ).slider({
  max: 5,
  min: 1,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value +"+");
  },
 
  create: function(event, ui) {
            var v=$(this).slider('value');
            $(this).find('.ui-slider-handle').text(v +"+");
  } 
});

// ARROWS FUNCTIONALITY
$("#bedrooms-next").click(function(){var e=$("#bedroom-range").slider("option","max"),o=$("#bedroom-range").slider("option","value")+1;o<=e&&($("#bedroom-range").slider("value",o),$("#bedroom-range").find(".ui-slider-handle").text(o+"+"))}),$("#bedrooms-prev").click(function(){var e=$("#bedroom-range").slider("option","min"),o=$("#bedroom-range").slider("option","value")-1;e<=o&&($("#bedroom-range").slider("value",o),$("#bedroom-range").find(".ui-slider-handle").text(o+"+"))});
//ARROWS FUNCTIONALITY END


  $( "#bathroom-range" ).slider({
  max: 4,
  min: 1,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value +"+");
  },
  create: function(event, ui) {
            var v=$(this).slider('value');
            $(this).find('.ui-slider-handle').text(v +"+");
  } 
});

// ARROWS FUNCTIONALITY
$("#bathrooms-next").click(function(){var maxValue=$("#bathroom-range").slider("option","max");var value=$("#bathroom-range").slider("option","value");var nextValue=value+1;if(nextValue<=maxValue){$("#bathroom-range").slider("value",nextValue);$("#bathroom-range").find('.ui-slider-handle').text(nextValue+"+")}});$("#bathrooms-prev").click(function(){var minValue=$("#bathroom-range").slider("option","min");var value=$("#bathroom-range").slider("option","value");var prevValue=value-1;if(prevValue>=minValue){$("#bathroom-range").slider("value",prevValue);$("#bathroom-range").find('.ui-slider-handle').text(prevValue+"+")}});
//ARROWS FUNCTIONALITY END

$( "#price-range" ).slider({
  range: true,
  values: [ 0, 150000 ],
  step: 100,
  min: 0,
  max: 150000,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
  					var maxValue = ui.values[1];
            
            $(this).find('.ui-slider-handle').first().text("$" + ui.values[0]);
	    $('#imnprice').val(ui.values[0]);
            
            if (maxValue >= 150000) {
            $(this).find('.ui-slider-handle').last().text("$" + maxValue + "+");
	    $('#imxprice').val(ui.values[1]);    
            }
            else {
            $(this).find('.ui-slider-handle').last().text("$" + maxValue);
	    $('#imxprice').val(ui.values[1]) ; 
            }
    },
  create: function(event, ui) {
            var v1 =$(this).slider('values', 0);
            var v2 =$(this).slider('values', 1);
            $(this).find('.ui-slider-handle').first().text("$" + v1);
            
            if (v2 >= 150000) {
            $(this).find('.ui-slider-handle').last().text("$" + v2 + "+");
            }
            else {
            $(this).find('.ui-slider-handle').last().text("$" + v2);
            }          
  }
});

$( "#width-range" ).slider({
  range: true,
  values: [ 14, 36 ],
  step: 1,
  min: 14,
  max: 36,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
  	    var maxValue = ui.values[1];
            
            $(this).find('.ui-slider-handle').first().text(ui.values[0] + "’");
            
            $(this).find('.ui-slider-handle').last().text(maxValue + "’");
            
    },
  create: function(event, ui) {
            var v1 =$(this).slider('values', 0);
            var v2 =$(this).slider('values', 1);
            $(this).find('.ui-slider-handle').first().text(v1 + "’");
            $(this).find('.ui-slider-handle').last().text(v2 + "’");
            
  }
});

$( "#year-range" ).slider({
  range: true,
  values: [ 1970, 2023 ],
  step: 1,
  min: 1970,
  max: 2023,
  animate: "fast",
  value: 1,
  slide: function( event, ui ) {
  	var maxValue = ui.values[1];
	    minValue = ui.values[0];
            if (minValue == 1970) {
            $(this).find('.ui-slider-handle').first().text("<" + ui.values[0]);
	    }    
	    else {
            $(this).find('.ui-slider-handle').first().text(minValue);
            }
	    $('#imnyear').val(minValue);
	    
            $(this).find('.ui-slider-handle').last().text(maxValue);
	    $('#imxyear').val(maxValue);
		    
            
            
    },
  create: function(event, ui) {
            var v1 =$(this).slider('values', 0);
            var v2 =$(this).slider('values', 1);
            $(this).find('.ui-slider-handle').last().text(v2);
            
            if (v1 == 1970) {
            $(this).find('.ui-slider-handle').first().text("<" + v1);
            }
            else {
            $(this).find('.ui-slider-handle').last().text(v1);
            }     
  }
});
// FILTER DEFAULTS END--------------------------------------------

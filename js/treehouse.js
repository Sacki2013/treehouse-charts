(function($) {
$.fn.treehouseCharts = function(userName, options) {
	options = options || {};
	var c1 = options.c1 || "#458156"; // Primary Color
	var c2 = options.c2 ||"#494949"; // Secondary Color
	var widthSize = options.widthSize|| "10"; // Sets the thickness of the charts
	var radiusSize = options.radius || 60; // Sets the radius of the chart
	var exclude = options.exclude || []; // Add subjects to exclude as comma separated strings. Example ["html", "css", "javascript", "ruby", "ios", "business", "android, "php", "wordpress", "design", "dev tools", "forum"]
	var $chartsContainer = $(this);
	var totalSelector = options.totalSelector;
	$chartsContainer.append('<img src="ajax-loader.gif">'); // Add loader.gif
	// Function to loop JSON data and add spans with data-attributes used to store the values. 
	function fillArr()
	{
	    $.getJSON("http://teamtreehouse.com/" + userName + ".json", function(data) { // Get JSON data function
	    	var remaining = data.points.total;
	    	var total = data.points.total;	
	    	var pointsContainer = []; 
	        $.each(data.points, function(key, val) { 
	            if (key !== "total") {
	            	pointsContainer += '<span id="' + userName + '-' + key + '" data-name="' + key + '" data-value="' + (Math.round(val / data.points.total * 100)) + '"></span>'; // Add value to data attr
	            	remaining = remaining - val; // If not then remove to keep track of remaining points which are forum points
	            }
	        });
	         
	        var forum = (Math.round(remaining / data.points.total * 100)); // Convert to % and round to 0 decimal places     
	        pointsContainer += '<span id="' + userName +'-forum" data-name="forum" data-value="' + forum  + '"></span>'; // Add forum as not in loop
	        
	        $chartsContainer.append(pointsContainer); // Add to DOM
	        $(totalSelector).html(total); // Add to DOM
	        chartInsert();
	    });
	}

	fillArr();

	// Function to loop through the spans and extract the values so that circle.js can create the charts.
	function chartInsert() {
		// Loop through Array
		$chartsContainer.children('span').each(function(){
			if ($.inArray($(this).data('name'), exclude) == -1) { // Get attributes from dynamic content generated in fillarr
			new Circle({
		    	id: $(this).attr('id'),
		    	width: widthSize,
		    	radius: radiusSize,
		    	text: $(this).data('name').toUpperCase(),
		    	values: [{percent: $(this).data('value'), color: c1}, {percent: 100 - $(this).data('value'), color: c2}]
		    });
		}
		});
		$chartsContainer.children('img[src="ajax-loader.gif"]').remove(); // Remove loader.gif
	}
}
})(jQuery);
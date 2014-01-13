$(document).ready(function(){
	var userName = "adamsackfield"; // Treehouse User Name
	var pointsArray = [];
	var pointsContainer = [];
	var total = null;

	function fillarr()
	{
	    $.getJSON("http://teamtreehouse.com/" + userName + ".json", function(data) { // Get JSON data function
	    	var remaining = data.points.total;
	    	var total = data.points.total;	 
	        $.each(data.points, function(key, val) { 
	            if (key === "total") {
	            		// If its the total amount do nothing
	            	}
	            else {
	            	pointsContainer += '<span id="' + key + '" data-value="' + (Math.round(val / data.points.total * 100)) + '"></span>'; // Add value to data attr
	            	remaining = remaining - val; // If not then remove to keep track of remaining points which are forum points
	            }
	        });
	         
	        var forum = (Math.round(remaining / data.points.total * 100)); // Convert to % and round to 0 decimal places     
	        pointsContainer += '<span id="forum" data-value="' + forum  + '"></span>'; // Add forum as not in loop
	        
	        $('#points').append(pointsContainer); // Add to DOM
	        $('#totalHeader').html(total); // Add to DOM
	    });
	}

	fillarr();
	// Generates the charts using circle.js
	function chartInsert() {
		// Loop through Array
		$('span').each(function(){
			if ($(this).attr('id') === "total") { // If its the total do nothing
			} else { // Get attributes from dynamic content generated in fillarr
			new Circle({
		    	id: $(this).attr('id'),
		    	width: "10",
		    	radius: 60,
		    	text: $(this).attr('id').toUpperCase(),
		    	values: [{percent: $(this).data('value'), color: "#99C"}, {percent: 100 - $(this).data('value'), color: "#B7B7EB"}]
		    });
		}
		});
		
	}
	 setTimeout(chartInsert, 5000) // Delay making charts until DOM elements have been created
});



			
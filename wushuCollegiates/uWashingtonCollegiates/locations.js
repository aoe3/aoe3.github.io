$.getJSON("2017.json", function(data) {
	var people = data;
	var localPara = document.getElementById("locationsParagraph");

	var lH = document.createElement("H3"); 
	var lIntro = document.createTextNode("COMPETITOR LOCATIONS");
	lH.appendChild(lIntro);
	localPara.appendChild(lH);

	var arcdata=[];
	var circleData=[];

	$.getJSON("locationCoords.json", function(data) {
		var places = data;
		for(i = 0; i < places.length; i++){
			circleData.push(places[i].coords);

			for(f=0; f < people.length; f++){
				var pName = people[f].school;
				
				if((places[i].name == pName) && (places[i].name != "U Pittsburgh")){
					var startCoords = places[i].coords;
					var targetCoords = places[0].coords;
					var amt = schoolsList[places[i].name];
					var newArc = {sourceLocation: startCoords, targetLocation: targetCoords, amount: amt};
					arcdata.push(newArc);
				}
			}
		}
	});

//***********Map drawing code adapted from bl.ocks.org

	// Map dimensions (in pixels)
	var width = 500,
			height = 750;

	// Map projection
	var projection = d3.geo.albersUsa()
			.scale(730.1630554896399)
			.translate([width/2,height/2]) //translate to center the map in view

	// Generate paths based on projection
	var path = d3.geo.path()
			.projection(projection);

	// Create an SVG
	var svg = d3.select("#locationsParagraph").append("svg")
			.attr("width", width)
			.attr("height", height);

	// Group for the states
	// SVG drawing order is based strictly on the order in the DOM
	// So you can't use something like z-index to make an element appear above or below another object
	// We have to draw the states group first so that it appears below the arcs
	// Change the order of these two variables if you want to see how it would look incorrect.
	var states = svg.append("g")
			.attr("class","states");

	// Group for the arcs
	var arcs = svg.append("g")
			.attr("class","arcs");

	// Group for circles
	var circles = svg.append("g")
			.attr("class","circles");

	// Keeps track of currently zoomed feature
	var centered;

	// Load the basemap data
	d3.json("us.json",function(error,geodata) {
		if (error) return console.log(error); //unknown error, check the console

		//Create a path for each map feature in the data
		states.selectAll("path")
			.data(topojson.feature(geodata,geodata.objects.states).features) //generate features from TopoJSON
			.enter()
			.append("path")
			.attr("d",path)

		//Draw circles.
		circles.selectAll("path")
			.data(circleData)
			.enter()
			.append("circle")
		    .attr("transform", function(d) { 
		        return "translate(" + projection(d) + ")"; 
		    })
		    .attr('r', 2.5)
		    .style("fill", "white")
		    .style("stroke","black")
		    .attr("opacity", 0.9);

		// Create a path for each source/target pair.
		arcs.selectAll("path")
			.data(arcdata)
			.enter()
			.append("path")
			.attr('d', function(d) { 
				return lngLatToArc(d, 'sourceLocation', 'targetLocation', 3); // A bend of 5 looks nice and subtle, but this will depend on the length of your arcs and the visual look your visualization requires. Higher number equals less bend.
			})
			.style("stroke-width", function(d){return 'amount' * 5});

	});

	// This function takes an object, the key names where it will find an array of lng/lat pairs, e.g. `[-74, 40]`
	// And a bend parameter for how much bend you want in your arcs, the higher the number, the less bend.
	function lngLatToArc(d, sourceName, targetName, bend){
		// If no bend is supplied, then do the plain square root
		bend = bend || 1;
		// `d[sourceName]` and `d[targetname]` are arrays of `[lng, lat]`
		// Note, people often put these in lat then lng, but mathematically we want x then y which is `lng,lat`

		var sourceLngLat = d[sourceName],
				targetLngLat = d[targetName];

		if (targetLngLat && sourceLngLat) {
			var sourceXY = projection( sourceLngLat ),
					targetXY = projection( targetLngLat );

			// Uncomment this for testing, useful to see if you have any null lng/lat values
			// if (!targetXY) console.log(d, targetLngLat, targetXY)
			var sourceX = sourceXY[0],
					sourceY = sourceXY[1];

			var targetX = targetXY[0],
					targetY = targetXY[1];

			var dx = targetX - sourceX,
					dy = targetY - sourceY,
					dr = Math.sqrt(dx * dx + dy * dy)*bend;

			// To avoid a whirlpool effect, make the bend direction consistent regardless of whether the source is east or west of the target
			var west_of_source = (targetX - sourceX) < 0;
			if (west_of_source) return "M" + targetX + "," + targetY + "A" + dr + "," + dr + " 0 0,1 " + sourceX + "," + sourceY;
			return "M" + sourceX + "," + sourceY + "A" + dr + "," + dr + " 0 0,1 " + targetX + "," + targetY;
			
		} else {
			return "M0,0,l0,0z";
		}
			// Zoom to feature on click
		// This is optional but if you use mapstarter.com, you get it for free.
		function clicked(d,i) {
			//Add any other onClick events here
			var x, y, k;
			if (d && centered !== d) {
		    // Compute the new map center and scale to zoom to
				var centroid = path.centroid(d);
				var b = path.bounds(d);
				x = centroid[0];
				y = centroid[1];
				k = .8 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
				centered = d
			} else {
				x = width / 2;
				y = height / 2;
				k = 1;
				centered = null;
			}
			// Highlight the new feature
			states.selectAll("path")
				.classed("highlighted",function(d) {
						return d === centered;
				})
				.style("stroke-width", 1 / k + "px"); // Keep the border width constant
			//Zoom and re-center the whole map container
			//Comment `.transition()` and `.duration()` to eliminate gradual zoom
			svg
				.transition()
				.duration(500)
				.attr("transform","translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")");
		}
	}
//*****************End adapted code.

	

	var breakLine = document.createElement('br');
	localPara.appendChild(breakLine);

	var seen = [];
	var schoolsList = {};
	for(g = 0; g < people.length; g++){
		person = people[g];
		if (seen.indexOf(person.school) == -1){
			schoolsList[person.school] = 1;
			seen.push(person.school);
		} else {
			schoolsList[person.school] +=1;
		}
	}

	var schoolString = "";
	for(h = 0; h < seen.length; h++){
		if (h == (seen.length - 1)){
			schoolString += "and " + seen[h] + "!";
		} else {
			schoolString = schoolString +  seen[h] + "; " ;
		}
	}


	var eachSchoolText = document.createElement("P");
	var keys = Object.keys(schoolsList).sort()
	keys.forEach(function(key,index) {
		var indivSchool = document.createTextNode(key + ": " + schoolsList[key] + " representative(s)! ");
		eachSchoolText.appendChild(indivSchool);
		var breakLine = document.createElement('br');
		eachSchoolText.appendChild(breakLine);
	});

	localPara.append(eachSchoolText);

	var breakLine = document.createElement('br');
	localPara.appendChild(breakLine);
	var breakLine = document.createElement('br');
	localPara.appendChild(breakLine);
	var breakLine = document.createElement('br');
	localPara.appendChild(breakLine);
});

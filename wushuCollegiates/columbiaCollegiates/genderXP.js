$.getJSON("2016.json", function(data) {
	var genXPParagraph = document.getElementById("genderXPParagraph");

	var gH = document.createElement("H3"); 
	var gIntro = document.createTextNode("GENDER AND EXPERIENCE");
	gH.appendChild(gIntro);
	genXPParagraph.appendChild(gH);

	var width = 375;
	var height = 450;

	var people = data;

	var begcount = [0,0];
	var intcount = [0,0];
	var advcount = [0,0];

	for (i = 0; i < people.length; i++){
		var person = people[i]; 
		if (person.gender == "F"){ 
			if (person.experienceLevel == "BEG"){
				begcount[0]++;
				eventString = ""; 
				for(j=0; j < person.events.length; j++){
					if(j==(person.events.length -1)){
						eventString = eventString + person.events[j];
					} else {
						eventString = eventString + person.events[j] + " | ";
					}
				}; 
			}
		}
	};

	for (i = 0; i < people.length; i++){
		var person = people[i]; 
		if (person.gender == "M"){ 
			if (person.experienceLevel == "BEG"){
				begcount[1]++;
				eventString = ""; 
				for(j=0; j < person.events.length; j++){
					if(j==(person.events.length -1)){
						eventString = eventString + person.events[j];
					} else {
						eventString = eventString + person.events[j] + " | ";
					}
				}; 
			}
		}
	};

	for (i = 0; i < people.length; i++){
		var person = people[i]; 
		if (person.gender == "F"){ 
			if (person.experienceLevel == "INT"){
				intcount[0]++;
				eventString = ""; 
				for(j=0; j < person.events.length; j++){
					if(j==(person.events.length -1)){
						eventString = eventString + person.events[j];
					} else {
						eventString = eventString + person.events[j] + " | ";
					}
				}; 
			}
		}
	};

	for (i = 0; i < people.length; i++){
		var person = people[i]; 
		if (person.gender == "M"){ 
			if (person.experienceLevel == "INT"){
				intcount[1]++;
				eventString = ""; 
				for(j=0; j < person.events.length; j++){
					if(j==(person.events.length -1)){
						eventString = eventString + person.events[j];
					} else {
						eventString = eventString + person.events[j] + " | ";
					}
				}; 
			}
		}
	};

	for (i = 0; i < people.length; i++){
		var person = people[i]; 
		if (person.gender == "F"){ 
			if (person.experienceLevel == "ADV"){
				advcount[0]++;
				eventString = ""; 
				for(j=0; j < person.events.length; j++){
					if(j==(person.events.length -1)){
						eventString = eventString + person.events[j];
					} else {
						eventString = eventString + person.events[j] + " | ";
					}
				}; 

			}
		}
	};


	for (i = 0; i < people.length; i++){
		var person = people[i]; 
		if (person.gender == "M"){ 
			if (person.experienceLevel == "ADV"){
				advcount[1]++;
				eventString = ""; 
				for(j=0; j < person.events.length; j++){
					if(j==(person.events.length -1)){
						eventString = eventString + person.events[j];
					} else {
						eventString = eventString + person.events[j] + " | ";
					}
				}; 
			}
		}
	};

	var svg = d3.select("#genderXPParagraph").append("svg")
		.attr("width", width-100)
		.attr("height", height)
		.attr("id","svg1");
	
	svg.append("path")
		.attr('d','M128.95011, 46.58577 L128.95011, 0.04056 A46.54521, 46.54521 1 1, 0 128.95011, 93.13098z')
		.style('fill','white')
		.style('stroke','#0081cc')
		.style('stroke-width', '2.5px')
		.attr("transform", "translate(50,0), scale(0.65)")
		.on("mouseover", function(){return tooltipF.style("visibility", "visible");})
		.on("mousemove", function(){return tooltipF.style("top", (d3.event.pageY-5)+"px").style("left",(d3.event.pageX+5)+"px");})
		.on("mouseout", function(){return tooltipF.style("visibility", "hidden");});

	svg.append("path")
		.attr('d','M128.80188, 388.15534 V549.98933 C124.26193, 579.39154, 80.494976, 579.39154, 80.108304, 549.98933 V388.15534 H22.821751 L84.404788, 171.89962 H74.379644 L38.57554, 295.0651 C29.524278, 322.30474, -7.3109962, 311.27714, 1.3392857, 282.17574 L41.43986, 148.98509 C46.051436, 133.68965, 65.32836, 106.68061, 98.726432, 106.02037 H128.80188z')
		.style('fill','white')
		.style('stroke','#0081cc')
		.style('stroke-width', '2.5px')
		.attr("transform", "translate(50,0), scale(0.65)")
		.on("mouseover", function(){return tooltipF.style("visibility", "visible");})
		.on("mousemove", function(){return tooltipF.style("top", (d3.event.pageY-5)+"px").style("left",(d3.event.pageX+5)+"px");})
		.on("mouseout", function(){return tooltipF.style("visibility", "hidden");});

	svg.append("path")
		.attr('d','M515.90545, 46.58577 L515.90545, 0.04056 A46.54521, 46.54521 1 0, 1 515.90545, 93.13098z')
		.style('fill','#0081cc')
		.style('stroke',"white")
		.style('stroke-width', '2.5px')
        .attr("transform", "translate(-195,0), scale(0.65)")
		.on("mouseover", function(){return tooltipM.style("visibility", "visible");})
		.on("mousemove", function(){return tooltipM.style("top", (d3.event.pageY-5)+"px").style("left",(d3.event.pageX+5)+"px");})
		.on("mouseout", function(){return tooltipM.style("visibility", "hidden");});

	svg.append("path")
		.attr('d','M515.48597, 106.02037 V330.86906 H515.48597 V549.82853 C516.18773, 579.72094, 570.13733, 580.80938, 569.90817, 542.82853 V179.06038 H579.93333 V310.81886 C579.46073, 339.01802, 619.54701, 339.01802, 620.03389, 310.81886 V167.60313 C619.46109, 137.00793, 595.67281, 106.56889, 559.88305, 106.02037 H515.49589z')
		.style('fill','#0081cc')
		.style('stroke',"white")
		.style('stroke-width', '2.5px')
	    .attr("transform", "translate(-195,0), scale(0.65)")
		.on("mouseover", function(){return tooltipM.style("visibility", "visible");})
		.on("mousemove", function(){return tooltipM.style("top", (d3.event.pageY-5)+"px").style("left",(d3.event.pageX+5)+"px");})
		.on("mouseout", function(){return tooltipM.style("visibility", "hidden");});

	svg.append("text")
		.attr("x", 137)
		.attr("y", 400)
		.text("Hover over me!")
		.attr("text-anchor", "middle")
		.style("alignment-baseline", "middle")
		.style("fill", "grey");

	// console.log(begcount[0] + intcount[0] + advcount[0] + begcount[1] + intcount[1] + advcount[1]);

	var tooltipF = d3.select("#genderXPParagraph")
	    .append("div")
	    .style("position", "absolute")
	    .style("z-index", "10")
	    .style("visibility", "hidden")
	    .style("font-size", "12px")
	    .style("text-align", "center")
	    .style("background-color", "white")
	    .style("opacity", 0.7)
	    .style("color","black")
	    .html("There were " + begcount[0] + " people in <br>" + "the female beginner divisions,<br>" + intcount[0] + " in female intermediate,<br>" + "and " + advcount[0] + " in female advanced!");

    var tooltipM = d3.select("#genderXPParagraph")
	    .append("div")
	    .style("position", "absolute")
	    .style("z-index", "10")
	    .style("visibility", "hidden")
	    .style("font-size", "12px")
	    .style("text-align", "center")
	    .style("background-color", "white")
	    .style("opacity", 0.7)
	    .style("color","black")
	    .html("There were " + begcount[1] + " people in <br>" + "the male beginner divisions,<br>" + intcount[1] + " in male intermediate,<br>" + "and " + advcount[1] + " in male advanced!");


	var svg2 = d3.select("#genderXPParagraph").append("svg")
		.attr("width", width*2)
		.attr("height", height)
		.attr("id", "svg2");

	var seen = [];
	var instances = [];
	for(g = 0; g < people.length; g++){
		person = people[g];
		sName = person.school;
		if (seen.indexOf(sName) == -1){
			seen.push(sName);
			instances.push([person.experienceLevel]);
		} else {
			var ind = seen.indexOf(sName);
			instances[ind].push(person.experienceLevel);
		}
	}

	var margin = {top: 30, right: 40, bottom: 30, left: 100};
    var newHeight = height - margin.top - margin.bottom/2 -1;

    var xScale = d3.scale.linear()
    	.domain([0, 1])
    	.range([0,675]);

	var yScale = d3.scale.linear()
        .domain([seen.length,0])
        .range([0,400]);

    var formatPercent = d3.format(".0%");

    var xAxis = d3.svg.axis()
    	.orient("bottom")
    	.tickFormat(formatPercent)
    	.ticks(10)
    	.scale(xScale);

    var yAxis = d3.svg.axis()
    	.orient("left")
    	.tickFormat("")
    	.scale(yScale);

    svg2.append("g")
        .attr("transform", "translate(" + margin.right + " ,"+newHeight+")")
    	.call(xAxis)
    	.style("fill", "#0081cc");
    svg2.append("g")
        .attr("transform", "translate(" + margin.right + " ,10)")
    	.call(yAxis)
    	.style("fill", "#0081cc");

    

    //#7fb2cc #006699 #00476b
    var counter = [];
    var looper = 0;
    var instancesNumberClassifier = [];
    var instancesSumClassifier = [];
    var instancesAggregateClassifier = [];
    for(r=0; r < instances.length; r++){
    	var nuInstance = [];
    	var sum = 0;
    	var agg = [0,0,0]
	    for(s=0; s<(instances[r].length); s++){
	    	if(instances[r][s] == "BEG"){
	    		nuInstance.push(0);
	    		sum++;
	    		agg[0]++;
	    	} else if (instances[r][s] == "INT"){
	    		nuInstance.push(1);
	    		sum++;
	    		agg[1]++;
	    	} else {
	    		nuInstance.push(2);
	    		sum++;
	    		agg[2]++;
	    	}
	    }
	    instancesSumClassifier.push(sum);
	    instancesAggregateClassifier.push(agg);
	    instancesNumberClassifier.push(nuInstance);
    }
/**for testing stuff*/
 //    for(t = 0; t < instancesNumberClassifier.length; t++){
	// 	instancesNumberClassifier[t].sort();
	// }

 //    for(u = 0; u < instancesNumberClassifier.length; u++){
	// 	console.log("[" + seen[u] + " : {classes: " + instancesNumberClassifier[u] + ", total: "+instancesSumClassifier[u]+", brkdown: "+instancesAggregateClassifier[u]+"}]");
	// }

	for(v = 0; v<instances.length; v++){
		var strng = seen[v];
		var fraction = 1/instancesSumClassifier[v];
		var arrayXPLevel = instancesAggregateClassifier[v];
		//no beginners
		if(arrayXPLevel[0] == 0){
			//no beginners or int; only advanced
			if(arrayXPLevel[1] == 0){
				svg2.append("rect")
					.attr("x",10 + xScale(0)+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(1))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#00476b")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
			//only int
			} else if(arrayXPLevel[2] == 0){
				svg2.append("rect")
					.attr("x",10 + xScale(0)+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(1))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#006699")
					
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
			//at least one int and adv
			} else {
				svg2.append("rect")
					.attr("x",10 + xScale(0)+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[1]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#006699")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
				
				svg2.append("rect")
					.attr("x",10 + xScale(fraction * arrayXPLevel[1])+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[2]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#00476b")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
			}

		//no int, but at least one beginner
		} else if (arrayXPLevel[1] == 0){
			//only beginner
			if(arrayXPLevel[2] == 0){
				svg2.append("rect")
					.attr("x",10 + xScale(0)+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(1))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#7fb2cc")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
			//beginner and adv
			} else {
				svg2.append("rect")
					.attr("x",10 + xScale(0)+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[0]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#7fb2cc")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
				svg2.append("rect")
					.attr("x",10 + xScale(fraction * arrayXPLevel[0])+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[2]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#00476b")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
			}
		//at least one beginner, int
		} else {
			//no adv
			if(arrayXPLevel[2] == 0){
				svg2.append("rect")
					.attr("x",10 + xScale(0)+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[0]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#7fb2cc")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});

				svg2.append("rect")
					.attr("x",10 + xScale(fraction * arrayXPLevel[0])+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[1]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#006699")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
			} else {
				svg2.append("rect")
					.attr("x",10 + xScale(0)+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[0]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#7fb2cc")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});

				svg2.append("rect")
					.attr("x",10 + xScale(fraction * arrayXPLevel[0])+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[1]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#006699")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});

				svg2.append("rect")
					.attr("x",10 + xScale(fraction * arrayXPLevel[0]) + xScale(fraction * arrayXPLevel[1])+margin.top)
					.attr("y",yScale(v)-(height/instances.length)+5)
					.attr("width",xScale(fraction * arrayXPLevel[2]))
					.attr("height",height/instances.length)
			        .attr("stroke", "#0081cc")
					// .attr("transform","translate("+200+","+200+")")
					.style("fill", "#00476b")
					.attr("id","Percent of "+seen[v]+"'s competitors: "+fraction+"%")
					.on("mouseover", function(d) {
					console.log("here");
						var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale(1)-xScale(0));
						var yPosition = parseFloat(d3.select(this).attr("y")) +  (yScale(1) - yScale(0))

						d3.select("#tooltip")
							.style("left", xPosition + "px")
							.style("top", yPosition + "px")
							.select("#value")
							.text(this.id);

						d3.select("#tooltip").classed("hidden", false);

				    	})
				    		.on("mouseout", function() {
	
							d3.select("#tooltip").classed("hidden", true);

				    	});
			}
		}
	}

	for(r=0; r<9; r++){
		svg2.append("line")
			.attr("x1", xScale((r+1)/10))
			.attr("y1", yScale(0))
			.attr("x2", xScale((r+1)/10))
			.attr("y2", yScale(seen.length))
			.style("stroke", "black")
			.style("opacity", 0.2)
        	.style("stroke-dasharray", ("3, 3"))
        	.attr("transform", "translate(" + margin.right + " ,5)");
	}

	for(q = 0; q<seen.length; q++){
    	svg2.append("text")
    		.attr("x",xScale(1)+margin.top)
    		.attr("y",yScale(q)+2)
    		.text(seen[q])
    		.attr("font-size", "12px")
    		.attr("text-anchor", "end")
    		.style("fill", "white");
    }

    svg2.append("text")
    	.attr("x", width)
    	.attr("y", height-3)
    	.attr("text-anchor", "middle")
    	.style("font-size", "15px")
    	.text("The lightest color is beginner. The darkest color is advanced.")
    	.style("fill", "grey");


});

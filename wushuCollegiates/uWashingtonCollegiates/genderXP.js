$.getJSON("2017.json", function(data) {
    var genXPParagraph = document.getElementById("genderXPParagraph");

	var gH = document.createElement("H3"); 
	var gIntro = document.createTextNode("BREAKDOWN OF EXPERIENCE");
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

	var firstGraph = document.createElement("H3"); 
	var firstIntro = document.createTextNode("Breakdown By Male/Female Divisions");
	firstGraph.appendChild(firstIntro);
	genXPParagraph.appendChild(firstGraph);

	var svg = d3.select("#genderXPParagraph").append("svg")
		.attr("width", width*3)
		.attr("height", height)
		.attr("id","svg1");

	var numBegMale = begcount[0];
	var numBegFemale = begcount[1];
	var numIntMale = intcount[0];
	var numIntFemale = intcount[1];
	var numAdvMale = advcount[0];
	var numAdvFemale = advcount[1];

	var arrPopulations = [numAdvFemale, numAdvMale, numIntFemale, numIntMale, numBegFemale, numBegMale];

	var maxOfAllPopulations = Math.ceil(Math.max(numBegFemale, Math.max(numBegMale, Math.max(numIntFemale, Math.max(numIntMale, Math.max(numAdvMale, numAdvFemale)))))/10)*10;
	console.log(maxOfAllPopulations)

	var xScale1 = d3.scale.linear()
    	.domain([0, maxOfAllPopulations])
    	.range([0,1000]);

	var yScale1 = d3.scale.linear()
        .domain([6,0])
        .range([0,400]);

    var xAxis1 = d3.svg.axis()
    	.orient("bottom")
    	.ticks(10)
    	.scale(xScale1);

    var yAxis1 = d3.svg.axis()
    	.orient("left")
    	.tickFormat("")
    	.scale(yScale1);

    var margin = {top: 30, right: 40, bottom: 30, left: 100};
    var newHeight = height - margin.top - margin.bottom/2 -1;

    svg.append("g")
        .attr("transform", "translate(" + (margin.left*2 - margin.bottom) + " ,"+newHeight+")")
    	.call(xAxis1)
    	.style("fill", "#1C2957");
    svg.append("g")
        .attr("transform", "translate(" + (margin.left*2 - margin.bottom) + " ,10)")
    	.call(yAxis1)
    	.style("fill", "#1C2957");

    svg.append("text")
		.attr("x", 150)
		.attr("y", yScale1(2) + 40)
		.text("ADV Female")
		.attr("text-anchor", "end")
		.style("alignment-baseline", "middle")
		.style("fill", "black");

	svg.append("text")
		.attr("x", 150)
		.attr("y", yScale1(1) + 40)
		.text("ADV Male")
		.attr("text-anchor", "end")
		.style("alignment-baseline", "middle")
		.style("fill", "black");

	svg.append("text")
		.attr("x", 150)
		.attr("y", yScale1(4) + 40)
		.text("INT Female")
		.attr("text-anchor", "end")
		.style("alignment-baseline", "middle")
		.style("fill", "black");

	svg.append("text")
		.attr("x", 150)
		.attr("y", yScale1(3) + 40)
		.text("INT Male")
		.attr("text-anchor", "end")
		.style("alignment-baseline", "middle")
		.style("fill", "black");

	svg.append("text")
		.attr("x", 150)
		.attr("y", yScale1(6) + 40)
		.text("BEG Female")
		.attr("text-anchor", "end")
		.style("alignment-baseline", "middle")
		.style("fill", "black");

	svg.append("text")
		.attr("x", 150)
		.attr("y", yScale1(5) + 40)
		.text("BEG Male")
		.attr("text-anchor", "end")
		.style("alignment-baseline", "middle")
		.style("fill", "black");

	//#e8e3d3 #b7ac90 #85754d
	for (j = 0; j < arrPopulations.length; j++){
		var fillcolor ="";
		if(j < 2){
			fillcolor = "#85754d";
		} else if ( j < 4){
			fillcolor = "#b7ac90";
		} else {
			fillcolor = "#e8e3d3";
		}
		svg.append("rect")
			.attr("x", xScale1(0))
			.attr("y", yScale1(j))
			.attr("width", xScale1(arrPopulations[j]) - xScale1(0))
			.attr("height", yScale1(0) - yScale1(1) - 7)
			.attr("stroke", "#1c2957")
			.style("fill", fillcolor)
			.attr("transform", "translate("+(margin.left*2 - margin.bottom)+","+((-margin.bottom*2)+4)+")");
	}

	for(k=5; k<= maxOfAllPopulations; k+=5){
		svg.append("line")
			.attr("x1", xScale1(k))
			.attr("y1", yScale1(0))
			.attr("x2", xScale1(k))
			.attr("y2", yScale1(6))
			.style("stroke", "black")
			.style("opacity", 0.2)
        	.style("stroke-dasharray", ("3, 3"))
        	.attr("transform", "translate(" + (margin.left*2 - margin.bottom) + " ,9)");
	}

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

    //#e8e3d3 #b7ac90 #85754d
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
// /**for testing stuff*/
//     for(t = 0; t < instancesNumberClassifier.length; t++){
// 		instancesNumberClassifier[t].sort();
// 	}

//     for(u = 0; u < instancesNumberClassifier.length; u++){
// 		console.log("[" + seen[u] + " : {classes: " + instancesNumberClassifier[u] + ", total: "+instancesSumClassifier[u]+", brkdown: "+instancesAggregateClassifier[u]+"}]");
// 	}

//want to work with instancesAggregateClassifier and possibly instancesSumClassifier


	var secondGraph = document.createElement("H3"); 
	var secondIntro = document.createTextNode("Breakdown By School");
	secondGraph.appendChild(secondIntro);
	genXPParagraph.appendChild(secondGraph);

	var svg2 = d3.select("#genderXPParagraph").append("svg")
		.attr("width", width*3.5)
		.attr("height", height*2)
		.attr("id","svg2");

	var yBound = Math.max(...instancesSumClassifier)

	var xScale2 = d3.scale.linear()
	.domain([0, instancesSumClassifier.length])
	.range([0,1000]);

	var yScale2 = d3.scale.linear()
        .domain([yBound,0])
        .range([0,400]);

    var xAxis2 = d3.svg.axis()
    	.orient("bottom")
    	.tickFormat("")
    	.scale(xScale2);

    var yAxis2 = d3.svg.axis()
    	.orient("left")
    	.ticks(10)
    	.scale(yScale2);

    svg2.append("g")
        .attr("transform", "translate(" + (margin.left*2 - margin.bottom) + " ,"+newHeight+")")
    	.call(xAxis2)
    	.style("fill", "#1C2957");
    svg2.append("g")
        .attr("transform", "translate(" + (margin.left*2 - margin.bottom) + " ,10)")
    	.call(yAxis2)
    	.style("fill", "#1C2957");

    for(s=0; s<seen.length; s++){

    	svg2.append("text")
		.attr("x", xScale2(s))
		.attr("y", yScale2(0))
		.text(seen[s])
		.attr("class", "slantText")
		.attr("font-size", "12px")
		.attr("transform", "translate("+((margin.left*2 - margin.bottom)+3)+",20)rotate(45, "+xScale2(s)+","+yScale2(0)+")");

    	var breakdown = instancesAggregateClassifier[s];
    	var max = instancesSumClassifier[s];
    	
    	console.log(seen[s] + breakdown)
    	var numB = breakdown[0];
    	var numI = breakdown[1] + numB;
    	var numA = breakdown[2] + numI;
	//#e8e3d3 #b7ac90 #85754d
    	svg2.append("rect")
			.attr("x", xScale2(s))
			.attr("y", yScale2(numA))
			.attr("width", xScale2(1)-xScale2(0))
			.attr("height", Math.abs(yScale2(numI) - yScale2(numA)))
			.attr("transform", "translate(0"+((margin.left*2 - margin.bottom))+","+(5)+")")
			.style("fill", "#85754d")
			.style("stroke", "black");

		svg2.append("rect")
			.attr("x", xScale2(s))
			.attr("y", yScale2(numI))
			.attr("width", xScale2(1)-xScale2(0))
			.attr("height", Math.abs(yScale2(numB) - yScale2(numI)))
			.attr("transform", "translate("+((margin.left*2 - margin.bottom))+","+(5)+")")
			.style("fill", "#b7ac90")
			.style("stroke", "black");

		svg2.append("rect")
			.attr("x", xScale2(s))
			.attr("y", yScale2(numB))
			.attr("width", xScale2(1)-xScale2(0))
			.attr("height", Math.abs(yScale2(0) - yScale2(numB)))
			.attr("transform", "translate("+((margin.left*2 - margin.bottom))+","+(5)+")")
			.style("fill", "#e8e3d3")
			.style("stroke", "black");

    }

    for(t=0; t<=yBound; t+=2){
		svg2.append("line")
			.attr("x1", xScale2(0))
			.attr("y1", yScale2(t))
			.attr("x2", xScale2(seen.length))
			.attr("y2", yScale2(t))
			.style("stroke", "black")
			.style("opacity", 0.4)
	    	.style("stroke-dasharray", ("3, 3"))
			.attr("transform", "translate("+((margin.left*2 - margin.bottom))+","+(5)+")");
	}

});

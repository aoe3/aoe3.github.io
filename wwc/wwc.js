/***********WHEN ADDING NEW DATASETS, ADD THEM INTO JSONs folder first*******************************
************AND THEN ADD THEM INTO THE ARRAY DIRECTLY BELOW: datasets.*******************************
************YOU MUST ADD THEM AS A STRING THAT IS NAMED AFTER THE FILE******************************/
var datasets = ["wwc1.json","wwc2.json","wwc3.json","wwc4.json",
				"wwc5.json","wwc6.json","wwc7.json","wwc8.json",
				"wwc9.json","wwc10.json","wwc11.json","wwc12.json",
				"wwc13.json","wwc14.json"];

//extract all teh data from our JSONs
var loadedData = []
for(i = 0; i < datasets.length; i++){
	json = "JSONs/" + datasets[i];
	$.ajax({ url: json,
	    async: false,
	    dataType: 'json',
	    success: function(data) {
	        loadedData.push(data);
	    }
	});
}

//unique countries seen
var seenCountry = [];

//country total medal breakdown [first, second, third]
var seenMedals = [];

//contains arrays of top-3-placing countries for each event, for each year
//ex [[SGP, CHN, HKG],[SGP, CHN, SGP],[KOR, AUS, SGP]]
// In the above case, the second array shows SGP winning two medals that year, first and third.
var seenCountryFreq = [];

for(j=0; j < loadedData.length; j++){
	var oneCompetition = loadedData[j];
	var evNationList = [];
	for(k=0; k< oneCompetition.length; k++){
		var oneEvent = oneCompetition[k];
		evNationList.push(oneEvent["nation"]);
		// console.log(oneEvent["nation"]);
		//haven't seen this country medal before
		if(seenCountry.indexOf(oneEvent["nation"]) == -1){
			seenCountry.push(oneEvent["nation"]);
			if(oneEvent["place"] == 1){
				seenMedals.push([1,0,0]);
			} else if (oneEvent["place"] == 2){
				seenMedals.push([0,1,0]);
			} else {
				seenMedals.push([0,0,1]);
			}

		//have seen this country medal before
		} else {
			var index = seenCountry.indexOf(oneEvent["nation"]);
			if(oneEvent["place"] == 1){
				seenMedals[index][0]++;
			} else if (oneEvent["place"] == 2){
				seenMedals[index][1]++;
			} else {
				seenMedals[index][2]++;
			}
		}

	}
	seenCountryFreq.push(evNationList);
}

//total medal count for each nation, order by seenCountry
var totals = [];

//medals won by each country, by year
//Ex [2,5] means a country won 2 medals the first year and 5 the next.
var seenByYear = [];

//running counter of total medals won over time
//Ex [2,5] means a country won 2 medals the first year and 3 the next, to make up 5.
var seenByYearCumulative = [];

for(l=0; l< seenCountry.length; l++){
	totals.push(seenMedals[l][0] + seenMedals[l][1] + seenMedals[l][2]);

	//initialize seenByYear and seenByYearCumulative to be filled with zeroes
	var zeroArray = new Array(loadedData.length).fill(0);
	seenByYear.push(zeroArray);
	seenByYearCumulative.push(zeroArray);
}

var score = [];
for(a = 0; a < seenCountry.length; a++){
	var scoreSum = (seenMedals[a][0] * 3) + (seenMedals[a][1] * 2) + seenMedals[a][2];
	score.push(scoreSum)
}

//1) combine the arrays:
var list = [];
for (b = 0; b < seenCountry.length; b++){ 
    list.push({'nation': seenCountry[b], 'total': totals[b], 'sMedals': seenMedals[b], 'score': score[b]});
}

//2) sort:
list.sort(function(c, d) {
    return ((c.score > d.score) ? -1 : ((c.score == d.score) ? 0 : 1));
    //Sort could be modified to, for example, sort on the age 
    // if the name is the same.
});

//3) separate them back out:
for (c = 0; c < list.length; c++) {
    seenCountry[c] = list[c].nation;
    totals[c] = list[c].total;
    seenMedals[c] = list[c].sMedals;
    score[c] = list[c].score;
}

for(m=0; m<loadedData.length; m++){
	//list of all countries that won medals this year, with multiple medal winners counted
	var wonMedalsThisYear = seenCountryFreq[m];
	for(n=0; n<wonMedalsThisYear.length; n++){
		var countryAbbrev = wonMedalsThisYear[n];
		var countryIndex = seenCountry.indexOf(countryAbbrev);
		seenByYear[countryIndex][m]++;
	}
}

//sums an array, uses ES6 arrow functions
const reducer = (accumulator, currentValue) => accumulator + currentValue;

for(o=0; o<seenCountry.length; o++){
	var countryYearSplit = seenByYear[o];
	var sum = 0;
	for(p=0; p<countryYearSplit.length; p++){
		sum+=countryYearSplit[p];
		seenByYearCumulative[o][p] = sum;
	}
}

//at this point, we know:
// - the set of all countries that have ever medaled, spanning all years found in the JSONs (seenCountry)
// - the total medals won by each country (totals, ordered by seenCountry)
// - the breakdown of total medals into [first, second, third] (seenMedals, ordered by seenCountry)
// - the medals won by each country, each year (seenByYear, ordered by seenCountry)
// - the running total of medals won from year to year (seenByYearCumulative, ordered by seenCountry)


// WTS: totals first, break it down by color, showing how each country has won their medals
// WTS: medal accumulation over time, by country

var divTotals = document.getElementById("wwcGlobal");
var nuHeader = document.createElement("H3");
var intro = document.createTextNode("Taolu Medal Totals by Country for the World Wushu Championships");
nuHeader.appendChild(intro);
divTotals.appendChild(nuHeader);

var nuText = document.createElement("p");
var txt = document.createTextNode("The ordering is based off of the following scoring criteria: gold = 3 points, silver = 2 points, and bronze = 1 point." + 
	" Countries are plotted from highest score to lowest. You can hover over the bars to see exactly how many of each medal each country won. This is not supported on mobile.");
nuText.appendChild(txt);
divTotals.appendChild(nuText);

var margin = {top: 20, right: 20, bottom: 50, left: 50}
var width = window.innerWidth - margin.left - margin.right;
var height = window.innerHeight - margin.top - margin.bottom;

var upperBound = Math.max.apply(null, totals);
var xScale = d3.scaleLinear()
	.domain([0, seenCountry.length])
	.range([width/10, (width*.9)]);
var yScale = d3.scaleLinear()
	.domain([0, upperBound])
	.range([height-margin.bottom, margin.top*2]);

var svg = d3.select(divTotals).append("svg")
	.attr("width", width)
	.attr("height", height)
.append("g")
	.attr("transform","translate(" + margin.left + "," + margin.top + ")");

var xAxis = d3.axisBottom(xScale)
	.ticks(0);
var yAxis = d3.axisLeft(yScale);

svg.append("g")
    .attr("transform", "translate(0," + (height - margin.bottom*2) + ")")
    .call(xAxis);

// Add the Y Axis
svg.append("g")
	.attr("transform", "translate("+(width/10)+","+(-margin.bottom)+")")
	.call(yAxis);

for(q=0; q< seenCountry.length; q++){
	svg.append("text")
		.attr("x", xScale(q))
		.attr("y", function(){
			if((q%2) == 0){
				return yScale(0)-(margin.bottom/2);
			} else {
				return yScale(0);
			}
		})
		.attr("class", "barChartText")
		.text(seenCountry[q])
		.attr("font-size", "12px");
	
	var numBrnz = seenMedals[q][2];
	var numSilv = seenMedals[q][2] + seenMedals[q][1];
	var numGold = numSilv + seenMedals[q][0];

	//create gold bar
	svg.append("rect")
		.attr("x", xScale(q))
		.attr("y", yScale(numGold))
		.attr("width", xScale(1)-xScale(0))
		.attr("id", seenCountry[q]+": "+seenMedals[q][0]+" gold")
		.attr("height", yScale(numSilv) - yScale(numGold))
		.attr("transform", "translate(0.5,"+(-margin.bottom)+")")
		.style("fill", "gold")
		.style("stroke", "black")
		.on("mouseover", function(d) {

			d3.select("#tooltip").style("top", (d3.event.pageY-5)+"px").style("left",(d3.event.pageX+5)+"px")
				.select("#value")
				.text(this.id);

			d3.select("#tooltip").classed("hidden", false);

	    })
	    .on("mouseout", function() {


			d3.select("#tooltip").classed("hidden", true);

	    });

	// //create silver bar
	svg.append("rect")
		.attr("x", xScale(q))
		.attr("y", yScale(numSilv))
		.attr("id", seenCountry[q]+": "+seenMedals[q][1]+" silver")
		.attr("width", xScale(1)-xScale(0))
		.attr("height", yScale(numBrnz) - yScale(numSilv))
		.attr("transform", "translate(0.5,"+(-margin.bottom)+")")
		.style("fill", "silver")
		.style("stroke", "black")
		.on("mouseover", function(d) {

			d3.select("#tooltip").style("top", (d3.event.pageY-5)+"px").style("left",(d3.event.pageX+5)+"px")
				.select("#value")
				.text(this.id);

			d3.select("#tooltip").classed("hidden", false);

	    })
	    .on("mouseout", function() {


			d3.select("#tooltip").classed("hidden", true);

	    });

	// //create bronze bar
	svg.append("rect")
		.attr("x", xScale(q))
		.attr("y", yScale(numBrnz))
		.attr("id", seenCountry[q]+": "+seenMedals[q][2]+" bronze")
		.attr("width", xScale(1)-xScale(0))
		.attr("height", yScale(0) - yScale(numBrnz))
		.attr("transform", "translate(0.5,"+(-margin.bottom)+")")
		.style("fill", "#CD7F32")
		.style("stroke", "black")
		.on("mouseover", function(d) {

			d3.select("#tooltip").style("top", (d3.event.pageY-5)+"px").style("left",(d3.event.pageX+5)+"px")
				.select("#value")
				.text(this.id);

			d3.select("#tooltip").classed("hidden", false);

	    })
	    .on("mouseout", function() {


			d3.select("#tooltip").classed("hidden", true);

	    });
}

for(r=0; r<=upperBound; r+=5){
	svg.append("line")
		.attr("x1", xScale(0))
		.attr("y1", yScale(r))
		.attr("x2", xScale(seenCountry.length))
		.attr("y2", yScale(r))
		.style("stroke", "black")
		.style("opacity", 0.2)
    	.style("stroke-dasharray", ("3, 3"))
		.attr("transform", "translate(0.5,"+(-margin.bottom)+")");
}

svg.append("text")
	.attr("x", width/20-(margin.left/2))
	.attr("y", height/2-margin.top)
	.attr("text-anchor","middle")
	.attr("class", "barChartText")
	.style("font-size", "12px")
	.text("Number of Medals");

//we've shown the breakdown by totals. now let's see things over time

var divTime = document.getElementById("wwcTime");
var newHeader = document.createElement("H3");
var newIntro = document.createTextNode("Taolu Medal Totals by Country Over Time");
newHeader.appendChild(newIntro);
divTime.appendChild(newHeader);

var newText = document.createElement("p");
var text = document.createTextNode("Hover over lines to highlight them and find out which country they belong to in the left-side key. On mobile, try to zoom in, tap the line you want to see, and zoom out to see what country it corresponds to. Sorry for the lack of mobile optimization.");
newText.appendChild(text);
divTime.appendChild(newText);


var xScale2 = d3.scaleLinear()
	.domain([0, loadedData.length])
	.range([width/10, (width*.9)]);
var yScale2 = d3.scaleLinear()
	.domain([0, upperBound])
	.range([height-margin.bottom, margin.top*2]);

var svg2 = d3.select(divTime).append("svg")
	.attr("width", width)
	.attr("height", height)
.append("g")
	.attr("transform","translate(" + margin.left + "," + margin.top + ")");

var xAxis2 = d3.axisBottom(xScale2)
				.ticks(0);
var yAxis2 = d3.axisLeft(yScale2);

svg2.append("g")
    .attr("transform", "translate(0," + (height - margin.bottom*2) + ")")
    .call(xAxis2);

// Add the Y Axis
svg2.append("g")
	.attr("transform", "translate("+(width/10)+","+(-margin.bottom)+")")
	.call(yAxis2);

/***************************BAD IDEA BELOW***************************/

var color = ["#bea1fd", "#d50527", "#158940", "#f898fd", "#24c9d7", "#cb9b64", 
			"#866888", "#22e67a", "#e509ae", "#9dabfa", "#437e8a", "#b21bff", 
			"#ff7b91", "#94aa05", "#ac5906", "#82a68d", "#fe6616", "#7a7352", 
			"#f9bc0f", "#b65d66", "#07a2e6", "#c091ae", "#8a91a7", "#88fc07", 
			"#ea42fe", "#9e8010", "#10b437", "#c281fe", "#f92b75", "#07c99d", 
			"#a946aa", "#bfd544", "#16977e", "#ff6ac8", "#a88178", "#5776a9", 
			"#678007", "#fa9316", "#85c070", "#6aa2a9", "#989e5d", "#fe9169", 
			"#cd714a", "#6ed014", "#c5639c", "#c23271", "#698ffc", "#678275", 
			"#c5a121", "#a978ba", "#ee534e", "#d24506", "#59c3fa", "#ca7b0a", 
			"#6f7385", "#9a634a", "#48aa6f", "#ad9ad0", "#d7908c", "#6a8a53", 
			"#8c46fc", "#8f5ab8", "#fd1105", "#7ea7cf", "#d77cd1", "#a9804b", 
			"#0688b4", "#6a9f3e", "#ee8fba", "#a67389", "#9e8cfe", "#bd443c", 
			"#6d63ff", "#d110d5", "#798cc3", "#df5f83", "#b1b853", "#bb59d8", 
			"#1d960c", "#867ba8", "#18acc9", "#25b3a7", "#f3db1d", "#938c6d", 
			"#936a24", "#a964fb", "#92e460", "#a05787", "#9c87a0", "#20c773", 
			"#8b696d", "#78762d", "#e154c6", "#40835f", "#d73656", "#1afd5c", 
			"#c4f546", "#3d88d8", "#bd3896", "#1397a3", "#f940a5", "#66aeff", 
			"#d097e7", "#fe6ef9", "#d86507", "#8b900a", "#d47270", "#e8ac48", 
			"#cf7c97", "#cebb11", "#718a90", "#e78139", "#ff7463", "#faff16"]

/***************************BAD IDEA ABOVE***************************/

var lines=[];

for(s=0; s<seenByYearCumulative.length; s++){
	var data = [0].concat(seenByYearCumulative[s]);
	lines.push(data);
}

var toPlot = [];

for(t=0; t<lines.length; t++){
	var line = [];
 	for(u = 0; u<lines[0].length; u++){
 	    var pt = {};
 		pt.x = u;
 		pt.y = lines[t][u];
 		line.push(pt);
 	}
 	toPlot.push(line);
}


var d3Line = d3.line()
				.x(function(d){return xScale2(d.x)})
				.y(function(d){return yScale2(d.y)});

for(x=0; x<seenCountry.length; x++){
	idCountry = seenCountry[x];
	svg2.append("text")
		.attr("x", xScale(0))
		.attr("y", yScale(((seenCountry.length-x)/(seenCountry.length)) * upperBound))
		.attr("class", idCountry)
		.attr("id", "shadow")
		.text(idCountry)
		.style("font-size", "12px")
		.style("fill", color[x%color.length])
		.attr("transform", "translate("+((-width/10)+15)+","+(-margin.bottom+15)+")")
		.on("mouseover", function (d) {
	    	idString = "#"+this.getAttribute("class");
	    	d3.select(idString)      
	        	.style("stroke-width",'5px')

      		d3.select(this)
	    		.style("font-weight", "bold")
				.style("font-size", "16px");         
        	
        	var selectthegraphs = $('.thegraph').not(idString);    
        	d3.selectAll(selectthegraphs)
        		.style("opacity",0.2);
        })
        .on("mouseout",	function(d) { 
	    	idString = "#"+this.getAttribute("class");
	    	d3.select(idString)
        		.style("stroke-width",'3px')

      		d3.select(this)
	    		.style("font-weight", "normal")
				.style("font-size", "12px");  

			var selectthegraphs = $('.thegraph').not(idString);
        	d3.selectAll(selectthegraphs)
        		.style("opacity",1);
        	
        });
}

for(w=0; w<toPlot.length;w++){
	svg2.append("path")
	    .attr("class", "thegraph")
	    .attr("id", seenCountry[w])
	    .style("stroke", color[w%color.length])
	    .style("stroke-width", '3px')
	    .style("fill", "none")
		.attr("transform", "translate(0,"+(-margin.bottom)+")")
	    .attr("d",d3Line(toPlot[w]))
	    .on("mouseover", function (d) {
	    	idString = "."+this.id
	    	d3.select(idString)
	    		.style("font-weight", "bold")
				.style("font-size", "16px");

      		d3.select(this)                         
	        	.style("stroke-width",'5px');
        	
        	var selectthegraphs = $('.thegraph').not(this);    
        	d3.selectAll(selectthegraphs)
        		.style("opacity",0.2);
        })
        .on("mouseout",	function(d) { 
	    	idString = "."+this.id
	    	d3.select(idString)
	    		.style("font-weight", "normal")
				.style("font-size", "12px");  

      		d3.select(this)
        		.style("stroke-width",'3px');
        	
        	var selectthegraphs = $('.thegraph').not(this);
        	d3.selectAll(selectthegraphs)
        		.style("opacity",1);
        });
}

for(y = 5; y<=upperBound; y+=5){
	svg2.append("line")
		.attr("x1", xScale2(0))
		.attr("y1", yScale2(y))
		.attr("x2", xScale2(loadedData.length))
		.attr("y2", yScale2(y))
		.style("stroke", "black")
		.style("opacity", 0.2)
    	.style("stroke-dasharray", ("3, 3"))
		.attr("transform", "translate(0.5,"+(-margin.bottom)+")");
}

for(z=0; z<=loadedData.length; z++){
	svg2.append("line")
		.attr("x1", xScale2(z))
		.attr("y1", yScale2(0))
		.attr("x2", xScale2(z))
		.attr("y2", yScale2(upperBound))
		.style("stroke", "black")
		.style("opacity", 0.2)
    	.style("stroke-dasharray", ("3, 3"))
		.attr("transform", "translate(0.5,"+(-margin.bottom)+")");
}

for(aa=0; aa<loadedData.length; aa++){
	svg2.append("text")
		.attr("x", xScale2(aa+1))
		.attr("y", yScale2(0)-30)
		.style("font-size", "12px")
		.attr("text-anchor", "middle")
		.text("WWC"+(aa+1));
}

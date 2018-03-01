var y6 = {}, y7 = {}, y8 = {}, y9 = {}, 
	y10 = {}, y11 = {}, y12 = {}, y13 = {};

$.ajax({ url: "JSONS/06th-uwg.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        y6 = data;
    }
});

$.ajax({ url: "JSONS/07th-uwg.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        y7 = data;
    }
});

$.ajax({ url: "JSONS/08th-uwg.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        y8 = data;
    }
});

$.ajax({ url: "JSONS/09th-uwg.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        y9 = data;
    }
});

$.ajax({ url: "JSONS/10th-uwg.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        y10 = data;
    }
});

$.ajax({ url: "JSONS/11th-uwg.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        y11 = data;
    }
});

$.ajax({ url: "JSONS/12th-uwg.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        y12 = data;
    }
});

$.ajax({ url: "JSONS/13th-uwg.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        y13 = data;
    }
});

var y6seen = [];
var y6competitors = [];

for(i = 0; i < y6.length; i++){
	var person = y6[i];
	var pName = person.name;
	var pGender = person.gender;
	var pXP = person.experienceLevel;
	var ev = person.event;
	var index = y6seen.indexOf(pName);
	if(index == -1){
		y6seen.push(pName);
		y6competitors.push([pName, pGender, pXP, [ev]]);
	} else {
		var eventList = y6competitors[index][3];
		eventList.push(ev);
		y6competitors[index][3] = eventList;
	}
}

var y7seen = [];
var y7competitors = [];

for(i = 0; i < y7.length; i++){
	var person = y7[i];
	var pName = person.name;
	var pGender = person.gender;
	var pXP = person.experienceLevel;
	var ev = person.event;
	var index = y7seen.indexOf(pName);
	if(index == -1){
		y7seen.push(pName);
		y7competitors.push([pName, pGender, pXP, [ev]]);
	} else {
		var eventList = y7competitors[index][3];
		eventList.push(ev);
		y7competitors[index][3] = eventList;
	}
}

var y8seen = [];
var y8competitors = [];

for(i = 0; i < y8.length; i++){
	var person = y8[i];
	var pName = person.name;
	var pGender = person.gender;
	var pXP = person.experienceLevel;
	var ev = person.event;
	var index = y8seen.indexOf(pName);
	if(index == -1){
		y8seen.push(pName);
		y8competitors.push([pName, pGender, pXP, [ev]]);
	} else {
		var eventList = y8competitors[index][3];
		eventList.push(ev);
		y8competitors[index][3] = eventList;
	}
}

var y9seen = [];
var y9competitors = [];

for(i = 0; i < y9.length; i++){
	var person = y9[i];
	var pName = person.name;
	var pGender = person.gender;
	var pXP = person.experienceLevel;
	var ev = person.event;
	var index = y9seen.indexOf(pName);
	if(index == -1){
		y9seen.push(pName);
		y9competitors.push([pName, pGender, pXP, [ev]]);
	} else {
		var eventList = y9competitors[index][3];
		eventList.push(ev);
		y9competitors[index][3] = eventList;
	}
}

var y10seen = [];
var y10competitors = [];

for(i = 0; i < y10.length; i++){
	var person = y10[i];
	var pName = person.name;
	var pGender = person.gender;
	var pXP = person.experienceLevel;
	var ev = person.event;
	var index = y10seen.indexOf(pName);
	if(index == -1){
		y10seen.push(pName);
		y10competitors.push([pName, pGender, pXP, [ev]]);
	} else {
		var eventList = y10competitors[index][3];
		eventList.push(ev);
		y10competitors[index][3] = eventList;
	}
}

var y11seen = [];
var y11competitors = [];

for(i = 0; i < y11.length; i++){
	var person = y11[i];
	var pName = person.name;
	var pGender = person.gender;
	var pXP = person.experienceLevel;
	var ev = person.event;
	var index = y11seen.indexOf(pName);
	if(index == -1){
		y11seen.push(pName);
		y11competitors.push([pName, pGender, pXP, [ev]]);
	} else {
		var eventList = y11competitors[index][3];
		eventList.push(ev);
		y11competitors[index][3] = eventList;
	}
}

var y12seen = [];
var y12competitors = [];

for(i = 0; i < y12.length; i++){
	var person = y12[i];
	var pName = person.name;
	var pGender = person.gender;
	var pXP = person.experienceLevel;
	var ev = person.event;
	var index = y12seen.indexOf(pName);
	if(index == -1){
		y12seen.push(pName);
		y12competitors.push([pName, pGender, pXP, [ev]]);
	} else {
		var eventList = y12competitors[index][3];
		eventList.push(ev);
		y12competitors[index][3] = eventList;
	}
}

var y13seen = [];
var y13competitors = [];

for(i = 0; i < y13.length; i++){
	var person = y13[i];
	var pName = person.name;
	var pGender = person.gender;
	var pXP = person.experienceLevel;
	var ev = person.event;
	var index = y13seen.indexOf(pName);
	if(index == -1){
		y13seen.push(pName);
		y13competitors.push([pName, pGender, pXP, [ev]]);
	} else {
		var eventList = y13competitors[index][3];
		eventList.push(ev);
		y13competitors[index][3] = eventList;
	}
}

var arrYearData = [y6competitors, y7competitors, y8competitors, y9competitors, 
			y10competitors, y11competitors, y12competitors, y13competitors];

var arrYearPopulation = [y6competitors.length, y7competitors.length, y8competitors.length, y9competitors.length, 
			y10competitors.length, y11competitors.length, y12competitors.length, y13competitors.length];

var arrYearGenderRatio = [];
var arrYearXPRatio = [];
var arrYearGenXPRatio = [];
var arrYearEventList = [];
var arrYearEventPop = [];

for(l = 0; l<arrYearData.length; l++){
	var target = arrYearData[l];
	var begF = 0, intF = 0, advF = 0,
		begM = 0, intM = 0, advM = 0;
	var eList = [], ePop = [];

	for (m=0; m< target.length; m++){
		var person = target[m];
		var pName = person[0], pGender = person[1], pXP = person[2], pEvents = person[3];
		if(pGender =="M"){
			if(pXP == "Beg"){
				begM++;
				for(n = 0; n<pEvents.length; n++){
					var evString = pXP + " " + pGender + " " + pEvents[n];
					var index = eList.indexOf(evString);
					if(index == -1){
						eList.push(evString);
						ePop.push(1);
					} else {
						ePop[index]++;
					}
				}
			} else if (pXP == "Int"){
				intM++;
				for(n = 0; n<pEvents.length; n++){
					var evString = pXP + " " + pGender + " " + pEvents[n];
					var index = eList.indexOf(evString);
					if(index == -1){
						eList.push(evString);
						ePop.push(1);
					} else {
						ePop[index]++;
					}
				}
			} else {
				advM++;
				for(n = 0; n<pEvents.length; n++){
					var evString = pXP + " " + pGender + " " + pEvents[n];
					var index = eList.indexOf(evString);
					if(index == -1){
						eList.push(evString);
						ePop.push(1);
					} else {
						ePop[index]++;
					}
				}
			}
		} else {
			if(pXP == "Beg"){
				begF++;
				for(n = 0; n<pEvents.length; n++){
					var evString = pXP + " " + pGender + " " + pEvents[n];
					var index = eList.indexOf(evString);
					if(index == -1){
						eList.push(evString);
						ePop.push(1);
					} else {
						ePop[index]++;
					}
				}
			} else if (pXP == "Int"){
				intF++;
				for(n = 0; n<pEvents.length; n++){
					var evString = pXP + " " + pGender + " " + pEvents[n];
					var index = eList.indexOf(evString);
					if(index == -1){
						eList.push(evString);
						ePop.push(1);
					} else {
						ePop[index]++;
					}
				}
			} else {
				advF++;
				for(n = 0; n<pEvents.length; n++){
					var evString = pXP + " " + pGender + " " + pEvents[n];
					var index = eList.indexOf(evString);
					if(index == -1){
						eList.push(evString);
						ePop.push(1);
					} else {
						ePop[index]++;
					}
				}
			}
		}
	}

	totFemale = begF + intF + advF;
	totMale = begM + intM + advM;
	totBeg = begF + begM;
	totInt = intF + intM;
	totAdv = advF + advM;

	arrYearGenderRatio[l] = [totMale, totFemale];
	arrYearXPRatio[l] = [totBeg, totInt, totAdv];
	arrYearGenXPRatio[l] = [[begF, begM],[intF, intM],[advF, advM]];
	arrYearEventList[l] = eList;
	arrYearEventPop[l] = ePop;
}

for(j = 0; j < arrYearData.length; j++){
	console.log(j);
	// var combinedGenXPRatio = (arrYearGenXPRatio[j][0][0]+ 
	// 			arrYearGenXPRatio[j][0][1]+ 
	// 			arrYearGenXPRatio[j][1][0]+ 
	// 			arrYearGenXPRatio[j][1][1]+
	// 			arrYearGenXPRatio[j][2][0]+
	// 			arrYearGenXPRatio[j][2][1]);
	// var combinedYearXPRatio = (arrYearXPRatio[j][0] + arrYearXPRatio[j][1] + arrYearXPRatio[j][2]);
	// var combinedYearGenderRatio = (arrYearGenderRatio[j][0] + arrYearGenderRatio[j][1]);

	// console.log("truth: " +arrYearData[j].length);
	// console.log("yrpop: " +arrYearPopulation[j]);
	// console.log("genxp: " +combinedGenXPRatio);
	// console.log("yrexp: " +combinedYearXPRatio);
	// console.log("yrgdr: " +combinedYearGenderRatio);
	// console.log(combinedGenXPRatio == arrYearData[j].length);
	// console.log(" ");
	var yrNum = j + 6;
	var endingString = "";
	if ((((yrNum - 3) % 10) == 0) &&((yrNum - 13) % 100) != 0){
		endingString = "rd";
	} else if ((((yrNum - 2) % 10) == 0) &&((yrNum - 12) % 100) != 0){
		endingString = "nd";
	} else if ((((yrNum - 1) % 10) == 0) &&((yrNum - 11) % 100) != 0){
			endingString = "st";
	} else {
		endingString = "th";
	}
	var yrName = yrNum + endingString
	var divName = yrName + "-uwg";
	var divTarget = document.getElementById(divName);
	var nuHeader = document.createElement("H3");
	var intro = document.createTextNode(yrName + " University Wushu Games");
	nuHeader.appendChild(intro);
	divTarget.appendChild(nuHeader);

	// var gHeaderF = document.createElement("H4");
	// var gF = document.createTextNode("Female");
	// gHeaderF.appendChild(gF);
	// divTarget.appendChild(gHeaderF);

	// var gHeaderM = document.createElement("H4");
	// var gM = document.createTextNode("Male");
	// gHeaderM.appendChild(gM);
	// divTarget.appendChild(gHeaderM);

	var width = window.innerWidth - 100;
	var height = window.innerHeight/3.5;

	var svg = d3.select(divTarget).append("svg")
			.attr("width", width)
			.attr("height", height);

	var maxFem = Math.max(arrYearGenXPRatio[j][0][0], Math.max(arrYearGenXPRatio[j][1][0], Math.max(arrYearGenXPRatio[j][2][0], arrYearGenderRatio[j][1])));
	var maxMal = Math.max(arrYearGenXPRatio[j][1][0], Math.max(arrYearGenXPRatio[j][1][1], Math.max(arrYearGenXPRatio[j][2][1], arrYearGenderRatio[j][0])));
	var maxGen = Math.max(maxFem, maxMal);
	var leftAxisX = width/2 - 100;
	var rightAxisX = width/2 + 100;
	var bottomAxisY = height * 0.8;

	var calibration = (Math.ceil(maxGen/10)*10)
	if((calibration - maxGen) >= 5){
		calibration -=5;
	}

	var xScale1 = d3.scale.linear()
	    .domain([0, calibration])
	    .range([100, leftAxisX]);

	var xScale1Axis = d3.scale.linear()
	    .domain([calibration, 0])
	    .range([100, leftAxisX]);

	var xScale2 = d3.scale.linear()
	    .domain([0, calibration])
	    .range([rightAxisX, width-100]);

	var yScale = d3.scale.linear()
	    .domain([0, 4])
	    .range([30, bottomAxisY]);

	var xAxis1 = d3.svg.axis()
	    .scale(xScale1Axis)
	    .orient("bottom")
	    .innerTickSize([1])
	    .outerTickSize([1])
	    .tickPadding(10);

	var xAxis2 = d3.svg.axis()
	    .scale(xScale2)
	    .orient("bottom")
	    .innerTickSize([1])
	    .outerTickSize([1])
	    .tickPadding(10);

	var yAxis1 = d3.svg.axis()
	    .scale(yScale)
	    .orient("left")
	    .innerTickSize([1])
	    .outerTickSize([1])
	    .tickValues([]);

	var yAxis2 = d3.svg.axis()
	    .scale(yScale)
	    .orient("right")
	    .innerTickSize([1])
	    .outerTickSize([1])
	    .tickValues([]);

	svg.append("g")
		.style("font", "14px arial")
      	.attr("class", "x axis")
	    .attr("transform", "translate(0,"+(yScale(4)+6)+")")
      	.call(xAxis1.ticks(5));

  	svg.append("g")
      	.attr("class", "y axis")
      	.call(yAxis1)
	    .attr("transform", "translate(" + (leftAxisX + 2) + ",4)");

    svg.append("g")
    	.style("font", "14px arial")
      	.attr("class", "x axis")
	    .attr("transform", "translate(0,"+(yScale(4)+6)+")")
      	.call(xAxis2.ticks(5));

  	svg.append("g")
      	.attr("class", "y axis")
      	.call(yAxis2)
	    .attr("transform", "translate("+ (rightAxisX - 3) +",4)");

	
	//males 
	svg.append("rect")
		.attr("x", xScale2(0))
		.attr("y", yScale(0))
		.attr("width", xScale2(maxMal) - xScale2(0))
		.attr("height", yScale(1) - yScale(0))
		.attr("transform", "translate(-1,5)")
		.style("fill", "#FFD520");

	svg.append("text")
			.attr("x", xScale2(0) - 20)
			.attr("y", yScale(0.5)+10)
			.attr("class", "svgtext")
			.text(""+arrYearGenderRatio[j][0]+"")
			.attr("text-anchor", "middle")
			.style("stroke", "black")
  
	//females 
	svg.append("rect")
		.attr("x", xScale2(maxFem))
		.attr("y", yScale(0))
		.attr("width", xScale2(maxFem) - xScale2(0))
		.attr("height", yScale(1) - yScale(0))
		.attr("transform", "translate("+ -(200 + 2*(xScale2(maxFem) - xScale2(0)))+",5)")
		.style("fill", "#FFD520");

	svg.append("text")
		.attr("x", xScale2(2*maxFem) + 20)
		.attr("y", yScale(0.5)+10)
		.attr("class", "svgtext")
		.text(""+arrYearGenderRatio[j][1]+"")
		.attr("text-anchor", "middle")
		.attr("transform", "translate("+ -(200 + 2*(xScale2(maxFem) - xScale2(0)))+",0)")
		.style("stroke", "black")

/**----------------DO NOT DELETE--------------DO NOT DELETE------------------DO NOT DELETE-----------------*/		
	//first colors 	#ffffff, #F5BDBF, #EA7C7E, #E03A3E
	//alt colors 	#FFD520, #F5A12A, #EA6E34, #E03A3E
/**------------END DO NOT DELETE------------END DO NOT DELETE----------------END DO NOT DELETE-------------*/

	for(k = 0; k < arrYearGenXPRatio[j].length; k++){
		var colorString = "";
		if(k == 0){ 
			colorString = "#F5A12A";
		} else if (k == 1){
			colorString = "#EA6E34";
		} else {
			colorString = "#E03A3E";
		}
		svg.append("rect")
			.attr("x", xScale2(0))
			.attr("y", yScale(k+1))
			.attr("width", xScale2(arrYearGenXPRatio[j][k][1]) - xScale2(0))
			.attr("height", yScale(1) - yScale(0))
			.attr("transform", "translate(-1,5)")
			.style("fill", colorString);

		svg.append("text")
			.attr("x", xScale2(0) - 20)
			.attr("y", yScale(k+1.5)+10)
			.attr("class", "svgtext")
			.text(""+arrYearGenXPRatio[j][k][1]+"")
			.attr("text-anchor", "middle")
			.style("stroke", "black")

		svg.append("rect")
			.attr("x", xScale2(arrYearGenXPRatio[j][k][0]))
			.attr("y", yScale(k+1))
			.attr("width", xScale2(arrYearGenXPRatio[j][k][0]) - xScale2(0))
			.attr("height", yScale(1) - yScale(0))
			.attr("transform", "translate("+ -(200 + 2*(xScale2(arrYearGenXPRatio[j][k][0]) - xScale2(0)))+",5)")
			.style("fill", colorString);

		svg.append("text")
			.attr("x", xScale2(2*arrYearGenXPRatio[j][k][0]) + 20)
			.attr("y", yScale(k + 1.5)+10)
			.attr("class", "svgtext")
			.text(""+arrYearGenXPRatio[j][k][0]+"")
			.attr("text-anchor", "middle")
			.attr("transform", "translate("+ -(200 + 2*(xScale2(arrYearGenXPRatio[j][k][0]) - xScale2(0)))+",0)")
			.style("stroke", "black")
	}

	var labels = ["Total", "Beginner", "Intermediate", "Advanced"];
	var labelNums = [[totFemale, totMale],[begF, begM],[intF, intM],[advF, advM]]

	for(l = 0; l < labels.length; l++){
		svg.append("text")
			.attr("x", width/2)
			.attr("y", yScale(l+0.5)+10)
			.attr("class", "svgtext")
			.text(""+labels[l]+"")
			.attr("text-anchor", "middle")
			.style("stroke", "black")
	}

	for(m = 5; m <= calibration; m+=5){
		svg.append("line")
			.attr("x1",xScale2(m))
			.attr("y1",yScale(0))
			.attr("x2",xScale2(m))
			.attr("y2",yScale(4))
			.attr("transform", "translate(-1,5)")
			.style("stroke-dasharray", ("3, 3"))
			.style("stroke", "black")

		svg.append("line")
			.attr("x1",xScale2(m))
			.attr("y1",yScale(0))
			.attr("x2",xScale2(m))
			.attr("y2",yScale(4))
			.attr("transform", "translate("+ -(200 + 2*(xScale2(m) - xScale2(0)))+",5)")
			.style("stroke-dasharray", ("3, 3"))
			.style("stroke", "black")
	}

	svg.append("text")
		.attr("x", width/2)
		.attr("y", yScale(0.5) - (yScale(0.1)))
		.attr("class", "rubric")
		.text("F | Variable | M")
		.attr("text-anchor", "middle")
		.style("stroke", "silver")

}


// var divTarget = document.getElementById("xpoveryears");

// var seenEv = [];

// for(n = 0; n < arrYearEventList.length; n++){
// 	var yrEvList = arrYearEventList[n];
// 	for(o = 0; o < yrEvList.length; o++){
// 		var strng = yrEvList[o];
// 		if(seenEv.indexOf(strng) == -1){
// 			seenEv.push(strng);
// 		}
// 	}
// }

// var threeVarYrEvPop = [];

// for(p = 0; p < arrYearEventList.length; p++){
// 	var yr = arrYearEventList[p];
// 	for(q = 0; q < seenEv.length; q++){
// 		if(yr.indexOf(seenEv[q]) == -1){
// 			threeVarYrEvPop.push([p+6, q, 0]);
// 		}
// 		else {
// 			var indx = arrYearEventList[p].indexOf(seenEv[q])
// 			threeVarYrEvPop.push([p+6, q, arrYearEventPop[p][indx]]);
// 		}
// 	}
// }

var threeVarYrPopXP = [];

for(r=0;r<arrYearGenXPRatio.length;r++){
	var y = arrYearGenXPRatio[r];
	threeVarYrPopXP.push([r+6,y[0][0] + y[0][1],1])
	threeVarYrPopXP.push([r+6,y[1][0] + y[1][1],2])
	threeVarYrPopXP.push([r+6,y[2][0] + y[2][1],3])
}

/**BEGIN ADAPTED CODE from http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/3d-scatter-draggable/*/
Highcharts.setOptions({
    colors: ['#FFD520', '#E03A3E', '#000000']
});

// Set up the chart
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'xpoveryears',
        margin: 50,
        type: 'scatter3d',
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 30,
            depth: 250,
            viewDistance: 60,
            fitToPlot: false,
            frame: {
                bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                side: { size: 1, color: 'rgba(0,0,0,0.06)' }
            }
        }
    },
    title: {
        text: 'How Population of Beg/Int/Adv has changed over the years'
    },
    subtitle: {
        text: 'Yellow: Beginner, Red: Intermediate, Black: Advanced. Click and drag the box to move it around!'
    },
    plotOptions: {
        	lineWidth: 2,
        scatter: {
            width: 10,
            height: 10,
            depth: 10
        }
    },
    yAxis: {
        min: 0,
        max: 50,
        title: null
    },
    xAxis: {
        min: 5,
        max: 13,
        gridLineWidth: 1
    },
    zAxis: {
        min: 0.5,
        max: 3.5,
        showFirstLabel: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: ' ',
        colorByPoint: true,
        data: threeVarYrPopXP
    }]
});


// Add mouse events for rotation
$(chart.container).on('mousedown.hc touchstart.hc', function (eStart) {
    eStart = chart.pointer.normalize(eStart);

    var posX = eStart.chartX,
        posY = eStart.chartY,
        alpha = chart.options.chart.options3d.alpha,
        beta = chart.options.chart.options3d.beta,
        newAlpha,
        newBeta,
        sensitivity = 5; // lower is more sensitive

    $(document).on({
        'mousemove.hc touchmove.hc': function (e) {
            // Run beta
            e = chart.pointer.normalize(e);
            newBeta = beta + (posX - e.chartX) / sensitivity;
            chart.options.chart.options3d.beta = newBeta;

            // Run alpha
            newAlpha = alpha + (e.chartY - posY) / sensitivity;
            chart.options.chart.options3d.alpha = newAlpha;

            chart.redraw(false);
        },
        'mouseup touchend': function () {
            $(document).off('.hc');
        }
    });
});


// var threeVarYrPopGen = [];

// for(s=0;s<arrYearGenderRatio.length;s++){
// 	var y = arrYearGenderRatio[s];
// 	threeVarYrPopGen.push([s+6,y[1],1]);
// 	threeVarYrPopGen.push([s+6,y[0],2]);
// }

// Highcharts.setOptions({
//     colors: ['#FFD520', '#E03A3E']
// });

// // Set up the chart
// var chart = new Highcharts.Chart({
//     chart: {
//         renderTo: 'genoveryears',
//         margin: 100,
//         type: 'scatter3d',
//         options3d: {
//             enabled: true,
//             alpha: 10,
//             beta: 30,
//             depth: 250,
//             viewDistance: 5,
//             fitToPlot: false,
//             frame: {
//                 bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
//                 back: { size: 1, color: 'rgba(0,0,0,0.04)' },
//                 side: { size: 1, color: 'rgba(0,0,0,0.06)' }
//             }
//         }
//     },
//     title: {
//         text: 'How Population of Divisions by Gender has changed over the years'
//     },
//     subtitle: {
//         text: 'gold: female, red: male. Click and drag the box to see.'
//     },
//     plotOptions: {
//         scatter: {
//             width: 10,
//             height: 10,
//             depth: 10
//         }
//     },
//     yAxis: {
//         min: 0,
//         max: 100,
//         title: null
//     },
//     xAxis: {
//         min: 5,
//         max: 13,
//         gridLineWidth: 1
//     },
//     zAxis: {
//         min: 0.5,
//         max: 2.5,
//         showFirstLabel: false
//     },
//     legend: {
//         enabled: false
//     },
//     series: [{
//         name: 'Reading',
//         colorByPoint: true,
//         data: threeVarYrPopGen
//     }]
// });


// // Add mouse events for rotation
// $(chart.container).on('mousedown.hc touchstart.hc', function (eStart) {
//     eStart = chart.pointer.normalize(eStart);

//     var posX = eStart.chartX,
//         posY = eStart.chartY,
//         alpha = chart.options.chart.options3d.alpha,
//         beta = chart.options.chart.options3d.beta,
//         newAlpha,
//         newBeta,
//         sensitivity = 5; // lower is more sensitive

//     $(document).on({
//         'mousemove.hc touchmove.hc': function (e) {
//             // Run beta
//             e = chart.pointer.normalize(e);
//             newBeta = beta + (posX - e.chartX) / sensitivity;
//             chart.options.chart.options3d.beta = newBeta;

//             // Run alpha
//             newAlpha = alpha + (e.chartY - posY) / sensitivity;
//             chart.options.chart.options3d.alpha = newAlpha;

//             chart.redraw(false);
//         },
//         'mouseup touchend': function () {
//             $(document).off('.hc');
//         }
//     });
// });

/*END ADAPTED CODE**/

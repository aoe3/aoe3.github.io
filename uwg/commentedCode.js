/***This used getJSON. Switche to AJAX****/
// $.getJSON("JSONS/06th-uwg.json", function(data) {
// 	var people = data;
// 	var targetDiv = document.getElementById("breakdown");
// 	var seen = [];
// 	var competitors = [];

// 	for(i = 0; i < people.length; i++){
// 		var person = people[i];
// 		var pName = person.name;
// 		var pGender = person.gender;
// 		var pXP = person.experienceLevel;
// 		var ev = person.event;
// 		var index = seen.indexOf(pName);
// 		if(index == -1){
// 			seen.push(pName);
// 			competitors.push([pName, pGender, pXP, [ev]]);
// 		} else {
// 			var eventList = competitors[index][3];
// 			eventList.push(ev);
// 			competitors[index][3] = eventList;
// 		}
// 	}

// 	y6.push(competitors);

// })

// $.getJSON("JSONS/07th-uwg.json", function(data) {
// 	var people = data;
// 	var targetDiv = document.getElementById("breakdown");
// 	var seen = [];
// 	var competitors = [];

// 	for(i = 0; i < people.length; i++){
// 		var person = people[i];
// 		var pName = person.name;
// 		var pGender = person.gender;
// 		var pXP = person.experienceLevel;
// 		var ev = person.event;
// 		var index = seen.indexOf(pName);
// 		if(index == -1){
// 			seen.push(pName);
// 			competitors.push([pName, pGender, pXP, [ev]]);
// 		} else {
// 			var eventList = competitors[index][3];
// 			eventList.push(ev);
// 			competitors[index][3] = eventList;
// 		}
// 	}

// 	y7.push(competitors);

// })

// $.getJSON("JSONS/08th-uwg.json", function(data) {
// 	var people = data;
// 	var targetDiv = document.getElementById("breakdown");
// 	var seen = [];
// 	var competitors = [];

// 	for(i = 0; i < people.length; i++){
// 		var person = people[i];
// 		var pName = person.name;
// 		var pGender = person.gender;
// 		var pXP = person.experienceLevel;
// 		var ev = person.event;
// 		var index = seen.indexOf(pName);
// 		if(index == -1){
// 			seen.push(pName);
// 			competitors.push([pName, pGender, pXP, [ev]]);
// 		} else {
// 			var eventList = competitors[index][3];
// 			eventList.push(ev);
// 			competitors[index][3] = eventList;
// 		}
// 	}

// 	y8.push(competitors);

// })

// $.getJSON("JSONS/09th-uwg.json", function(data) {
// 	var people = data;
// 	var targetDiv = document.getElementById("breakdown");
// 	var seen = [];
// 	var competitors = [];

// 	for(i = 0; i < people.length; i++){
// 		var person = people[i];
// 		var pName = person.name;
// 		var pGender = person.gender;
// 		var pXP = person.experienceLevel;
// 		var ev = person.event;
// 		var index = seen.indexOf(pName);
// 		if(index == -1){
// 			seen.push(pName);
// 			competitors.push([pName, pGender, pXP, [ev]]);
// 		} else {
// 			var eventList = competitors[index][3];
// 			eventList.push(ev);
// 			competitors[index][3] = eventList;
// 		}
// 	}

// 	y9.push(competitors);

// })

// $.getJSON("JSONS/10th-uwg.json", function(data) {
// 	var people = data;
// 	var targetDiv = document.getElementById("breakdown");
// 	var seen = [];
// 	var competitors = [];

// 	for(i = 0; i < people.length; i++){
// 		var person = people[i];
// 		var pName = person.name;
// 		var pGender = person.gender;
// 		var pXP = person.experienceLevel;
// 		var ev = person.event;
// 		var index = seen.indexOf(pName);
// 		if(index == -1){
// 			seen.push(pName);
// 			competitors.push([pName, pGender, pXP, [ev]]);
// 		} else {
// 			var eventList = competitors[index][3];
// 			eventList.push(ev);
// 			competitors[index][3] = eventList;
// 		}
// 	}

// 	y10.push(competitors);

// })

// $.getJSON("JSONS/11th-uwg.json", function(data) {
// 	var people = data;
// 	var targetDiv = document.getElementById("breakdown");
// 	var seen = [];
// 	var competitors = [];

// 	for(i = 0; i < people.length; i++){
// 		var person = people[i];
// 		var pName = person.name;
// 		var pGender = person.gender;
// 		var pXP = person.experienceLevel;
// 		var ev = person.event;
// 		var index = seen.indexOf(pName);
// 		if(index == -1){
// 			seen.push(pName);
// 			competitors.push([pName, pGender, pXP, [ev]]);
// 		} else {
// 			var eventList = competitors[index][3];
// 			eventList.push(ev);
// 			competitors[index][3] = eventList;
// 		}
// 	}

// 	y11.push(competitors);

// })

// $.getJSON("JSONS/12th-uwg.json", function(data) {
// 	var people = data;
// 	var targetDiv = document.getElementById("breakdown");
// 	var seen = [];
// 	var competitors = [];

// 	for(i = 0; i < people.length; i++){
// 		var person = people[i];
// 		var pName = person.name;
// 		var pGender = person.gender;
// 		var pXP = person.experienceLevel;
// 		var ev = person.event;
// 		var index = seen.indexOf(pName);
// 		if(index == -1){
// 			seen.push(pName);
// 			competitors.push([pName, pGender, pXP, [ev]]);
// 		} else {
// 			var eventList = competitors[index][3];
// 			eventList.push(ev);
// 			competitors[index][3] = eventList;
// 		}
// 	}

// 	y12.push(competitors);

// })

// $.getJSON("JSONS/13th-uwg.json", function(data) {
// 	var people = data;
// 	var targetDiv = document.getElementById("breakdown");
// 	var seen = [];
// 	var competitors = [];

// 	for(i = 0; i < people.length; i++){
// 		var person = people[i];
// 		var pName = person.name;
// 		var pGender = person.gender;
// 		var pXP = person.experienceLevel;
// 		var ev = person.event;
// 		var index = seen.indexOf(pName);
// 		if(index == -1){
// 			seen.push(pName);
// 			competitors.push([pName, pGender, pXP, [ev]]);
// 		} else {
// 			var eventList = competitors[index][3];
// 			eventList.push(ev);
// 			competitors[index][3] = eventList;
// 		}
// 	}

// 	y13.push(competitors);

// })

/**THIS STUFF FOR ABOVE TESTING***/

	// console.log("There were "+competitors.length+" competitors this year!");
	// var females = 0;
	// var males = 0;

	// for (j = 0; j<competitors.length; j++){
	// 	if(competitors[j][1] == "F"){
	// 		females++;
	// 	} else {
	// 		males++;
	// 	}
	// }

	// console.log("There were "+females+" competitors in female divisions this year!");
	// console.log("There were "+males+" competitors in male divisions this year!");

	// var numBeg = 0;
	// var numInt = 0;
	// var numAdv = 0;

	// for (k = 0; k<competitors.length; k++){
	// 	if(competitors[k][2] == "Beg"){
	// 		numBeg++;
	// 	} else if(competitors[k][2] == "Int"){
	// 		numInt++;
	// 	} else {
	// 		numAdv++;
	// 	}
	// }


	// console.log("There were "+numBeg+" competitors in beginner events this year!");
	// console.log("There were "+numInt+" competitors in intermediate events this year!");
	// console.log("There were "+numAdv+" competitors in advanced events this year!");

for(j = 0; j < arrYearData.length; j++){
	var yrNum = j + 6;
	console.log(yrNum+"th Wushu Games Stats");
	console.log(arrYearPopulation[j] + " competitors");
	console.log(arrYearGenderRatio[j][0] + " in male divisions and "+ arrYearGenderRatio[j][1] + " in female divisions.");
	console.log(arrYearXPRatio[j][0] +" in beginner, "+arrYearXPRatio[j][1]+" in intermediate, and "+arrYearXPRatio[j][2]+" in advanced.");
	console.log(arrYearGenXPRatio[j][0][0]+":"+arrYearGenXPRatio[j][0][1]+" BEG F division competitors:BEG M division competitors, "
				+arrYearGenXPRatio[j][1][0]+":"+arrYearGenXPRatio[j][1][1]+" INT F division competitors:INT M division competitors, "
				+arrYearGenXPRatio[j][2][0]+":"+arrYearGenXPRatio[j][2][1]+" ADV F division competitors:ADV M division competitors.");
	console.log(" ");
}

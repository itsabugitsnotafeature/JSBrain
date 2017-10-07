/* 
    You are on a biz trip and travelling from one city to another. 
    You have a stack of unsorted flight boarding passes. 
    Only departure city and destination city are on the boarding pass. 
    How do you find the first departure city and your final destination city, 
    Write the solution in javascript.


 */

let passes = [
    {
        id: 8810,
        depart: "SFO",
        arrival: "NY"
    },
    {
        id: 8809,
        depart: "NDLS",
        arrival: "MUM"
    },
    {
        id: 8808,
        depart: "DUBAI",
        arrival: "BER"
    },
    {
        id: 8807,
        depart: "PERTH",
        arrival: "TOKYO"
    },
    {
        id: 8806,
        depart: "MUM",
        arrival: "HYD"
    },
    {
        id: 8805,
        depart: "HYD",
        arrival: "LDN"
    },
    {
        id: 8804,
        depart: "CCU",
        arrival: "SFO"
    },
    {
        id: 8803,
        depart: "LDN",
        arrival: "CCU"
    },
    {
        id: 8802,
        depart: "TOKYO",
        arrival: "DUBAI"
    },
    {
        id: 8801,
        depart: "BER",
        arrival: "NDLS"
    }
];

let flightsMap,
    destMap,
    startCity,
    tripItinerary;

flightsMap = new Map();
destMap = new Map();
tripItinerary = new Array();

/*
    1. Create a MAP storing (flightsMap)
        SRC --> setTo --> DEST
    2. Create a MAP storing (destMap)
        DEST --> setTo --> 'true'
*/ 
passes.forEach((stop,index) => {
    flightsMap.set(stop.depart, stop.arrival);
    destMap.set(stop.arrival, 'true');
});

/*  Now, Only the START location of the Itinerary,
    will NOT have an entry in destMap, 
    Because user never arrived there !
        (Because it was the start point)
    
    Threrefore, figure out the START CITY
*/
flightsMap.forEach((destCity,arrCity) => {
   if(!destMap.has(destCity)){
        startCity = destCity;
   } else if (!destMap.has(arrCity)){
        startCity = arrCity;
   }
});

// Assing Start City to Local Var
let curCity = startCity;

// Push First City in the Itinerary array as start Location
tripItinerary.push(startCity);

/*
    For Each PASS in PASSES
        SET 'curCity' to its DEST from 'flightsMap'
        Push 'curCity' to  Itinerary array 
*/
for(let i=1 ; i<(passes.length+1) ; i++  ){
    curCity = flightsMap.get(curCity);
    tripItinerary.push(curCity);
}

console.log( JSON.stringify (tripItinerary))
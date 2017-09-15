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

// STORE THE FLIGHTS IN A DICT AND THE LIST OF DST
passes.forEach((stop,index) => {
    flightsMap.set(stop.depart, stop.arrival);
    destMap.set(stop.arrival, 'true');
});

// FIND FIRST FLIGHT
flightsMap.forEach((destCity,arrCity) => {
   if(!destMap.has(destCity)){
        startCity = destCity;
   } else if (!destMap.has(arrCity)){
        startCity = arrCity;
   }
});

let curCity = startCity;

tripItinerary.push(startCity);
for(let i=1 ; i<(passes.length+1) ; i++  ){
    curCity = flightsMap.get(curCity);
    tripItinerary.push(curCity);
}

console.log( JSON.stringify (tripItinerary))
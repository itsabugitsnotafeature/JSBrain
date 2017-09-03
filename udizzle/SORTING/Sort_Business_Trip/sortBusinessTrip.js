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

let fDeparture,
    fArrival,
    tripList,
    itinerary = [];
let tripMap = new Map();

passes.forEach(function (stop) {
    if (tripMap.has(stop.depart)) {
        let payload = tripMap.get(stop.depart)
        payload.dep.push(stop.id)

    } else {
        let payload = {
            dep: [stop.id],
            arr: []
        }
        tripMap.set(stop.depart, payload)
    }
    if (tripMap.has(stop.arrival)) {
        let payload = tripMap.get(stop.arrival)
        payload.arr.push(stop.id)
    } else {
        let payload = {
            dep: [],
            arr: [stop.id]
        }
        tripMap.set(stop.arrival, payload)
    }
});


while (itinerary.length != tripMap.size) {
    debugger;
    tripMap.forEach(function(eachStop){
        if(eachStop.dep.length === 0) {
            fDeparture = eachStop
        }
    });
}

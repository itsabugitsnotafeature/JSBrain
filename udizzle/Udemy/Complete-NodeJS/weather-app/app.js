const request = require('request');
const URL = "http://maps.googleapis.com/maps/api/geocode/json?address=1776%20Botelho%20Drive%20Walnut%20Creek";

let options = {
    url: URL,
    json: true
}

request(options, (error, response, body) => {
    // console.log('body:', JSON.stringify(response, null, 2)); 
    // console.log('body:', JSON.stringify(body, null, 2)); 
    // console.log('Address:', JSON.stringify(body, null, 2));
    console.log('Latitude:', JSON.stringify(body.results[0].geometry.location.lat, null, 2));
    console.log('Longitude:', JSON.stringify(body.results[0].geometry.location.lng, null, 2));
});
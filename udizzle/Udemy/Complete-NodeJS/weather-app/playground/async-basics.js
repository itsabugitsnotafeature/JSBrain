const request = require('request');

let url = "http://maps.googleapis.com/maps/api/geocode/json?address=1776%20Botelho%20Drive%20Walnut%20Creek";

request(url, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    console.log('body:', body); 
});
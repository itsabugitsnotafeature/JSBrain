 'use strict'
const request = require('request');

// https://api.darksky.net/forecast/dfa9305af159d2eebad03ad021feb6d1/37.8935402,-122.064258


function getGeocodeAddress(address) {
    return new Promise((resolve, reject)=> {
        let options = {
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }
        request(options, (error, response, body) => {
            if(error) {
                reject ("Received Error: " + JSON.stringify(error, null, 2));
            } else if(body.status === 'OK') {
                resolve ({
                    formatted_address: body.results[0].formatted_address,
                    longitude: body.results[0].geometry.location.lng,
                    latitude: body.results[0].geometry.location.lat
                });
            } else if(body.status === 'ZERO_RESULTS') {
                reject ('No valid results found');
            } else {
                reject ('Something back heppened');
            }
        });
    })
}

module.exports = {
    getGeocodeAddress
}
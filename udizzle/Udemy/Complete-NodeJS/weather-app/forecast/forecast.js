'use strict'
// https://api.darksky.net/forecast/dfa9305af159d2eebad03ad021feb6d1/37.8935402,-122.064258

const API_KEY = 'dfa9305af159d2eebad03ad021feb6d1';
const request = require('request');



function getCurrentForecast(lat, lng) {
    debugger
    return new Promise((resolve, reject)=> {
        let options = {
            url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
            json: true
        }
        request(options, (error, response, body) => {
            if(error) {
                reject ("Received Error: " + JSON.stringify(error, null, 2));
            } else if(body.status === 'OK') {
                debugger
                resolve ({
                    resp: body.results.currently
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
    getCurrentForecast
}
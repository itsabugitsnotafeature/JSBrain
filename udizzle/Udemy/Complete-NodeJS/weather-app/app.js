const request = require('request');
const yargs = require('yargs');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: "Address to fetch weather for",
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(JSON.stringify(argv, null, 2));

const geocode = require('./geocode/geocode.js');
const forecast = require('./forecast/forecast.js');

geocode.getGeocodeAddress(argv.a)
.then((resp) => {
    console.log(JSON.stringify(resp, null, 2));
    fetchAndDisplayWeather(resp.latitude, resp.longitude);
}).catch((err) => {
    console.error("Whoops from GeoCode!");
    console.error(err);
})

function fetchAndDisplayWeather(lat, lng) {
    
    forecast.getCurrentForecast(lat, lng)
    .then((curForecast) =>{
        console.log(JSON.stringify(curForecast, null, 2));
    })
    .catch((err)=>{
        console.error("Whoops from Forecast!");
        console.error(err);
    })
}

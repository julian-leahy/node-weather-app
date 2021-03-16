const request = require('postman-request');
const KEYS = require('./../secret.js');

const forecast = (lat, lon, callback) => {

    const query = `${lat},${lon}`;
    const url = `http://api.weatherstack.com/current?access_key=${KEYS.WEATHER_API_KEY}&query=${query}`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Could not reach weather services', undefined);
        } else if (response.success === false) {
            callback('Could not find location', undefined);
        } else {
            callback(undefined, response.body.current)
        }
    })
}

module.exports = forecast;
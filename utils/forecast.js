const request = require('postman-request');
const KEYS = require('./../secret.js');

const forecast = (lat, lon, callback) => {

    const query = `${lat},${lon}`;
    const url = `http://api.weatherstack.com/current?access_key=${KEYS.WEATHER_API_KEY}&query=${query}`;
    request({ url, json: true }, (error, { success, body }) => {
        if (error) {
            callback('Could not reach weather services', undefined);
        } else if (success === false) {
            callback('Could not find location', undefined);
        } else {
            callback(undefined, body.current)
        }
    })
}

module.exports = forecast;
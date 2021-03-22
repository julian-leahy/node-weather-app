const request = require('postman-request');
const KEYS = require('../secret.js');

const forecast = (lat, lon, callback) => {

    const query = `${lat},${lon}`;
    const url = `http://api.weatherstack.com/current?access_key=${KEYS.WEATHER_API_KEY}&query=${query}`;
    request({ url, json: true }, (error, { success, body }) => {
        if (error) {
            callback('Could not reach weather services', undefined);
        } else if (success === false) {
            callback('Could not find location', undefined);
        } else {
            const forecastString = `It is currently ${body.current.temperature} degress and ${body.current.weather_descriptions[0].toLowerCase()}. There is a ${body.current.precip}% chance of rain.`
            callback(undefined, forecastString)
        }
    })
}

module.exports = forecast;
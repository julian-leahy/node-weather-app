const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode('Wellington New Zealand', (error, data) => {
    if (error) {
        return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(data.location)
        console.log(forecastData);
    })

})
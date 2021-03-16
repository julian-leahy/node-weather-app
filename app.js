const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode('Wellington New Zealand', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.location)
        forecast(data.latitude, data.longitude, (error, data) => {
            console.log(error);
            console.log(data);
        })
    }
})
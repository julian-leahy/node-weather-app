const request = require('postman-request');
const KEYS = require('./../secret.js');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${KEYS.MAP_BOX_API_KEY}&limit=1`
    request({ url, json: true }, (error, response, { features }) => {
        if (error) {
            callback('Could not reach weather services', undefined);
        } else if (features.length === 0) {
            callback('Could not find location', undefined);
        } else {
            callback(undefined, {
                location: features[0].place_name,
                longitude: features[0].center[0],
                latitude: features[0].center[1],
            })
        }
    })
}

module.exports = geocode;
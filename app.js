const request = require('postman-request');
const KEYS = require('./secret.js');
const geocode = require('./utils/geocode.js');



geocode('Wellington NZ', (error, data) => {
    console.log(error);
    console.log(data);
})
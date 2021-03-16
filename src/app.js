const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home Page'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    });
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'This is a message for the help page!'
    });
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Wellington'
    });
})



app.listen('3000', () => {
    console.log('Server running on port 3000')
})
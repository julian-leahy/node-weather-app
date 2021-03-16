const path = require('path');
const express = require('express');

const publicDir = path.join(__dirname, '../public');

const app = express();
app.use(express.static(publicDir));


app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Wellington'
    });
})



app.listen('3000', () => {
    console.log('Server running on port 3000')
})
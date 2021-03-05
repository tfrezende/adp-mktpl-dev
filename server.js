const express = require('express');
const request = require('request');
require('dotenv').config();

const app = express();
const baseUrl = 'https://api.yelp.com/v3/businesses';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/businesses/', (req, res) => {
    request({
        url: `${baseUrl}/search?location=alpharetta&term=ice%cream`,
        headers: {
            'Authorization': 'Bearer ' + process.env.API_KEY
        }
        
    }, (error, response, body) => {
        res.json(JSON.parse(body));    
    })
});
app.get('/api/business/', (req, res) => {    
    const id = req.query.id;
    request({
        url: `${baseUrl}/${id}`,
        headers: {
            'Authorization': 'Bearer ' + process.env.API_KEY
        }
        
    }, (error, response, body) => {
        res.json(JSON.parse(body));   
    })
});
app.get('/api/business/reviews', (req, res) => {
    const id = req.query.id;
    request({
        url: `${baseUrl}/${id}/reviews`,
        headers: {
            'Authorization': 'Bearer ' + process.env.API_KEY
        }
        
    }, (error, response, body) => {
        res.json(JSON.parse(body));   
    })
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server listening on port ' + PORT));


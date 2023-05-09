'use strict'

// loading modules from node to create http server
var express = require('express');
var bodyParser = require('body-parser');

// express execution  (http)
var app = express();

// load paths from file
var article_routes = require('./controller/restcontroller')

// middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());              // convert any request comming to JSON format

// CORS

// add pre-string to paths
app.use('/api', article_routes);

// path and test method to API REST
// rmt - this is an old version to test [express] without router
/* 
app.get('/test1', (req, res) => {
   console.log('hola mundo');      // show 'hola mundo' in console
});

app.get('/test2', (req, res) => {
    // show list in browser
    return res.status(200).send(`
    <ul>
      <li>NodeJS</li>
      <li>Angular</li>
      <li>React</li>
      <li>Vue</li>
    </ul>   
    `)
});

app.get('/test3', (req, res) => {
    // show json in browser
    return res.status(200).send({
        curso: 'master en framework js',
        autor: 'Ruben Murga',
        url: 'https://github.com/rmurgat'
    });
});
*/

// exportr module (this file)
module.exports = app;
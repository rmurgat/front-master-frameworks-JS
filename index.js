'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true })
        .then(() => {
            console.log('--MongoDB connection using Mongoose is ready--');

            // creating http server to listen requests
            app.listen(port, () => {
                console.log('Server running in http://localhost:'+port);
            });
});
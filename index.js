'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true })
        .then(() => {
            console.log('la conexión es correctita');

            // crear servidor para escuchar peticiones http
            app.listen(port, () => {
                console.log('servidor corriendo en http://localhost:'+port);
            });
});
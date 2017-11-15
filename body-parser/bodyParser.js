var express = require('express');
var path = require('path');
var fs = require('fs');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + 'index.html');
})
app.post('/', function(req, res) {
    res.end(JSON.stringify(req.body));

})

app.listen(1337, function() {
    console.log('Listenilng at port 1337');

})
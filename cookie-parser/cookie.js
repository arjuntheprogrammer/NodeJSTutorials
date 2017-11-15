var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
app.get('/', function(req, res) {
    res.cookie('myCookie', 'someValue');
    res.end("Hello World!!!");

});
app.get('/removeCookie', function(req, res) {
    res.clearCookie('myCookie');
    res.end("Cookie Removed");

});
app.listen(1337, function() {
    console.log('Yeah??');
})
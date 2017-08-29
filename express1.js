var express = require('express');
var app = express()

app.get('/', function(req, res){
  console.log('Got a get request for the homepage');
  res.send('Hello GET');
})

app.post('/', function(req, res){
  console.log("Got a post requst for the homepage");
  res.send('hello post');
})

app.delete('/del_user', function(req, res){
  console.log('Got a delete req for /del_user');
  res.send('Hello Delete');
})

app.get('/list_user', function(req, res){
  console.log("Got a get request for /list_user");
  res.send('Page listing');
})
app.get('/ab*cd', function(req, res){
  console.log("Got a get request for /ab*cd");
  res.send('Page pattern match');
})

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log(host);
  console.log("Example app listening at http://%s:%s", host, port);
})

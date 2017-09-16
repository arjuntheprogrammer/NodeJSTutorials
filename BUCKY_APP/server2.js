var connect = require('connect');
var http = require('http');
var app = connect();


function doFirst(request, response, next){
  console.log("first");
  next();  //for calling next function
}
function doSecond(request, response, next){
  console.log("second");
  next();
}

app.use(doFirst);
app.use(doSecond);


http.createServer(app).listen(8888);
console.log("server is running ");

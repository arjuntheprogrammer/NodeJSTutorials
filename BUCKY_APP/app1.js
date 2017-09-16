var fs = require('fs');
fs.writeFileSync("corn.txt", "Corn is Good, Corn is Life");
console.log(fs.readFileSync("corn.txt").toString());


var path = require('path')

var websiteHome  = "Desktop/Bucky//index.html";
var websiteAbout = "Desktop/Bucky/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));



console.log(__dirname);
console.log(__filename);


//runs once only
setTimeout(function(){
  console.log("only once here");
}, 2000);


//runs repetitevly
setInterval(function(){
  console.log("here");
}, 2000);

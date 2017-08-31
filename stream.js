var fs = require('fs');

var readeable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/textcopy.txt');

readeable.on('data', function(chunk) {

    console.log(chunk.length);
    writable.write(chunk);

});
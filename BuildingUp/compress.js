var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/textcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/textCompressed.txt');
var gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);
var http = require('http')
var userCount = 0;
var server = http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') {
        console.log('favicon');
        res.end();
        return;
    }
    userCount++;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Hello\n");
    res.write("We have had " + userCount + ' visit(s)!\n');
    res.end();

});
server.listen(9090);
console.log('server running');
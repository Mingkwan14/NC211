var http = require('http');
const { lstat } = require('fs');

http.createServer(function (req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write('<h1> Hello Nodej5</h1>')
    res.write('<p>This id my first NodeJS app.js.</p>');
    res.end();

}).listen(8080);

console.log('NodeJS is running!');
console.log('To quit, press Ctrl+C');
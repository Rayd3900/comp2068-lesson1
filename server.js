// create the http object (and include it's file)
var http = require('http');

// start the server
http.createServer(function(request, response) {
  // send http status code (OK)
  response.writeHead(200);
  response.end('My fist node page!');
}) .listen(3000); // 3000 is commonly the most used port for NODEJS


console.log('server running on port 3000');

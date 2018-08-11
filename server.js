const net = require('net');
const uriContent = require('./uri-content');

const port = 8080;

const server = net.createServer(function(request) {
  console.log("request received", request);

});

server.listen(port, function(){
  console.log("Server listening at http://localhost:" + port);
});
const net = require('net');
const uriContent = require('./uri-content');

const port = 8080;

const server = net.createServer(function(request) {
  console.log("request received");

  request.on('data', function(data) {

    let stringData = data.toString();
    //console.log("stringData: ", stringData);
    let arrayData = stringData.split('\n');
    //console.log("arrayData: ", arrayData);
    let firstLineElements = arrayData[0].split(" ");
    //console.log("firstLineElements: ", firstLineElements);
    let reqMethod = firstLineElements[0];
    //console.log("reqMethod: ", reqMethod);
    let reqFile = firstLineElements[1];
    console.log("reqFile: ", reqFile);

});

server.listen(port, function(){
  console.log("Server listening at http://localhost:" + port);
});
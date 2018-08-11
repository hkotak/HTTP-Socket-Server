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


    let date = new Date().toUTCString();
    //console.log("date: ", date);
    let body = null;
    if(reqMethod==="GET"){
      switch (reqFile){
        //case "undefined"

        case "/":
            body = uriContent.getIndex();
            break;
        case "/index.html":
            body = uriContent.getIndex();
            break;
        case "/hydrogen.html":
            body = uriContent.getHydrogen();
            break;
        case "/helium.html":
            body = uriContent.getHelium();
            break;
        case "/css/styles.css":
            body = uriContent.getStyles();
            break;
        default:
            body = uriContent.get404();
      }
    }else{
      body = uriContent.get404();
    }


    request.write(`HTTP/1.1 200 OK\nServer: Harsh 'n Chaz's Server\nDate: ${date}\n\n${body}`);

    request.end();
  });
});

server.listen(port, function(){
  console.log("Server listening at http://localhost:" + port);
});
//requiring http module from node_module
let http = require('http'); //http is a core module. its always loaded automatically by nodejs

//onRequest fn accepts 2 params request and response
function onRequest(request, response){
    response.writeHead(200, {'Content-type' : 'text/plain'});
    response.write('Hello World');
    response.end();
}
//creating a server
http.createServer(onRequest).listen(8000);

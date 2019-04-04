const http = require ('http');

http.createServer(function(req,res){
res.writeHead(404,{'content-type':'text/html'})
res.write ('<h1>Hola mundo node </h1>');
res.end();
}).listen(3000);//en que puerto ejecutara tu servidor 
var express = require("express")
var app = express();

var http = require("http").createServer(app);
var io =  require("socket.io")(http);

//inicia o servidor
http.listen(3000, function () {
    console.log("Servidor iniciado");
    
});
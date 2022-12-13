var express = require('express');
var app = express();

//Recursos
app.use(express.static(__dirname+'/'));

app.listen(3000);
console.log('server on port 3000');
var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());
var conexion = mysql.createConnection({
    host: "52.203.124.40",
    user: "jhanmarco",
    password: "1234",
    database: "dbRestaurante",
  });

  conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

  const puerto = process.env.PUERTO || 3000;


app.post("/api/pedido", (req, res) => {
	let data = {
    	userped: req.body.USERPED,
        emausped: req.body.EMAUSPED,
    	celusped: req.body.CELUSPED,
    	foodped: req.body.FOODPED,
    	msgped: req.body.MSGPED
	};
	let sql = "INSERT INTO pedido SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });
  var express = require('express');
  var app = express();
  
  //Recursos
  app.use(express.static(__dirname+'/'));
  
  app.listen(3000);
  console.log('server on port 3000');
  
  app.get('/', function (req, res) {
    res.sendFile(dirname + "/index.html");
});

app.get('/login', function (req, res) {
    res.sendFile(dirname + "/login.html");
});
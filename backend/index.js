//Cree una API en NodeJS GET /menu que muestre la información de la BD.
var express = require('express');
var app = express();

var mysql = require('mysql');

app.get('/menu', menu);

function menu(req, res){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'utec',
        password : '1234567890',
        database : 'restaurant'
      });

    connection.connect();

    const myQuery = " SELECT nombre_plato, precio, " +
                    " created_date, modified_date " +
                    " FROM menu; ";

    connection.query(myQuery, function (error, results, fields) {

      res.send(results);
      connection.end();
  });
}

app.listen(3000, function(){
  console.log("Port 3000 is listening")
});
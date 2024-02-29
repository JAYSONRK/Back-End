const express = require('express');
const app = express();

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.get('/about', function(req, res){
//    res.send("welcome to about page");
   res.status(200).send("welcome to about page");
});

// error page
app.get('*', function(req, res){
   //    res.send("welcome to about page");
      res.status(404).send("404 Error page!!!");
   });

app.listen(8000);
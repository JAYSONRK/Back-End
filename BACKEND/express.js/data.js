const express = require('express');
const app = express();

// html
app.get('/', function(req, res){
//    res.send("<h1>Hello World!</h1>");
   res.write("<h1>Im fullstack developer</h1>");
   res.send();
});

// JSON
app.get('/api', function(req, res){
    
//    res.send({
//         id: 1,
//         name: 'jayson',
//         profession: 'fullstack developer'
//    });


res.json({
    id: 1,
    name: 'jayson',
    profession: 'fullstack developer'
});
});

app.listen(8000);
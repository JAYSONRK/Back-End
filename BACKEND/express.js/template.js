const express = require('express');
const app = express();
const path = require('path');

// building middleware
const staticPath = path.join(__dirname, './public');

// to set view engine
app.set('view engine', 'hbs');


// template engine root
app.get('/', (req, res) => {
    res.render('index', { prop: 'Jayson Robert Kennedy'});
  })

app.use(express.static(staticPath));
app.listen(8000);
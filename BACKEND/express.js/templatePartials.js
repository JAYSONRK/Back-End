const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const staticPath = path.join(__dirname, './public');
const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set('views', templatePath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index', { prop: 'Jayson Robert Kennedy'});
});

app.use(express.static(staticPath));
app.listen(8000);

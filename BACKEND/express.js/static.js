const express = require('express');
const app = express();
const path = require('path');

// building middleware
const staticPath = path.join(__dirname, './public');

app.use(express.static(staticPath));
app.listen(8000);
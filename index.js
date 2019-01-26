const express = require('express');
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res ) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

app.listen(PORT, HOST);
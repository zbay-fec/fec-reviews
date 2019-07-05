const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('../database/db.js');
const port = 3000;

app.use(express.static(path.join(__dirname, './dist')));
app.use(cors);

app.get('/', (req, res) => {
    res.send('You hit the server')
});

app.listen(port, () => console.log('Listening on port: ', port));
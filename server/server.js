require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('../database/db.js');
const port = 3003;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(express.json());

app.post('/reviews', (req, res) => {
    let body = req.body.prod_id;
    db(body, (err, data) => {
       if (err) {
           res.end();
       } else {
           res.send(data);
       }
    });
});

app.listen(port, () => console.log('Listening on port: ', port));
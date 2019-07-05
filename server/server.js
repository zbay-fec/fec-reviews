const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('../database/db.js');
const port = 3003;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.get('/reviews', (req, res) => {
    let body = req.body.name;
    db.getAllReviews(body, (err, data) => {
       if (err) {
           console.log(err);
       } else {
           res.send(data);
       }
    });
});

// test get
// app.get('/', (req, res) => {
//     res.send('You hit the server')
// });

app.listen(port, () => console.log('Listening on port: ', port));
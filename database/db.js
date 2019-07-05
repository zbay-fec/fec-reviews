const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
    if (err) {
        throw err;
    } else {
        console.log('Connection established');
    }
});

const getAllReviews = cb => {
    connection.query('SELECT name, review_score, review_text FROM reviews;', (err, data) => {
        if (err) {
            throw err;
        } else {
            cb(null, data);
        }
    });
}

module.exports = getAllReviews;
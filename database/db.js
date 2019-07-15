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

const getAllReviews = (id, cb) => {
    connection.query(`SELECT username, review_score, review_text FROM reviews WHERE prod_id="${id}";`, (err, data) => {
        if (err) {
            console.log('Error, ', err);
        } else {
            cb(null, data);
        }
    });
}

module.exports = getAllReviews;
require('dotenv').config();
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints : ['127.0.0.1'], localDataCenter: 'datacenter1'});
client.connect(function(err, result){
  console.log('cassandra connected');
});

const getAllReviews = (id, cb) => {
    client.execute(`SELECT name, rating, paragraph FROM sdc.reviews WHERE id=${id};`, (err, data) => {
        if (err) {
            console.log('Error, ', err);
        } else {
            cb(null, data);
        }
      });
}

const addAReview = (obj, cb) => {
    connection.query(`INSERT INTO reviews (reviewgroup, name, rating, paragraph) VALUES ("${obj.prod_id}", "${obj.username}", ${obj.review_score}, "${obj.review_text}");`, (err, data) => {
        if (err) {
            console.log('Error, ', err);
        } else {
            cb(null, data);
        }
    })
}

// const Pool = require('pg').Pool;
// const pool = new Pool({
//   user: 'fill in user here',
//   host: 'localhost',
//   database: 'sdc',
//   password: 'fill in password here',
//   port: 5432,
// })


// const getAllReviews = (id, cb) => {
//   console.log(id);
//     pool.query(`SELECT name, rating, paragraph FROM reviews INNER JOIN products ON products.reviewgroup = reviews.reviewgroup WHERE products.id=${id};`, (err, data) => {
//         if (err) {
//             console.log('Error, ', err);
//         } else {
//             console.log(data);
//             cb(null, data);
//         }
//     });
// }

// const addAReview = (obj, cb) => {
//     connection.query(`INSERT INTO reviews (prod_id, username, review_score, review_text) VALUES ("${obj.prod_id}", "${obj.username}", ${obj.review_score}, "${obj.review_text}");`, (err, data) => {
//         if (err) {
//             console.log('Error, ', err);
//         } else {
//             cb(null, data);
//         }
//     })
// }

module.exports = {getAllReviews, addAReview};
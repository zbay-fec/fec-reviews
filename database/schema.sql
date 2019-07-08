DROP DATABASE IF EXISTS product_reviews;
CREATE DATABASE product_reviews;
USE product_reviews;

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prod_id VARCHAR(100),
    username VARCHAR(50),
    review_score int,
    review_text TEXT
);

LOAD DATA LOCAL INFILE './reviews.csv'
INTO TABLE reviews
FIELDS TERMINATED BY ','
-- IGNORE 1 ROWS
(prod_id, username, review_score, review_text);
-- INSERT INTO reviews (prod_id, username, review_score, review_text) VALUES ('DQS532z', 'jaybone', 2, 'this product sucks');
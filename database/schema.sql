DROP DATABASE IF EXISTS product_reviews;
CREATE DATABASE product_reviews;
USE product_reviews;

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    review_text TEXT,
    review_score int
)
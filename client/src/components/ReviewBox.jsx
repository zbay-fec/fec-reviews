import React from 'react';
import Username from './Username.jsx';
import Review from './Review.jsx';

const ReviewBox = props => {
    return (
        <div className="review-box">
            <div className="user-and-rating">
                <h2>Ratings and Reviews</h2>  
            </div>
            
            {/* review */}
            <Review messages={props.messages} />
        </div>
    );
};

export default ReviewBox;
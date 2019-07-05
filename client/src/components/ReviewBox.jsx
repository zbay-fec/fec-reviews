import React from 'react';
import Username from './Username.jsx';
import Review from './Review.jsx';

const ReviewBox = props => (
    <div className="review-box">
        <div className="user-and-rating">
            {/* username */}
            <Username />
            {/* star rating */}
            <h4>***</h4>  
        </div>
        
        {/* review */}
        <Review />
    </div>
);

export default ReviewBox;
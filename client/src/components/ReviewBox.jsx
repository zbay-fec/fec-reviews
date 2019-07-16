import React from 'react';
import Username from './Username.jsx';
import Review from './Review.jsx';

const ReviewBox = props => {
    return (
        <div className="review-box">
            {/* review */}
            <Review messages={props.messages} />
        </div>
    );
};

export default ReviewBox;
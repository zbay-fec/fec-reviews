import React from 'react';
import Username from './Username.jsx';

const Review = props => (
    <div className="review">
        {props.messages.map(message =>
        <ul>
            <li>
                <h3>{message.username}</h3>
                <h5>Rated: {message.review_score} / 5</h5>
                <p>{message.review_text}</p>
            </li>
        </ul>
        )}
    </div>
)

export default Review;
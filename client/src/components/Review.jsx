import React from 'react';
import Username from './Username.jsx';

const Review = props => (
    <div className="review">
        {props.messages.map(message =>
        <ul>
            <li>
                <Username />
                <h3>***</h3>
                <p>{message.review_text}</p>
            </li>
        </ul>
        )}
    </div>
)

export default Review;
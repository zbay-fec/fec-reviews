import React from 'react';
import ReactStars from 'react-stars';
import Username from './Username.jsx';

const Review = props => (
    <div className="review">
        {props.messages.map(message =>
        <ul>
            <li className="list-item">
                <div className="single-review">
                <div className="star"></div>
                    <h3>
                        <ReactStars
                            count={5}
                            value={message.review_score}
                            size={24}
                            color={'#ffd700'}
                            edit={false}
                            half={false}
                        />
                    </h3>
                    <h5>by {message.username}</h5>
                </div>
                <div className="review-text">
                    <p>{message.review_text}</p>
                </div>
            </li>
        </ul>
        )}
    </div>
)

export default Review;
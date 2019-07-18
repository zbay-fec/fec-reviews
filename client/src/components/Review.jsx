import React from 'react';
import ReactStars from 'react-stars';
import Likes from './Likes.jsx'
import Username from './Username.jsx';

const Review = props => (
    <div className="review">
        {props.messages.map(message =>
        <ul>
            <li className="list-item">
                <div className="single-review">
                    <div className="stars">
                        <ReactStars
                            count={5}
                            value={message.review_score}
                            size={24}
                            color={'#ffd700'}
                            edit={false}
                            half={false}
                        />
                    </div>
                    <div>
                        <h5>by <a href="#">{message.username}</a></h5>
                    </div>
                </div>
                <div className="review-text">
                    <p>{message.review_text}</p>
                    {/* <Likes /> */}
                </div>
            </li>
        </ul>
        )}
    </div>
)

export default Review;
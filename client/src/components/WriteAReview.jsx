import React from 'react';
import ReactStars from 'react-stars';

const WriteAReview = props => (
    <div className="write-a-review">
        <input type="text" placeholder="username" required />
        <ReactStars 
            count={5}
            value={1}
            size={24}
            color={'#ffd700'}
            edit={true}
            half={false}
            // onChange={}
        />
        <textarea className="write-review-textarea" placeholder="Tell us what you think" required ></textarea>
        <button className="post-review-btn">post</button>
    </div>
)

export default WriteAReview;
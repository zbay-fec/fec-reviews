import React from 'react';
import ReactStars from 'react-stars';
// import {TiTimes} from 'react-icons/lib/ti/times';

const WriteAReview = props => (
    <div className={"write-a-review" }>
        <div className="review-form-username-stars">
            <div>
                <input className="review-input" type="text" placeholder="username" required />
                <h4 className="review-rate-this-product-text">RATE THIS PRODUCT</h4>
                <ReactStars 
                    count={5}
                    value={1}
                    size={35}
                    color1={'#ececec'}
                    color2={'#ffd700'}
                    edit={true}
                    half={false}
                    // onChange={}
                />
            </div>
            <button 
                className="close-reviews" 
                onClick={function x() {this.setState({ reviewBoxVisible: !this.state.reviewBoxVisible })}}>CLOSE</button>
        </div>
        <div className="review-form-textarea-postBtn">
            <textarea className="write-review-textarea" placeholder="Tell us what you think" required ></textarea>
            <button className="post-review-btn">POST</button>
        </div>
    </div>
)

export default WriteAReview;
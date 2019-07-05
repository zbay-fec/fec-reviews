import React from 'react';
import ReviewBox from './ReviewBox.jsx';

class ReviewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div className="reviews-list">
                <ReviewBox />
            </div>
        )
    }
}

export default ReviewsList;

window.ReviewsList = ReviewsList;
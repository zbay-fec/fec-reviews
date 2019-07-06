import React from 'react';
import ReviewBox from './ReviewBox.jsx';
import Review from './Review.jsx';
import axios from 'axios';

class ReviewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

    }

    componentDidMount() {
        axios.get('https://baconipsum.com/api/?type=meat-and-filler')
            .then(res => this.setState({ messages: res.data }))
            .catch(err => console.log('Ridiculous! ', err))
    }

    render() {
        return(
            <div className="reviews-list">
                <ReviewBox messages={this.state.messages} />
                {/* <Review messages={this.state.messages} /> */}
            </div>
        )
    }
}

export default ReviewsList;

window.ReviewsList = ReviewsList;
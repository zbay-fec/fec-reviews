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

    // window.dispatchEvent(new CustomEvent('productChanged', {
    //     detail: {
    //       id: this.state.input
    //     }
    //   }));

    // window.addEventListener('productChanged', e => this.setState({productId: e.detail.id}));

    // componentDidMount() {
    //     axios.get('https://baconipsum.com/api/?type=meat-and-filler')
    //         .then(res => this.setState({ messages: res.data }))
    //         .catch(err => console.log('Ridiculous! ', err))
    // }

    componentDidMount() {
        axios.get('http://localhost:3003/reviews')
        .then(res => this.setState({ messages: res.data }))
        .catch(err => console.log('Ridiculous! ', err))
    }

    render() {
        return(
            <div className="reviews-list">
                <ReviewBox messages={this.state.messages} />
            </div>
        )
    }
}

export default ReviewsList;

window.ReviewsList = ReviewsList;
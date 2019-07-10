import React from 'react';
import ReviewBox from './ReviewBox.jsx';
import axios from 'axios';

class ReviewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prod_id: 0,
            messages: [],
            ratings: [],
            ratingAvg: 0
        };
    }
    
    componentDidMount() {
        // window.addEventListener('productChanged', e => this.setState({prod_id: e.detail.id}));
        axios.get('http://localhost:3003/reviews')
        .then(res => this.setState({ messages: res.data }))
        .then(res => { 
                const messages = this.state.messages;
                const ratings = this.state.ratings;

                for (let el of messages) {
                    for (let key in el) {
                        if (key === 'review_score') {
                            ratings.push(el[key]);
                        }
                    }
                }

                // aggregate ratings
                if (ratings.length < 2) {
                    this.setState({ ratingAvg: ratings[0] });
                } else {
                    let sumArr = ratings.reduce((acc, val) => { return (acc + val); })
                    let average = sumArr / ratings.length;

                    this.setState({ ratingAvg: average.toFixed(1) });
                }
            })
        .catch(err => console.log('Ridiculous! ', err))
    }

    render() {
        return(
            <div>
                <div className="rating">
                    <h1>Rating</h1>
                    <h1>{this.state.ratingAvg}</h1>
                </div>
                <div className="reviews-list">
                    <ReviewBox messages={this.state.messages} />
                </div>
            </div>
        )
    }
}

export default ReviewsList;

window.ReviewsList = ReviewsList;
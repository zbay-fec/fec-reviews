import React from 'react';
import ReviewBox from './ReviewBox.jsx';
import axios from 'axios';
import ReactStars from 'react-stars';
import WriteAReview from './WriteAReview.jsx';

class ReviewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prod_id: 'AVR693z',
            messages: [],
            ratings: [],
            ratingAvg: 0
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        axios.post('http://ec2-52-14-196-245.us-east-2.compute.amazonaws.com:3003/reviews', { prod_id: this.state.prod_id })
        // axios.post('http://localhost:3003/reviews', { prod_id: this.state.prod_id })
        .then(res => this.setState({ messages: res.data }))
        // function to aggregate all ratings for the current product
        .then(res => {
                const messages = this.state.messages;
                const ratings = this.state.ratings;
                // loop through the reviews in the messages array and push all ratings into the ratings array
                for (let el of messages) {
                    for (let key in el) {
                        if (key === 'review_score') {
                            ratings.push(el[key]);
                        }
                    }
                }
                
                // find the mean of all ratings in the ratings array
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
        
        componentDidMount() {
            window.addEventListener('productChanged', e => this.setState({prod_id: e.detail.id}));
            this.onChange()
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.state.prod_id !== prevState.prod_id) {
                this.onChange();
            }
        }
        
        render() {
            if (this.props.showCart === true) {
                return <div></div>;
            }
        
        return(
            <div className="main-container">
                <div className="ag-rating">
                    <div className="ratings-and-reviews">
                        <h2>Ratings and Reviews</h2>
                        <button className="write-a-review">WRITE A REVIEW</button>
                    </div>
                    <div className="rating-pair">
                        <h1 className="rating-avg">{this.state.ratingAvg}</h1>
                        <ReactStars
                            count={5}
                            value={Number(this.state.ratingAvg)}
                            size={40}
                            color={'#ffd700'}
                            edit={false}
                            half={true}
                        />
                        <p>{this.state.ratings.length} product ratings</p>
                    </div>
                </div>
                <div className="reviews-list">
                    <ReviewBox messages={this.state.messages} />
                </div>
                {/* write a review box */}
                <WriteAReview />
            </div>
        )
    }
}

export default ReviewsList;

window.ReviewsList = ReviewsList;
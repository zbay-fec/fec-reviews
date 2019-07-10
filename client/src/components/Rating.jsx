import React from 'react';

const Rating = props => (
    <div className="review">
        {props.ratingAvg.map(avg =>
            <h2>{avg}</h2>
        )}
    </div>
)

export default Rating;
import React from 'react';
import Username from './Username.jsx';
import Review from './Review.jsx';

// const ReviewBox = props => {
//     return (
//         <div className="review-box">
//             <div className="user-and-rating">
//                 {/* username */}
//                 <Username />
//                 {/* star rating */}
//                 <h4>***</h4>  
//             </div>
            
//             {/* review */}
//             <Review messages={props.messages} />
//         </div>
//     );
// };

const ReviewBox = props => {
    return (
        <div className="review-box">
            <div className="user-and-rating">
                {/* username */}
                {/* <Username /> */}
                {/* star rating */}
                <h2>Reviews</h2>  
            </div>
            
            {/* review */}
            <Review messages={props.messages} />
        </div>
    );
};

export default ReviewBox;
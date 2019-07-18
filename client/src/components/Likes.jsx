import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa';

const Likes = props => (
    <div className="likes-dislikes">
        <div className="like">
            <button className="like-btn"><FaThumbsUp /></button>
        </div>
        <div className="dislike">
            <button className="dislike-btn"><FaThumbsDown /></button>
        </div>
        <div className="report">
            <button className="report-btn"><FaExclamation /></button>
        </div>
    </div>
)

export default Likes;
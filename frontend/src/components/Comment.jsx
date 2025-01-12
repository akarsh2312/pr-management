import React from 'react';
import '../styles/Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.comments}</p>
      <small>By: {comment.reviewerId}</small>
    </div>
  );
};

export default Comment;
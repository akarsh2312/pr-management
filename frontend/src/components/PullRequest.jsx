import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PullRequest.css';

const PullRequest = ({ pullRequest }) => {
  return (
    <div className="pull-request">
      <h2>{pullRequest.title}</h2>
      <p>{pullRequest.description}</p>
      <Link to={`/review/${pullRequest._id}`}>Review</Link>
      <Link to={`/approve/${pullRequest._id}`}>Approve</Link>
    </div>
  );
};

export default PullRequest;
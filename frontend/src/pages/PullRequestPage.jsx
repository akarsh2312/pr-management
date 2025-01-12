import React, { useEffect, useState } from 'react';
import { getPullRequests } from '../services/pullRequestService';
import PullRequest from '../components/PullRequest';
import '../styles/PullRequestPage.css';

const PullRequestPage = () => {
  const [pullRequests, setPullRequests] = useState([]);

  useEffect(() => {
    const fetchPullRequests = async () => {
      try {
        const data = await getPullRequests();
        setPullRequests(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching pull requests:', error);
        setPullRequests([]);
      }
    };

    fetchPullRequests();
  }, []);

  return (
    <div className="pull-request-page">
      <h1>Pull Requests</h1>
      {pullRequests.length > 0 ? (
        pullRequests.map(pr => (
          <PullRequest key={pr._id} pullRequest={pr} />
        ))
      ) : (
        <p>No pull requests found.</p>
      )}
    </div>
  );
};

export default PullRequestPage;
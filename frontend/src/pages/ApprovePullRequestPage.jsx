import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPullRequestById } from '../services/pullRequestService';
import { getApprovals, addApproval } from '../services/approvalService';
import Approval from '../components/Approval';
import '../styles/ApprovePullRequestPage.css';

const ApprovePullRequestPage = () => {
  const { id } = useParams();
  const [pullRequest, setPullRequest] = useState(null);
  const [approvals, setApprovals] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchPullRequest = async () => {
      const data = await getPullRequestById(id);
      setPullRequest(data);
    };

    const fetchApprovals = async () => {
      const data = await getApprovals(id);
      setApprovals(data);
    };

    fetchPullRequest();
    fetchApprovals();
  }, [id]);

  const handleAddApproval = async (e) => {
    e.preventDefault();
    await addApproval(id, { status });
    setStatus('');
    const data = await getApprovals(id);
    setApprovals(data);
  };

  return (
    <div className="approve-pull-request-page">
      {pullRequest && (
        <>
          <h1>{pullRequest.title}</h1>
          <p>{pullRequest.description}</p>
        </>
      )}
      <h2>Approvals</h2>
      {approvals.map(approval => (
        <Approval key={approval._id} approval={approval} />
      ))}
      <form onSubmit={handleAddApproval}>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button type="submit">Submit Approval</button>
      </form>
    </div>
  );
};

export default ApprovePullRequestPage;
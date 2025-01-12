import React from 'react';
import '../styles/Approval.css';

const Approval = ({ approval }) => {
  return (
    <div className="approval">
      <p>Status: {approval.status}</p>
      <small>By: {approval.approverId}</small>
    </div>
  );
};

export default Approval;
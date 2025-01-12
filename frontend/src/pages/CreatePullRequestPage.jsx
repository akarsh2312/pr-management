import React, { useState } from 'react';
import { createPullRequest } from '../services/pullRequestService';
import '../styles/CreatePullRequestPage.css';

const CreatePullRequestPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [approvers, setApprovers] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const approversArray = approvers.split(',').map(id => id.trim());
    await createPullRequest({ title, description, approvers: approversArray });
    setTitle('');
    setDescription('');
    setApprovers('');
  };

  return (
    <div className="create-pull-request-page">
      <h1>Create Pull Request</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Approvers (comma separated user IDs)"
          value={approvers}
          onChange={(e) => setApprovers(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePullRequestPage;
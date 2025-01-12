import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PullRequestPage from './pages/PullRequestPage';
import CreatePullRequestPage from './pages/CreatePullRequestPage';
import ReviewPullRequestPage from './pages/ReviewPullRequestPage';
import ApprovePullRequestPage from './pages/ApprovePullRequestPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PullRequestPage />} />
          <Route path="/create" element={<CreatePullRequestPage />} />
          <Route path="/review/:id" element={<ReviewPullRequestPage />} />
          <Route path="/approve/:id" element={<ApprovePullRequestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
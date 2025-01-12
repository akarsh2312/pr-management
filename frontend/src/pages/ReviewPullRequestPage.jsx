import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPullRequestById } from '../services/pullRequestService';
import { getComments, addComment } from '../services/commentService';
import Comment from '../components/Comment';
import '../styles/ReviewPullRequestPage.css';

const ReviewPullRequestPage = () => {
  const { id } = useParams();
  const [pullRequest, setPullRequest] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchPullRequest = async () => {
      const data = await getPullRequestById(id);
      setPullRequest(data);
    };

    const fetchComments = async () => {
      const data = await getComments(id);
      setComments(data);
    };

    fetchPullRequest();
    fetchComments();
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    await addComment(id, { comments: newComment });
    setNewComment('');
    const data = await getComments(id);
    setComments(data);
  };

  return (
    <div className="review-pull-request-page">
      {pullRequest && (
        <>
          <h1>{pullRequest.title}</h1>
          <p>{pullRequest.description}</p>
        </>
      )}
      <h2>Comments</h2>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
      <form onSubmit={handleAddComment}>
        <textarea
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default ReviewPullRequestPage;
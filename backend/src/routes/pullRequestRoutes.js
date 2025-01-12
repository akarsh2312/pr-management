const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
    getPullRequests,
    getPullRequestById,
    createPullRequest,
    updatePullRequest,
    deletePullRequest
} = require('../controllers/pullRequestController');

const router = express.Router();

router.route('/')
    .get(protect, getPullRequests)
    .post(protect, createPullRequest);

router.route('/:id')
    .get(protect, getPullRequestById)
    .put(protect, updatePullRequest)
    .delete(protect, deletePullRequest);

module.exports = router;
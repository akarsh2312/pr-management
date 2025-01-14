const PullRequest = require('../models/pullRequestModel');

const getPullRequests = async (req, res) => {
    try {
        const pullRequests = await PullRequest.find();
        res.status(200).json(pullRequests);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getPullRequestById = async (req, res) => {
    try {
        const pullRequest = await PullRequest.findById(req.params.id);
        if (!pullRequest) {
            return res.status(404).json({ message: 'Pull request not found' });
        }
        res.status(200).json(pullRequest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createPullRequest = async (req, res) => {
    const { title, description, approvers } = req.body;
    const requesterId = req.user._id;

    // Validate input
    if (!title || !description || !approvers || !Array.isArray(approvers)) {
        return res.status(400).json({ message: 'All fields are required and approvers must be an array' });
    }

    try {
        const pullRequest = new PullRequest({
            title,
            description,
            requesterId,
            // Initialize approvers with status 'Pending'
            approvers: approvers.map(approverId => ({ approverId, status: 'Pending' })),
            // Set initial pull request status to 'Open'
            status: 'Open'
        });

        await pullRequest.save();
        res.status(201).json(pullRequest);
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

const updatePullRequest = async (req, res) => {
    const { title, description, approvers, status } = req.body;

    try {
        const pullRequest = await PullRequest.findById(req.params.id);
        if (!pullRequest) {
            return res.status(404).json({ message: 'Pull request not found' });
        }

        pullRequest.title = title || pullRequest.title;
        pullRequest.description = description || pullRequest.description;
        pullRequest.approvers = approvers || pullRequest.approvers;
        pullRequest.status = status || pullRequest.status;
        pullRequest.updatedAt = Date.now();

        await pullRequest.save();
        res.status(200).json(pullRequest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deletePullRequest = async (req, res) => {
    try {
        const pullRequest = await PullRequest.findById(req.params.id);
        if (!pullRequest) {
            return res.status(404).json({ message: 'Pull request not found' });
        }

        await pullRequest.remove();
        res.status(200).json({ message: 'Pull request removed' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getPullRequests,
    getPullRequestById,
    createPullRequest,
    updatePullRequest,
    deletePullRequest
};
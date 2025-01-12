const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    pullRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'PullRequest', required: true },
    reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
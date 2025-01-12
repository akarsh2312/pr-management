const mongoose = require('mongoose');

const pullRequestSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    approvers: [{
        approverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        status: { type: String, enum: ['Pending', 'Approved', 'Rejected'] },
        comments: { type: String }
    }],
    status: { type: String, enum: ['Open', 'Approved', 'Rejected'], default: 'Open' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PullRequest', pullRequestSchema);
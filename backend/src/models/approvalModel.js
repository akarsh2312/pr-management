const mongoose = require('mongoose');

const approvalSchema = new mongoose.Schema({
    pullRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'PullRequest', required: true },
    approverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Approval', approvalSchema);
const Approval = require('../models/approvalModel');
const PullRequest = require('../models/pullRequestModel');

const addApproval = async (req, res) => {
    const { status } = req.body;
    const pullRequestId = req.params.id;
    const approverId = req.user._id;

    try {
        const approval = new Approval({
            pullRequestId,
            approverId,
            status
        });

        await approval.save();

        const pullRequest = await PullRequest.findById(pullRequestId);
        pullRequest.approvers.push({ approverId, status });
        await pullRequest.save();

        res.status(201).json(approval);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getApprovals = async (req, res) => {
    try {
        const approvals = await Approval.find({ pullRequestId: req.params.id });
        res.status(200).json(approvals);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addApproval, getApprovals };
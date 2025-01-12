const express = require('express');
const { protect, authorize } = require('../middleware/authMiddleware');
const { addApproval, getApprovals } = require('../controllers/approvalController');

const router = express.Router();

router.route('/:id/approvals')
    .post(protect, authorize('approver'), addApproval)
    .get(protect, getApprovals);

module.exports = router;
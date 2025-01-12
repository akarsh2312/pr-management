import axios from 'axios';

const API_URL = 'http://localhost:3000/api/pull-requests/';

const getApprovals = async (pullRequestId) => {
    const response = await axios.get(`${API_URL}${pullRequestId}/approvals`);
    return response.data;
};

const addApproval = async (pullRequestId, approvalData) => {
    const response = await axios.post(`${API_URL}${pullRequestId}/approvals`, approvalData);
    return response.data;
};

export {
    getApprovals,
    addApproval
};
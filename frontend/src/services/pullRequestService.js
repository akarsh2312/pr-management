import axios from 'axios';

const API_URL = 'http://localhost:3000/api/pull-requests/';

const getPullRequests = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const getPullRequestById = async (id) => {
    const response = await axios.get(`${API_URL}${id}`);
    return response.data;
};

const createPullRequest = async (pullRequestData) => {
    const response = await axios.post(API_URL, pullRequestData);
    return response.data;
};

const updatePullRequest = async (id, pullRequestData) => {
    const response = await axios.put(`${API_URL}${id}`, pullRequestData);
    return response.data;
};

const deletePullRequest = async (id) => {
    const response = await axios.delete(`${API_URL}${id}`);
    return response.data;
};

export {
    getPullRequests,
    getPullRequestById,
    createPullRequest,
    updatePullRequest,
    deletePullRequest
};
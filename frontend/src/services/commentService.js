import axios from 'axios';

const API_URL = 'http://localhost:3000/api/pull-requests/';

const getComments = async (pullRequestId) => {
    const response = await axios.get(`${API_URL}${pullRequestId}/comments`);
    return response.data;
};

const addComment = async (pullRequestId, commentData) => {
    const response = await axios.post(`${API_URL}${pullRequestId}/comments`, commentData);
    return response.data;
};

export {
    getComments,
    addComment
};
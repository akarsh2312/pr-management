const Comment = require('../models/reviewModel');

const addComment = async (req, res) => {
    const { comments } = req.body;
    const pullRequestId = req.params.id;
    const reviewerId = req.user._id;

    try {
        const comment = new Comment({
            pullRequestId,
            reviewerId,
            comments
        });

        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ pullRequestId: req.params.id });
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addComment, getComments };
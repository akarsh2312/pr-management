const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const approvalRoutes = require('./routes/approvalRoutes');
const commentRoutes = require('./routes/commentRoutes');
const pullRequestRoutes = require('./routes/pullRequestRoutes');

dotenv.config({
    path: '../.env'
});

connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
})); // Enable CORS
app.use(express.json());

app.use('/api/pull-requests', pullRequestRoutes);
app.use('/api/pull-requests', commentRoutes);
app.use('/api/pull-requests', approvalRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
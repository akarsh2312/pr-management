# Pull Request Management System

A Pull Request Management System built using the MERN stack (MongoDB, Express, React, Node.js). This system allows users to create, review, approve, or reject pull requests.

## Features

- User authentication and authorization
- Create, review, approve, and reject pull requests
- Add comments to pull requests
- Real-time notifications using WebSockets (optional)
- Role-based access control

## Prerequisites

- Node.js
- MongoDB

## Installation

### Backend

1. Navigate to the backend directory:

    ```bash
    cd pull-request-management-system/backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add the following environment variables:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    npm run dev
    ```

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd pull-request-management-system/frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the frontend directory and add the following environment variable:

    ```plaintext
    VITE_API_BASE_URL=http://localhost:5000/api
    ```

4. Start the frontend server:

    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend application.
2. Use the application to create, review, approve, and reject pull requests.

## Project Structure

```plaintext
pull-request-management-system
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── approvalController.js
│   │   │   ├── commentController.js
│   │   │   └── pullRequestController.js
│   │   ├── models
│   │   │   ├── approvalModel.js
│   │   │   ├── commentModel.js
│   │   │   ├── pullRequestModel.js
│   │   │   ├── roleModel.js
│   │   │   └── userModel.js
│   │   ├── routes
│   │   │   ├── approvalRoutes.js
│   │   │   ├── commentRoutes.js
│   │   │   └── pullRequestRoutes.js
│   │   ├── middleware
│   │   │   └── authMiddleware.js
│   │   ├── config
│   │   │   └── db.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── PullRequest.jsx
│   │   │   ├── Comment.jsx
│   │   │   └── Approval.jsx
│   │   ├── pages
│   │   │   ├── PullRequestPage.jsx
│   │   │   ├── CreatePullRequestPage.jsx
│   │   │   ├── ReviewPullRequestPage.jsx
│   │   │   └── ApprovePullRequestPage.jsx
│   │   ├── services
│   │   │   ├── pullRequestService.js
│   │   │   ├── commentService.js
│   │   │   └── approvalService.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   ├── package.json
│   └── README.md
└── README.md
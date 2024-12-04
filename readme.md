# To-Do Application (MERN Stack)
> A simple To-Do application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to add, view, and delete tasks.

## Features
- Add new to-do items.
- View the list of to-do items.
- Delete to-do items.

## Prerequisites
- Node.js installed on your system.
- MongoDB connection (Atlas or local instance).
- Git installed.

## Setup Instructions
### Backend Setup
1. Clone the Repository
    ```
    git clone https://github.com/your-username/your-repository.git
    cd your-repository/backend
2. Install Dependencies
    ```
    npm install
3. Create the .env File Create a .env file in the backend directory and add the following environment variables:
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-app?retryWrites=true&w=majorityPORT=5000
4. Start the Backend Server
    ```
    npm run dev
The server will run at http://localhost:5000.

### Frontend Setup
1. Navigate to the Frontend Directory
    ```
    cd ../frontend
2. Install Dependencies
    ```
    npm install
3. Start the Frontend Development Server
    ```
    npm start
The application will open in your default browser at http://localhost:3000.

### Sample .env File for Backend
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-app?    retryWrites=true&w=majority
    PORT=5000

### API Endpoints
#### Base URL: http://localhost:5000
1. GET /todos
    - Fetch all to-do items.
    - Response:
    ```
    [
        { "_id": "1", "text": "Learn MERN Stack" },
        { "_id": "2", "text": "Build a To-Do App" }
    ]

2. POST /todos
    - Add a new to-do item.
    - Request body:
    ```
    { "text": "New To-Do Item" }

3. DELETE /todos/:id
    - Delete a to-do item by ID.
    - Request example: /todos/1

### Technologies Used
- Frontend: React
- Backend: Node.js, Express.js
- Database: MongoDB









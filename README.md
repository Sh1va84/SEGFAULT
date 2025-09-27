SEGFAULT - The Ultimate Coding Practice Platform
SEGFAULT is a full-stack, feature-rich web application designed to be the ultimate platform for developers to practice and hone their coding skills. It provides a seamless experience for solving Data Structures and Algorithms (DSA) problems, complete with an online code editor, instant feedback through test case evaluation, and AI-powered assistance. Administrators have a dedicated panel to manage problems and educational content, making it a comprehensive solution for both learners and educators.

✨ Key Features
For Users 🧑‍💻
Problem Solving: Browse a list of coding problems, filterable by difficulty, tags, and solved status.

Integrated Code Editor: A powerful in-browser editor (powered by Monaco) with syntax highlighting for C++, Java, and JavaScript.

Online Code Execution: Run your code against visible test cases for quick debugging and validation.

Secure Submission System: Submit your final solution to be judged against a comprehensive set of hidden test cases.

Detailed Submission History: Review all your past submissions for a specific problem, including your code, status, runtime, and memory usage.

AI-Powered Tutor: Stuck on a problem? Get hints, explanations, and code reviews from an integrated AI Chatbot powered by Google Gemini.

Video Editorials: Watch detailed video explanations for problems, uploaded by administrators.

Secure Authentication: Robust user registration and login system using JWT and cookies.

For Admins 👨‍💼
Comprehensive Admin Panel: A dedicated dashboard for managing the platform's content.

Full CRUD for Problems: Admins can create, read, update, and delete coding problems with detailed descriptions, test cases, and starter code.

Video Content Management: Easily upload new video editorials for problems and delete existing ones. Cloudinary integration ensures efficient video storage and delivery.

Role-Based Access Control: Secure routes and functionalities exclusive to admin users.

🛠️ Tech Stack
This project is a full MERN-stack application with several powerful third-party services.

Category

Technology / Service

Frontend

React.js, Redux Toolkit, React Router, Vite, Tailwind CSS, DaisyUI, Monaco Editor, Axios

Backend

Node.js, Express.js, MongoDB

Database

Mongoose (ODM)

Caching

Redis (For session/token blocklisting)

Auth

JSON Web Tokens (JWT), bcrypt

Services

Judge0 (Online Code Execution), Google Gemini (AI Chat), Cloudinary (Video Upload & Storage)

📂 Project Structure
The project is organized into two main directories: frontend and backend.

<details>
<summary><b>Frontend Structure (/frontend/src)</b></summary>

/frontend/src
├── assets/
├── components/
│   ├── AdminDelete.jsx
│   ├── AdminPanel.jsx
│   ├── AdminUpload.jsx
│   ├── AdminVideo.jsx
│   ├── ChatAi.jsx
│   ├── Editorial.jsx
│   └── SubmissionHistory.jsx
├── pages/
│   ├── Admin.jsx
│   ├── Homepage.jsx
│   ├── Login.jsx
│   ├── ProblemPage.jsx
│   └── Signup.jsx
├── store/
│   └── store.js
├── utils/
│   └── axiosClient.js
├── App.jsx
├── authSlice.js
└── main.jsx

</details>

<details>
<summary><b>Backend Structure (/backend/src)</b></summary>

/backend/src
├── config/
│   ├── db.js
│   └── redis.js
├── controllers/
│   ├── solveDoubt.js
│   ├── userAuthent.js
│   ├── userProblem.js
│   ├── userSubmission.js
│   └── videoSection.js
├── middleware/
│   ├── adminMiddleware.js
│   └── userMiddleware.js
├── models/
│   ├── problem.js
│   ├── solutionVideo.js
│   ├── submission.js
│   └── user.js
├── routes/
│   ├── aiChatting.js
│   ├── problemCreator.js
│   ├── submit.js
│   ├── userAuth.js
│   └── videoCreator.js
└── utils/
    ├── problemUtility.js
    └── validator.js

</details>

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running.

Prerequisites
Node.js (v18.x or higher)

npm or yarn

A running MongoDB instance (local or cloud-based like MongoDB Atlas)

A running Redis instance (local or cloud-based like Redis Cloud)

Backend Setup
Clone the repository:

git clone [https://github.com/your-username/segfault-repo.git](https://github.com/your-username/segfault-repo.git)
cd segfault-repo/backend

Install dependencies:

npm install

Create a .env file in the backend directory and add the following environment variables. Replace the placeholder values with your actual credentials.

# Server Configuration
PORT=3000

# Database and Cache
DB_CONNECT_STRING=<YOUR_MONGODB_CONNECTION_STRING>
REDIS_PASS=<YOUR_REDIS_PASSWORD>
# Note: Redis host and port are hardcoded in /src/config/redis.js. Update if necessary.

# Authentication
JWT_KEY=<YOUR_SUPER_SECRET_JWT_KEY> # A long, random string

# Third-Party API Keys
JUDGE0_KEY=<YOUR_RAPIDAPI_JUDGE0_KEY>
GEMINI_KEY=<YOUR_GOOGLE_GEMINI_API_KEY>
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>

Start the backend server:

npm start

The server should now be running on http://localhost:3000.

Frontend Setup
Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the frontend development server:

npm run dev

The React application should now be running on http://localhost:5173 (or another port if 5173 is busy).

⚡ API Endpoints
Here is a summary of the available API routes. All routes are prefixed with their respective router prefix (e.g., /user, /problem).

Method

Endpoint

Description

Protected

Role

POST

/user/register

Register a new user.

No

-

POST

/user/login

Log in a user.

No

-

POST

/user/logout

Log out the current user.

Yes

User

GET

/user/check

Check authentication status.

Yes

User

POST

/problem/create

Create a new coding problem.

Yes

Admin

PUT

/problem/update/:id

Update an existing problem.

Yes

Admin

DELETE

/problem/delete/:id

Delete a problem.

Yes

Admin

GET

/problem/problemById/:id

Get a single problem by its ID.

Yes

User

GET

/problem/getAllProblem

Get a list of all problems.

Yes

User

GET

/problem/problemSolvedByUser

Get problems solved by the current user.

Yes

User

GET

/problem/submittedProblem/:pid

Get submission history for a problem.

Yes

User

POST

/submission/submit/:id

Submit a code solution for judging.

Yes

User

POST

/submission/run/:id

Run code against visible test cases.

Yes

User

POST

/ai/chat

Interact with the AI tutor.

Yes

User

GET

/video/create/:problemId

Get a signature to upload a video.

Yes

Admin

POST

/video/save

Save uploaded video metadata.

Yes

Admin

DELETE

/video/delete/:problemId

Delete a problem's video solution.

Yes

Admin

🖼️ Screenshots
A glimpse of the clean and intuitive user interface of the SEGFAULT platform.

🤝 Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

Fork the repository.

Create your feature branch (git checkout -b feature/new-amazing-feature).

Commit your changes (git commit -m 'Add some amazing feature').

Push to the branch (git push origin feature/new-amazing-feature).

Open a Pull Request.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.


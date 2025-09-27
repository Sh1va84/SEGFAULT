# 🔥 SEGFAULT: The Code Whisperer Engine 🔥

**A full-stack, AI-powered competitive programming platform designed for mastery, efficiency, and real-time grading.**

This project delivers an enterprise-grade experience for Data Structures and Algorithms (DSA) practice, featuring a **secure Express.js backend** with integrated code execution and a **dynamic React/Redux frontend** with a personalized **Gemini AI Tutor**.

## 🌟 Key Features

| Feature | Description | Stack Components |
| :--- | :--- | :--- |
| **Real-Time Code Grading** | Instant submission grading against **hidden test cases** using an integrated Judge0-like API utility. Provides precise runtime and memory metrics. | Backend: `userSubmission.js`, `problemUtility.js` |
| **Gemini AI Tutor** | A dedicated, context-aware AI chat (powered by **Gemini 1.5 Flash**) integrated into the IDE. It acts strictly as a DSA expert, offering hints, code review, and complexity analysis. | Frontend: `ChatAi.jsx` <br/> Backend: `solveDoubt.js` |
| **Secure Authentication** | Robust security featuring **JWT-based sessions**, password hashing via bcrypt, and **Redis blacklisting** for instant token invalidation upon logout. | Backend: `userAuthent.js`, `redis.js`, `userMiddleware.js` |
| **Admin Content Management** | Admin-gated modules for full CRUD operations on problems, including pre-deployment **reference solution validation** and dedicated video solution management. | Frontend: `AdminPanel.jsx`, `AdminVideo.jsx` <br/> Backend: `userProblem.js` |
| **Integrated IDE & UI** | A sleek, responsive user interface (built with DaisyUI/Tailwind) featuring the **Monaco Editor**, a customizable layout, and an integrated submission history viewer. | Frontend: `ProblemPage.jsx` |
| **Video Editorial Solutions** | Secure video solution streaming via Cloudinary, managed end-to-end through the Admin panel. | Backend: `videoSection.js` <br/> Frontend: `Editorial.jsx` |

## ⚙️ Full-Stack Architecture

### 1. ⚛️ Frontend (`/frontend/src`)

The application layer built on modern standards for performance and user experience.

| Component | Technology | Role & State Management |
| :--- | :--- | :--- |
| **Framework** | **React** (Vite) | Main application rendering and routing (`App.jsx`, `main.jsx`). |
| **Styling** | **Tailwind CSS + DaisyUI** | Highly responsive, component-based styling (`index.css`). |
| **State Mgmt.** | **Redux Toolkit** | Centralized, secure state management for authentication (`authSlice.js`). |
| **Form Handling** | **React Hook Form + Zod** | Validation and handling for all forms (Login, Signup, Admin Panel). |
| **IDE** | **Monaco Editor** | The in-browser code editor used in `ProblemPage.jsx`. |

### 2. 🟢 Backend (`/backend/src`)

The core engine responsible for data, security, and external API communication.

| Component | Technology | Role |
| :--- | :--- | :--- |
| **API** | **Express.js (Node.js)** | Routing, Middleware, and CORS management (`index.js`). |
| **Database** | **MongoDB (Mongoose)** | Data modeling for Users, Problems, Submissions, and Videos. |
| **Caching/Security** | **Redis Client** | Caching for token blacklisting (logout security). |
| **Code Execution** | **Judge0 API Utility** | Handles batch submission and result fetching (`problemUtility.js`). |
| **AI** | **Google GenAI SDK** | Powers the DSA tutor (`solveDoubt.js`). |
| **Cloud** | **Cloudinary v2** | Manages video uploads, signatures, and hosting (`videoSection.js`). |

## 🔑 Security & Authorization Flow

1. **Authentication:** User signs up (`Signup.jsx`), passing data to `POST /user/register`. Data is validated (Zod/Mongoose), password is **bcrypt hashed**, and a **JWT** is issued as an `HttpOnly` cookie.
2. **Authorization:** All protected routes use `userMiddleware.js` or `adminMiddleware.js`.
   * The middleware verifies the JWT signature and checks the user's role.
   * It checks the Redis client to ensure the token has **NOT been blacklisted** (preventing logged-out access).
3. **Logout:** Hitting `POST /user/logout` sends the current JWT to Redis, blacklisting it based on its expiry time, and clears the cookie—guaranteeing immediate session termination.

## 🚀 Quick Start (Configuration)

Before running the backend, ensure your `.env` file contains the necessary secrets:
PORT=3000
DB_CONNECT_STRING=mongodb+srv://<user>:<password>@cluster/
JWT_KEY=<your_jwt_secret_key>
REDIS_PASS=<your_redis_password>
JUDGE0_KEY=<your_judge0_rapidapi_key>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
GEMINI_KEY=<your_google_gemini_api_key>


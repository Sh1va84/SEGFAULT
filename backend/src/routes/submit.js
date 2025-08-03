
const express = require('express');
const submitRouter = express.Router();
const userMiddleware = require("../middleware/userMiddleware");
const {submitCode,runCode} = require("../controllers/userSubmission");

submitRouter.post("/submit", userMiddleware, submitCode);
submitRouter.post("/runcode",userMiddleware,runCode);

module.exports = submitRouter;

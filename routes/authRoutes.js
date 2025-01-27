const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// ! middleware
router.use(authMiddleware);

//> POST /api/auth/login
router.post("/login", authController.login);

//> POST /api/auth/register
router.post("/register", authController.register);

module.exports = router;

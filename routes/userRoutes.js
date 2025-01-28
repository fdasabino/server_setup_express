const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// > create a new user - POST > /api/users
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);

module.exports = router;

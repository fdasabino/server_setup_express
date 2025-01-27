const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// ! middleware
router.use(authMiddleware);

//* GET /api/users
router.get("/", userController.getAllUsers);

//* GET /api/users/:id
router.get("/:id", userController.getUserById);

//> POST /api/users
router.post("/", userController.createUser);

//! DELETE /api/users/:id
router.delete("/:id", userController.deleteUser);

// > PATCH /api/users/:id
router.patch("/:id", userController.updateUser);

module.exports = router;

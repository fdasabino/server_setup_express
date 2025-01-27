const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });

    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: encryptedPassword,
    });

    const user = await newUser.save();

    if (!user) {
      return res.status(400).json({ message: "User not created" });
    }

    return res.status(201).json({ message: "User created successfuly", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userToDelete = await User.findByIdAndDelete({ _id: req.params.id });

    if (!userToDelete) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfuly", userToDelete });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.password = req.body.password || user.password;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();

    if (!updatedUser) {
      return res.status(400).json({ message: "User not updated" });
    }

    return res.status(200).json({ message: "User updated successfuly", updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};

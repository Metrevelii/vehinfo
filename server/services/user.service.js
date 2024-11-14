const { User } = require("../models/user");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
require("dotenv").config();

const validateToken = async (token) => {
  return jwt.verify(token, process.env.DB_SECRET);
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const findUserByResetToken = async (token) => {
  return await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() }, 
  });
};

// Update user password
const updateUserPassword = async (user, newPassword) => {
  user.password = newPassword;
  user.resetPasswordToken = undefined;  
  user.resetPasswordExpires = undefined;  
  await user.save();
};

// Generate password reset token and expiration
const generatePasswordResetToken = () => {
  const token = crypto.randomBytes(20).toString("hex"); // Random 20-byte token
  return token;
};

// Update user with new password and reset token logic
const updateUserResetToken = async (user, token) => {
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
  await user.save();
};

const findUserById = async (_id) => {
  return await User.findById(_id);
};

const updateUserProfile = async (req) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          ...req.body.data,
        },
      },
      { new: true }
    );
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUserEmail = async (req) => {
  try {
    if (await User.emailTaken(req.body.newemail)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Sorry email taken");
    }

    const user = await User.findOneAndUpdate(
      { _id: req.user._id, email: req.user.email },
      {
        $set: {
          email: req.body.newemail,
          varified: false,
        },
      },
      { new: true }
    );
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile,
  updateUserEmail,
  validateToken,
  findUserByResetToken,
  updateUserPassword,
  generatePasswordResetToken,
  updateUserResetToken,
};

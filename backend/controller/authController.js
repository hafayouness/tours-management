import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// registration user
export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "successFully created",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to created , try again",
      error: err.message,
    });
  }
};

// user login

export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    // if user is exist check password or compare password
    const checkCorrectPassword = bcrypt.compare(
      req.body.password,
      user.password
    );
    // if the password is correct
    if (!checkCorrectPassword) {
      return res
        .status(402)
        .json({ success: false, message: "invalid email or password" });
    }
    const { password, role, ...rest } = user._doc;
  } catch (err) {}
};

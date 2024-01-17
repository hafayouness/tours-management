import User from "../models/User.js";

// getAll user
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      message: "successFully getting All",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "not found",
      error: err.message,
    });
  }
};

// getsingle user

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "successfully gettin a single user",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "not found",
      error: err.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saveUser = await newUser.save();
    res.status(201).json({
      succes: true,
      message: "succesfully created",
      data: saveUser,
    });
  } catch (err) {
    res.status(500).json({
      succes: false,
      message: "failed  to create .try again ",
      error: err.message,
    });
  }
};
// update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      req.body,

      {
        new: true,
      }
    );
    if (updateUser) {
      res.status(200).json({
        succes: true,
        message: "succesfully to update",
        data: updateUser,
      });
    } else {
      res.status(404).json({
        succes: false,
        message: "user  not fund ",
      });
    }
  } catch (err) {
    res.status(500).json({
      succes: false,
      message: "failed update",
      error: err.message,
    });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      succes: true,
      message: "succesFully deleted",
    });
  } catch (err) {
    res.status(500).json({
      succes: false,
      message: "failed to deleted",
      error: err.message,
    });
  }
};

import express from "express";
import {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

// getAllUSER
router.get("/", getAllUser);

// getSinglUSER
router.get("/:id", getSingleUser);

// createdUSER
router.post("/", createUser);

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

export default router;

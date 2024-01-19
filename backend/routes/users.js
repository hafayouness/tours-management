import express from "express";
import {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();
import { verifyUser, verifyAdmin } from "../utile/VerifyToken.js";

// getAllUSER
router.get("/", verifyAdmin, getAllUser);

// getSinglUSER
router.get("/:id", verifyUser, getSingleUser);

// createdUSER
router.post("/", createUser);

// update user
router.put("/:id", verifyUser, updateUser);

// delete user
router.delete("/:id", verifyUser, deleteUser);

export default router;

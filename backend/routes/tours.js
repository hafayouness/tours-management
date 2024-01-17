import express from "express";
import {
  createTour,
  getAllTour,
  getSingTour,
  updateTour,
  deleteTour,
  getTourSearchBy,
  getFeatureTour,
  getCountsTour,
} from "../controller/tourController.js";

const router = express.Router();

// getAlltour
router.get("/", getAllTour);
// get by search
router.get("/search/getTourSearchBy", getTourSearchBy);
router.get("/search/getFeatureTour", getFeatureTour);
router.get("/search/getCountsTour", getCountsTour);

// getSingltour
router.get("/:id", getSingTour);

// createdtour
router.post("/", createTour);

// update tour
router.put("/:id", updateTour);

// delete tour
router.delete("/:id", deleteTour);

export default router;

import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const NewReview = new Review({ ...req.body });
  try {
    const savedReview = await NewReview.save();

    // after creating review and update the reviews array of the tour
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });
    res.status(200).json({
      success: true,
      message: "successfully submitted",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to submit",
      error: err.message,
    });
  }
};

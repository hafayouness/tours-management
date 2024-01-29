import Tour from "../models/Tour.js";

// getALL tour

export const getAllTour = async (req, res) => {
  // pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "succesfully getting all",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      succes: false,
      message: "not fund",
      error: err.message,
    });
  }
};

// getsingle tour
export const getSingTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "succesfully getting a single tour",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      succes: false,
      message: "not fund",
      error: err.message,
    });
  }
};

// creation tour
export const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    const saveTour = await newTour.save();
    res
      .status(201)
      .json({ succes: true, message: "succesfully created", data: saveTour });
  } catch (err) {
    res.status(500).json({
      succes: false,
      message: "failed  to create .try again ",
      error: err.message,
    });
  }
};

// update tour

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      req.body,

      {
        new: true,
      }
    );
    if (updateTour) {
      res.status(200).json({
        succes: true,
        message: "succesfully to update",
        data: updateTour,
      });
    } else {
      res.status(404).json({
        succes: false,
        message: "Tour not fund ",
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

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
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

// get tour by search
export const getTourSearchBy = async (req, res) => {
  // "i "means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully fetched data",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data",
      error: err.message,
    });
  }
};

// get feature tour

export const getFeatureTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "succesFully",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "not found ",
      error: err.message,
    });
  }
};

// get tour counts
export const getCountsTour = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

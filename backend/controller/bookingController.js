import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your tour is boocked",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: err.message,
    });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const Book = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "suuccessFully",
      data: Book,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
      error: err.message,
    });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const Books = await Booking.find();

    res.status(200).json({
      success: true,
      message: "successFully getted all ",
      data: Books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: err.message,
    });
  }
};

const express = require("express");
const booking = express.Router();
const BookingController = require("../controllers/booking.controller");

const bookingController = new BookingController();
// booking.get("/", bookingController.indexBooking);
booking.get("/book", bookingController.indexBooking);
// about.get("/2", (req, res) => {
//   res.send("Hello 2");
// });

module.exports = booking;

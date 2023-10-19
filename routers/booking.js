const express = require("express");
const BookingController = require("../controllers/booking.controller");
const bookingRouter = express.Router();

const bookingController = new BookingController();

bookingRouter.get("/book-now/:studioId", bookingController.indexBooking);

module.exports = bookingRouter;

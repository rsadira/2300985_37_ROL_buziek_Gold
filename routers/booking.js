const express = require("express");
const BookingController = require("../controllers/booking.controller");
const permissionMiddleware = require("../middleware/permission.middleware");
const bookingRouter = express.Router();

const bookingController = new BookingController();

bookingRouter.get(
  "/book-now/:studioId",
  permissionMiddleware,
  bookingController.indexBooking
);
bookingRouter.get(
  "/booking-history",
  permissionMiddleware,
  bookingController.renderBookingHistory
);

module.exports = bookingRouter;

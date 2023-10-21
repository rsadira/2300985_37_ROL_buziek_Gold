const express = require("express");
const api = express.Router();

const UserController = require("../../controllers/user.controller");
const BookingController = require("../../controllers/booking.controller");
const permissionMiddleware = require("../../middleware/permission.middleware");

const userController = new UserController();
const bookingController = new BookingController();

// Endpoint User
api.post("/v1/users/register", userController.register);

api.post("/v1/bookings/new", bookingController.createBooking);

api.delete("/v1/bookings/cancel/:bookingId", bookingController.cancelBooking);
module.exports = api;

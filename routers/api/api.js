const express = require("express");
const api = express.Router();

const UserController = require("../../controllers/user.controller");
const BookingController = require("../../controllers/booking.controller");

const userController = new UserController();
const bookingController = new BookingController();

// Endpoint User
api.post("/v1/users/register", userController.register);

api.post("/v1/bookings/create", bookingController.createBooking);

module.exports = api;

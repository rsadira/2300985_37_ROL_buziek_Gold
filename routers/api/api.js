const express = require("express");
const api = express.Router();

const UserController = require("../../controllers/user.controller");
const BookingController = require("../../controllers/booking.controller");
const permissionMiddleware = require("../../middleware/permission.middleware");
const StudioListController = require("../../controllers/studio-list.controller");

const userController = new UserController();
const bookingController = new BookingController();
const studioListController = new StudioListController();

api.post("/v1/users/register", userController.register);

api.post("/v1/bookings/new", bookingController.createBooking);
api.put("/v1/edit-studio/:studioId", studioListController.updateStudio);
api.post("/v1/create-studios", studioListController.createStudio);
api.delete("/v1/bookings/cancel/:bookingId", bookingController.cancelBooking);
module.exports = api;

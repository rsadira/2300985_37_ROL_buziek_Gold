const express = require("express");
const studioDetail = express.Router();
const StudioDetailController = require("../controllers/studio.detail.controller");

const studioDetailController = new StudioDetailController();
// booking.get("/", bookingController.indexBooking);
studioDetail.get("/studio-detail", studioDetailController.indexStudioDetail);
// about.get("/2", (req, res) => {
//   res.send("Hello 2");
// });

module.exports = studioDetail;

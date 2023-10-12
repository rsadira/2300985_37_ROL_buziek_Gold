const express = require("express");
const mainFeatures = express.Router();
const MainFeaturesController = require("../controllers/main-features.controller");

const mainFeaturesController = new MainFeaturesController();
// booking.get("/", bookingController.indexBooking);
mainFeatures.get("/main-features", mainFeaturesController.indexMainFeatures);
// about.get("/2", (req, res) => {
//   res.send("Hello 2");
// });

module.exports = mainFeatures;

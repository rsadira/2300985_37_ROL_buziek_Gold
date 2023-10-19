const express = require("express");
const studioDetail = express.Router();
const StudioDetailController = require("../controllers/studio-detail.controller");

const studioDetailController = new StudioDetailController();

studioDetail.get(
  "/studio-detail/:studioId",
  studioDetailController.studioDetail
);

module.exports = studioDetail;

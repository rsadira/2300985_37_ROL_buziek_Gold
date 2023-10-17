const express = require("express");
const studioDetail = express.Router();
const StudioDetailController = require("../controllers/studio-detail.controller");
const HomeController = require("../controllers/home.controller");
const StudioListController = require("../controllers/studio-list.controller");

const studioDetailController = new StudioDetailController();
// const homeController = new HomeController();
// const studioListController = new StudioListController();

studioDetail.get(
  "/studio-detail/:studioId",
  studioDetailController.studioDetail
);

// studioDetail.get("/home", homeController.indexHome);
// studioDetail.get("/book", studioListController.studioList);

module.exports = studioDetail;

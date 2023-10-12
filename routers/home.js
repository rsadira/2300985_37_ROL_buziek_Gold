const express = require("express");
const homeRouter = express.Router();
const HomeController = require("../controllers/home.controller");
const StudioListController = require("../controllers/studio-list.controller");

const homeController = new HomeController();
const studioListController = new StudioListController();

homeRouter.get("/", homeController.indexHome);

homeRouter.get("/book", studioListController.studioList);

module.exports = homeRouter;

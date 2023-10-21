const express = require("express");
const homeRouter = express.Router();
const HomeController = require("../controllers/home.controller");
const StudioListController = require("../controllers/studio-list.controller");
const permissionMiddleware = require("../middleware/permission.middleware");

const homeController = new HomeController();
const studioListController = new StudioListController();

homeRouter.get("/", homeController.indexHome);

homeRouter.get("/book", permissionMiddleware, studioListController.studioList);
homeRouter.get(
  "/my-studios",
  permissionMiddleware,
  studioListController.renderMyStudios
);
homeRouter.get(
  "/create-studio",
  permissionMiddleware,
  studioListController.indexCreateStudio
);

homeRouter.get(
  "/edit-studio/:studioId",
  permissionMiddleware,
  studioListController.renderEditStudio
);

module.exports = homeRouter;

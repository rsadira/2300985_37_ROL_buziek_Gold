const express = require("express");
const homeRouter = express.Router();
const HomeController = require("../controllers/home.controller");
const StudioListController = require("../controllers/studio-list.controller");
const permissionMiddleware = require("../middleware/permission.middleware");

const homeController = new HomeController();
const studioListController = new StudioListController();

homeRouter.get("/", homeController.indexHome);
// homeRouter.get("/home", homeController.indexHome);

homeRouter.get("/book", permissionMiddleware, studioListController.studioList);

module.exports = homeRouter;

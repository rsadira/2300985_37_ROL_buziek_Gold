const express = require("express");
const home = express.Router();
const HomeController = require("../controllers/home.controller");

const homeController = new HomeController();
home.get("/", homeController.index);
// home.get("/2", (req, res) => {
//   res.send("Hello 2");
// });

module.exports = home;

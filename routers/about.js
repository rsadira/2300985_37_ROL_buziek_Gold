const express = require("express");
const about = express.Router();
const AboutController = require("../controllers/about.controller");
const aboutController = new AboutController();

// about.get("/", aboutController.indexAbout);
about.get("/about", aboutController.indexAbout);
// about.get("/2", (req, res) => {
//   res.send("Hello 2");
// });

module.exports = about;

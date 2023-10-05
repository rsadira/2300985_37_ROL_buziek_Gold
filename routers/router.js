const express = require("express");
const home = require("./home");
const about = require("./about");
const booking = require("./booking");
const userLogin = require("./user");
const studioDetail = require("./studio.detail");

const router = express.Router();

router.use("/", home);
router.use("/home", home);
router.use("/", about);
router.use("/", booking);
router.use("/", userLogin);
router.use("/", studioDetail);

module.exports = router;

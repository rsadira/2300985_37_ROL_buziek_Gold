const express = require("express");
const home = require("./home");
const about = require("./about");
const booking = require("./booking");
const userLogin = require("./user");

const router = express.Router();

router.use("/", home);
router.use("/home", home);
router.use("/", about);
router.use("/", booking);
router.use("/", userLogin);

module.exports = router;

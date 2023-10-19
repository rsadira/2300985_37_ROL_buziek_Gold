const express = require("express");
const homeRouter = require("./home");
const studioDetail = require("./studio-detail");
const api = require("./api/api");
const bookingRouter = require("./booking");
const authRouter = require("./auth");

const router = express.Router();

router.use("/", homeRouter);
router.use("/home", homeRouter);
router.use("/", studioDetail);
router.use("/", bookingRouter);
router.use("/", authRouter);

router.use("/api", api);
module.exports = router;

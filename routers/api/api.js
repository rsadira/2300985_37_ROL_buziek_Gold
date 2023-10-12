const express = require("express");
const studioDetail = require("../studio-detail");
const StudioDetailController = require("../../controllers/studio-detail.controller");
const api = express.Router();

const studioDetailController = new StudioDetailController();

// api.get("v1/studio-detail/:studioId", studioDetailController.getStudioDetail);

module.exports = api;

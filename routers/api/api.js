const express = require("express");
const studioDetail = require("../studio-detail");
const StudioDetailController = require("../../controllers/studio-detail.controller");
const UserController = require("../../controllers/user.controller");
const api = express.Router();

const studioDetailController = new StudioDetailController();
const userController = new UserController();

// Endpoint User
api.post("/v1/users/register", userController.register);

module.exports = api;

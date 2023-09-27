const express = require("express");
const userLogin = express.Router();
const UserLoginController = require("../controllers/user.controller");

const userLoginController = new UserLoginController();

userLogin.get("/login-register", userLoginController.indexUserLogin);

module.exports = userLogin;

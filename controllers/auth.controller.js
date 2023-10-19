const passport = require("passport");
const { User } = require("../models");

module.exports = {
  indexLogin(req, res) {
    res.render("users/login", { user: req.user, title: "Login Berhasil" });
  },
  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  logout(req, res, next) {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
  },
};

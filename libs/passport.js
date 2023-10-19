const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// call model
const { User } = require("../models");
const { Op } = require("sequelize");

const authenticate = (username, password, done) => {
  User.findOne({
    where: {
      [Op.or]: [
        {
          email: {
            [Op.eq]: username,
          },
        },
        {
          username: {
            [Op.eq]: username,
          },
        },
      ],
    },
  }).then((userData) => {
    if (!userData) {
      return done(null, false, { message: "User tidak terdaftar!" });
    }

    bcrypt.compare(password, userData.password).then((isMatch) => {
      if (!isMatch) {
        return done(null, false, {
          message: "Email dan password tidak sesuai!",
        });
      }

      return done(null, userData);
    });
  });
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    authenticate
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => {
    done(null, user);
  });
});

module.exports = passport;

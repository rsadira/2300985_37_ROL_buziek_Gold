"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associate User with Bookings
      this.hasMany(models.Bookings, {
        foreignKey: "user_id", // This is the foreign key in the Booking model
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      user_type: {
        type: DataTypes.ENUM("Musician", "Studio Owner"),
        allowNull: false,
      },
      contact_email: DataTypes.STRING,
      contact_phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
